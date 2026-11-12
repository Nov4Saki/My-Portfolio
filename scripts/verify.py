import os
import http.server
import socketserver
import threading
import time
from playwright.sync_api import sync_playwright

os.makedirs(".verification", exist_ok=True)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=r"c:\projects\getting hired\personal_portfolio", **kwargs)

server = socketserver.TCPServer(("127.0.0.1", 8999), Handler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 1. Desktop EN Dark (Homepage)
    page = browser.new_page(viewport={"width": 1400, "height": 900})
    page.goto("http://127.0.0.1:8999/index.html?lang=en")
    page.wait_for_timeout(1000)
    page.screenshot(path=".verification/01_home_en_dark.png", full_page=False)
    print("01 Home EN Dark captured")

    # Scroll down to Featured Builds
    page.evaluate("window.scrollTo(0, 950)")
    page.wait_for_timeout(500)
    page.screenshot(path=".verification/02_home_featured_en.png", full_page=False)
    print("02 Home Featured EN captured")

    # Scroll down to Directory List & About
    page.evaluate("window.scrollTo(0, 2000)")
    page.wait_for_timeout(500)
    page.screenshot(path=".verification/03_home_directory_en.png", full_page=False)
    print("03 Home Directory EN captured")

    # 2. Desktop AR Dark (Homepage RTL)
    page.goto("http://127.0.0.1:8999/index.html?lang=ar")
    page.wait_for_timeout(1000)
    page.screenshot(path=".verification/04_home_ar_dark.png", full_page=False)
    print("04 Home AR Dark captured")

    # 3. Light Deck Theme Toggle
    theme_btn = page.locator("#themeToggle")
    if theme_btn.count() > 0:
        theme_btn.click()
        page.wait_for_timeout(500)
    page.screenshot(path=".verification/05_home_ar_light.png", full_page=False)
    print("05 Home AR Light captured")

    # 4. Project Detail (VERA in EN)
    page.goto("http://127.0.0.1:8999/project.html?id=vera&lang=en")
    page.wait_for_timeout(1000)
    page.screenshot(path=".verification/06_project_vera_en.png", full_page=False)
    print("06 Project VERA EN captured")

    # 5. Project Detail (Invoice Checker in AR)
    page.goto("http://127.0.0.1:8999/project.html?id=invoice-checker&lang=ar")
    page.wait_for_timeout(1000)
    page.screenshot(path=".verification/07_project_invoice_ar.png", full_page=False)
    print("07 Project Invoice AR captured")

    # 6. Mobile Viewport (iPhone 14 / 390x844)
    mobile_page = browser.new_page(viewport={"width": 390, "height": 844})
    mobile_page.goto("http://127.0.0.1:8999/index.html?lang=en")
    mobile_page.wait_for_timeout(1000)
    mobile_page.screenshot(path=".verification/08_home_mobile_en.png", full_page=False)
    print("08 Home Mobile EN captured")

    browser.close()

server.shutdown()
print("All verification screenshots successfully completed!")
