import argparse
import os
import signal
import socket
import subprocess
import sys
import time
from typing import List, Tuple

def is_port_open(port: int, host: str = 'localhost') -> bool:
    """Check if a port is open and listening."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.connect((host, port))
            return True
        except (ConnectionRefusedError, socket.timeout):
            return False

def wait_for_port(port: int, timeout: float = 60.0):
    """Wait for a port to become available."""
    start_time = time.time()
    while time.time() - start_time < timeout:
        if is_port_open(port):
            return True
        time.sleep(0.5)
    return False

def main():
    parser = argparse.ArgumentParser(description='Manage server lifecycle for automation.')
    parser.add_argument('--server', action='append', help='Command to start a server (can be used multiple times)')
    parser.add_argument('--port', type=int, action='append', help='Port to wait for (matches order of --server)')
    parser.add_argument('--timeout', type=float, default=60.0, help='Timeout in seconds to wait for each port')
    parser.add_argument('command', nargs=argparse.REMAINDER, help='The automation command to run after servers are ready')

    args = parser.parse_args()

    if not args.server or not args.port:
        print("Error: At least one --server and --port must be specified.")
        parser.print_help()
        sys.exit(1)

    if len(args.server) != len(args.port):
        print(f"Error: Number of servers ({len(args.server)}) must match number of ports ({len(args.port)}).")
        sys.exit(1)

    if not args.command:
        print("Error: No automation command specified.")
        sys.exit(1)

    # Remove the '--' separator if it exists
    if args.command and args.command[0] == '--':
        args.command = args.command[1:]

    processes: List[subprocess.Popen] = []
    
    try:
        # Start all servers
        for server_cmd, port in zip(args.server, args.port):
            print(f"Starting server: {server_cmd} (waiting for port {port})")
            # Use shell=True for complex commands, and start in a new process group if possible
            # On Windows, we can use creationflags
            creationflags = 0
            if os.name == 'nt':
                creationflags = subprocess.CREATE_NEW_PROCESS_GROUP

            p = subprocess.Popen(
                server_cmd,
                shell=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                bufsize=1,
                creationflags=creationflags
            )
            processes.append(p)

            # Wait for the port to become ready
            if not wait_for_port(port, timeout=args.timeout):
                print(f"Error: Server on port {port} failed to start within {args.timeout}s.")
                # Print any output from the failed server
                if p.poll() is not None:
                    out, _ = p.communicate()
                    print(f"Server output:\n{out}")
                sys.exit(1)
            print(f"Server on port {port} is ready.")

        # Run the automation command
        print(f"Executing automation: {' '.join(args.command)}")
        try:
            # We run the command and wait for it to complete
            result = subprocess.run(args.command, check=False)
            sys.exit(result.returncode)
        except Exception as e:
            print(f"Error executing automation: {e}")
            sys.exit(1)

    finally:
        # Cleanup: shutdown all servers
        print("Cleaning up servers...")
        for p in reversed(processes):
            if p.poll() is None:
                if os.name == 'nt':
                    # On Windows, taskkill is often more reliable for cleaning up shell processes
                    try:
                        subprocess.run(['taskkill', '/F', '/T', '/PID', str(p.pid)], capture_output=True)
                    except Exception:
                        p.terminate()
                else:
                    # On Unix, kill the whole process group
                    try:
                        os.killpg(os.getpgid(p.pid), signal.SIGTERM)
                    except Exception:
                        p.terminate()
            p.wait()
        print("Done.")

if __name__ == "__main__":
    main()
