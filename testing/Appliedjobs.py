from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.edge.service import Service
import time

# ---------------- Browser Setup ----------------
options = webdriver.EdgeOptions()
options.add_experimental_option("detach", True)  # browser infinite open

service = Service()
driver = webdriver.Edge(service=service, options=options)
wait = WebDriverWait(driver, 20)

try:
    # ---------------- OPEN LOGIN ----------------
    driver.get("http://localhost:5173/login")
    time.sleep(2)

    # ---------------- LOGIN ----------------
    wait.until(EC.presence_of_element_located((By.NAME, "email"))).send_keys("emon@gmail.com")
    driver.find_element(By.NAME, "password").send_keys("123456")
    driver.find_element(By.XPATH, "//input[@value='student']").click()
    driver.find_element(By.XPATH, "//button[@type='submit']").click()

    # wait for navbar after login
    wait.until(EC.presence_of_element_located((By.XPATH, "//a[text()='Jobs']")))
    print("✅ Login successful")

    time.sleep(2)

    # ---------------- CLICK JOBS ----------------
    driver.find_element(By.XPATH, "//a[text()='Jobs']").click()

    # wait for jobs grid
    wait.until(EC.presence_of_element_located(
        (By.XPATH, "//button[text()='Details']")
    ))
    print("✅ Jobs page loaded")
    time.sleep(2)

    # ---------------- CLICK FIRST JOB DETAILS ----------------
    first_details_btn = driver.find_elements(
        By.XPATH, "//button[text()='Details']"
    )[0]
    first_details_btn.click()
    time.sleep(2)

    # ---------------- WAIT FOR JOB DESCRIPTION ----------------
    wait.until(EC.presence_of_element_located(
        (By.XPATH, "//button[contains(text(),'Apply')]")
    ))
    print("✅ Job details page opened")
    time.sleep(2)

    # ---------------- CLICK APPLY NOW ----------------
    apply_btn = driver.find_element(
        By.XPATH, "//button[contains(text(),'Apply Now')]"
    )
    apply_btn.click()

    # ---------------- VERIFY APPLY SUCCESS ----------------
    wait.until(EC.presence_of_element_located(
        (By.XPATH, "//button[contains(text(),'Already Applied')]")
    ))

    print("🎉 SUCCESS: Job applied successfully")

except Exception as e:
    print("❌ TEST FAILED")
    print(e)

# keep browser open
time.sleep(5)
