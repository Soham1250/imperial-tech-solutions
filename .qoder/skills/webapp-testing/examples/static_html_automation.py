import os
from playwright.sync_api import sync_playwright

def run():
    # Use an absolute path for local files
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # Example: Look for an index.html in the project root (adjust as needed)
    html_file = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(current_dir))), "index.html")
    file_url = f"file:///{html_file.replace('\\', '/')}"
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        print(f"Opening local file: {file_url}")
        
        if not os.path.exists(html_file):
            print(f"Warning: {html_file} does not exist. Please ensure there is an index.html to test.")
            # We'll create a dummy one for demonstration if it's missing
            with open("demo.html", "w") as f:
                f.write("<html><body><h1>Hello World</h1><button id='test-btn'>Click Me</button></body></html>")
            file_url = f"file:///{os.path.abspath('demo.html').replace('\\', '/')}"
            print(f"Using demo file: {file_url}")

        page.goto(file_url)
        
        # Verify interactions
        title = page.locator('h1').inner_text()
        print(f"Page Title: {title}")
        
        # Take a screenshot
        page.screenshot(path="static_automation.png")
        print("Screenshot saved to static_automation.png")
        
        browser.close()
        # Cleanup demo file if created
        if os.path.exists("demo.html"):
            os.remove("demo.html")

if __name__ == "__main__":
    run()
