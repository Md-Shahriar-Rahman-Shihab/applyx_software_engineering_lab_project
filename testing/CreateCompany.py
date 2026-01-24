from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.edge.service import Service
import time

# ---------------- Browser Setup ----------------
options = webdriver.EdgeOptions()
options.add_experimental_option("detach", True)

service = Service()
driver = webdriver.Edge(service=service, options=options)
wait = WebDriverWait(driver, 20)

try:
    # ---------------- LOGIN ----------------
    driver.get("http://localhost:5173/login")
    time.sleep(2)


    wait.until(EC.presence_of_element_located((By.NAME, "email"))).send_keys("rahman@gmail.com")
    driver.find_element(By.NAME, "password").send_keys("123456")
    driver.find_element(By.XPATH, "//input[@value='recruiter']").click()
    driver.find_element(By.XPATH, "//button[@type='submit']").click()

    wait.until(EC.url_contains("/admin"))
    print("✅ Recruiter Login Successful")
    time.sleep(2)


    # ---------------- CREATE COMPANY ----------------
    driver.get("http://localhost:5173/admin/companies/create")

    company_input = wait.until(EC.presence_of_element_located(
        (By.XPATH, "//input[@placeholder='e.g. JobHunt, Microsoft']")
    ))
    company_input.send_keys("Amazon")

    driver.find_element(By.XPATH, "//button[contains(text(),'Continue')]").click()
    print("✅ Company Created")
    time.sleep(2)


    # ---------------- COMPANY SETUP PAGE ----------------
    wait.until(EC.presence_of_element_located(
        (By.XPATH, "//input[@placeholder='Company location']")
    ))

    # Location
    driver.find_element(By.NAME, "location").clear()
    driver.find_element(By.NAME, "location").send_keys("Dhaka")

    # Website
    driver.find_element(By.NAME, "website").clear()
    driver.find_element(By.NAME, "website").send_keys("https://www.amazon.com")

    # Logo Upload
    driver.find_element(By.XPATH, "//input[@type='file']").send_keys(
        r"C:\Users\HP\Downloads\Compressed\Amazon.in_-1.jpg"
    )

    # ---------------- FIXED DESCRIPTION ----------------
    description_input = driver.find_element(By.NAME, "description")
    description_input.clear()
    description_input.send_keys(
        "Amazon is a leading technology company providing innovative IT solutions."
    )

    print("✅ Company Details Filled")
    time.sleep(2)


    # ---------------- UPDATE COMPANY ----------------
    update_btn = driver.find_element(By.XPATH, "//button[contains(text(),'Update Company')]")
    update_btn.click()
    time.sleep(2)


    # success redirect
    wait.until(EC.url_contains("/admin/companies"))
    print("🎉 SUCCESS: Company Created & Updated Successfully")

except Exception as e:
    print("❌ TEST FAILED")
    print(e)

time.sleep(5)  # browser stays open
