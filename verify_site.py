from playwright.sync_api import sync_playwright
import sys
import time

def run_tests():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        )
        page = context.new_page()
        
        url = "http://localhost:3000"
        print(f"🚀 Starting Verification for {url}...")
        
        try:
            # 1. Navigation Test
            print("--- Test 1: Navigation ---")
            page.goto(url)
            page.wait_for_load_state('networkidle')
            title = page.title()
            print(f"✅ Page Title: {title}")
            assert "Imperial Tech Solutions" in title
            
            # 2. SEO Property Verification
            print("\n--- Test 2: SEO & Meta Data ---")
            description = page.locator('meta[name="description"]').get_attribute('content')
            print(f"✅ Meta Description: {description[:50]}...")
            assert len(description) > 50
            
            scripts = page.locator('script[type="application/ld+json"]').all()
            print(f"✅ Found {len(scripts)} JSON-LD Structured Data blocks")
            assert len(scripts) >= 1

            # 3. Component Interaction (Contact Form Submission)
            print("\n--- Test 3: Contact Form submission ---")
            # Navigate to bottom or find form
            contact_section = page.locator('#contact')
            contact_section.scroll_into_view_if_needed()
            
            print("Filling form...")
            page.fill('input[id="name"]', "Test User")
            page.fill('input[id="email"]', "test@example.com")
            page.fill('input[id="company"]', "Imperial QA")
            page.fill('textarea[id="message"]', "This is an automated test message to verify form submission logic.")
            
            print("Submitting...")
            page.click('button[type="submit"]')
            
            # Wait for success state
            page.wait_for_selector('text=Message Sent to the Wind!')
            print("✅ Form submitted successfully (Success message found)")
            
            # 4. Scroll Transitions (Visual Check)
            print("\n--- Test 4: Visual Confirmation ---")
            page.evaluate("window.scrollTo(0, 0)")
            page.wait_for_timeout(1000)
            page.screenshot(path="test_results/homepage_top.png")
            
            page.evaluate("window.scrollTo(0, window.innerHeight * 2)")
            page.wait_for_timeout(1000)
            page.screenshot(path="test_results/homepage_scroll.png")
            print("✅ Screenshots saved to test_results/")

            print("\n✨ ALL TESTS PASSED SUCCESSFULLY! ✨")
            
        except Exception as e:
            print(f"\n❌ TEST FAILED: {str(e)}")
            page.screenshot(path="test_results/failure_state.png")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    import os
    if not os.path.exists("test_results"):
        os.makedirs("test_results")
    run_tests()
