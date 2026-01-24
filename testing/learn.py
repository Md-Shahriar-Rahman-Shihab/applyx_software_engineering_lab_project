import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.edge.service import Service

# ---------------- Browser Setup ----------------
options = webdriver.EdgeOptions()
options.add_experimental_option("detach", True)  # browser infinite open

service = Service()
driver = webdriver.Edge(service=service, options=options)
wait = WebDriverWait(driver, 15)

try:
    # ---------------- OPEN HOME ----------------
    driver.get("http://localhost:5173/")
    time.sleep(1)

    # ---------------- CLICK LEARN FROM NAVBAR ----------------
    learn_btn = wait.until(EC.element_to_be_clickable(
        (By.XPATH, "//a[text()='Learn']")
    ))
    learn_btn.click()

    time.sleep(1)

    # ---------------- VERIFY LEARN PAGE ----------------
    wait.until(EC.presence_of_element_located(
        (By.XPATH, "//h1[contains(text(),'Learn with Apply')]")
    ))
    print("✅ Learn page loaded")

    # ---------------- CLICK A VIDEO ----------------
    html_course = wait.until(EC.element_to_be_clickable(
        (By.XPATH, "//h2[contains(text(),'HTML Full Course')]")
    ))
    html_course.click()

    # ---------------- VERIFY VIDEO OPEN ----------------
    wait.until(EC.presence_of_element_located(
        (By.XPATH, "//iframe[contains(@src,'youtube.com')]")
    ))

    print("🎉 SUCCESS: Video opened successfully")

except Exception as e:
    print("❌ TEST FAILED")
    print(e)
