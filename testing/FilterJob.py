from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.edge.service import Service
import time

# ---------------- Browser Setup ----------------
options = webdriver.EdgeOptions()
options.add_experimental_option("detach", True)  # keep browser open

service = Service()
driver = webdriver.Edge(service=service, options=options)
wait = WebDriverWait(driver, 20)

try:
    # ---------------- OPEN LOGIN ----------------
    driver.get("http://localhost:5173/login")
    time.sleep(2)

    # ---------------- LOGIN ----------------
    wait.until(EC.presence_of_element_located((By.NAME, "email"))).send_keys("saad@gmail.com")
    driver.find_element(By.NAME, "password").send_keys("123456")
    driver.find_element(By.XPATH, "//input[@value='student']").click()
    driver.find_element(By.XPATH, "//button[@type='submit']").click()

    # wait for navbar
    wait.until(EC.presence_of_element_located((By.XPATH, "//a[text()='Jobs']")))
    print("✅ Login successful")
    time.sleep(2)

    # ---------------- GO TO JOBS ----------------
    driver.find_element(By.XPATH, "//a[text()='Jobs']").click()

    wait.until(EC.presence_of_element_located(
        (By.XPATH, "//h1[contains(text(),'Filter Jobs')]")
    ))
    print("✅ Jobs page loaded")
    time.sleep(2)

    # ---------------- FILTER BY DHAKA ----------------
    dhaka_filter = wait.until(EC.element_to_be_clickable(
        (By.XPATH, "//span[text()='Dhaka']")
    ))
    dhaka_filter.click()

    time.sleep(2)  # redux filter render wait
    print("✅ Filter applied: Dhaka")
    time.sleep(2)

    # ---------------- CLICK FIRST JOB DETAILS ----------------
    details_btn = wait.until(EC.element_to_be_clickable(
        (By.XPATH, "//button[text()='Details']")
    ))
    details_btn.click()



    print("🎉 SUCCESS: Filtered job details opened")

except Exception as e:
    print("❌ TEST FAILED")
    print(e)

# browser remains open
time.sleep(5)
