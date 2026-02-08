from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # In a real scenario, you'd replace this with your target URL
        # For this example, we'll use a public example if possible, or just print selectors
        url = "http://localhost:5173" 
        print(f"Navigating to {url}...")
        
        try:
            page.goto(url)
            page.wait_for_load_state('networkidle')
            
            # 1. Discover all buttons
            buttons = page.locator('button').all()
            print(f"\nFound {len(buttons)} buttons:")
            for i, btn in enumerate(buttons):
                text = btn.inner_text().strip()
                name = btn.get_attribute('name') or "N/A"
                id_attr = btn.get_attribute('id') or "N/A"
                print(f"  {i+1}. Text: '{text}', ID: {id_attr}, Name: {name}")

            # 2. Discover all links
            links = page.locator('a').all()
            print(f"\nFound {len(links)} links:")
            for i, link in enumerate(links):
                text = link.inner_text().strip()
                href = link.get_attribute('href') or "N/A"
                print(f"  {i+1}. Text: '{text}', Href: {href}")

            # 3. Discover common inputs
            inputs = page.locator('input, textarea, select').all()
            print(f"\nFound {len(inputs)} input elements:")
            for i, inp in enumerate(inputs):
                tag = inp.evaluate("el => el.tagName.toLowerCase()")
                type_attr = inp.get_attribute('type') or "N/A"
                placeholder = inp.get_attribute('placeholder') or "N/A"
                print(f"  {i+1}. Tag: <{tag}>, Type: {type_attr}, Placeholder: '{placeholder}'")

            # 4. Take a screenshot for visual reference
            page.screenshot(path="element_discovery.png", full_page=True)
            print("\nScreenshot saved to element_discovery.png")

        except Exception as e:
            print(f"Error during discovery: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
