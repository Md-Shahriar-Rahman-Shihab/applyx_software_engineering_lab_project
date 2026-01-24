from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.edge.service import Service
import time

# To Keep Browser Open Indefinitely
options = webdriver.EdgeOptions()
options.add_experimental_option("detach", True)

# Edge Driver
service_obj = Service()
driver = webdriver.Edge(options=options, service=service_obj)

wait = WebDriverWait(driver, 10)

# ---------- ONLY LOGIN ----------
driver.get("http://localhost:5173/login")

wait.until(EC.presence_of_element_located((By.NAME, "email"))).send_keys("saad@gmail.com")
driver.find_element(By.NAME, "password").send_keys("123456")
driver.find_element(By.XPATH, "//input[@value='student']").click()
driver.find_element(By.XPATH, "//button[@type='submit']").click()


#wait.until(EC.presence_of_element_located((By.NAME, "email"))).send_keys("sanat@gmail.com")
#driver.find_element(By.NAME, "password").send_keys("1234")
#driver.find_element(By.XPATH, "//input[@value='recruiter']").click()
#driver.find_element(By.XPATH, "//button[@type='submit']").click()
selenium.webdriver.common.by
