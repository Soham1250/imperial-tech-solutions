from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Listen for console events
        page.on("console", lambda msg: print(f"CONSOLE [{msg.type}]: {msg.text}"))
        
        # Listen for page errors (uncaught exceptions)
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

        url = "http://localhost:5173"
        print(f"Navigating to {url} and monitoring logs...")

        try:
            page.goto(url)
            # Wait a bit to capture initial logs
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(2000) 
            
            print("\nNavigation complete. Check the output above for captured logs.")
            
        except Exception as e:
            print(f"Could not connect to {url}: {e}")
            print("Ensure the local server is running (e.g., 'npm run dev').")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
