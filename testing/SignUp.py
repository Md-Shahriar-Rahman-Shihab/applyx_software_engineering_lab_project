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

# ---------- SIGNUP (COMMENTED) ----------
driver.get("http://localhost:5173/signup")

#Student part
wait.until(EC.presence_of_element_located((By.NAME, "fullname"))).send_keys("saad")
driver.find_element(By.NAME, "email").send_keys("saad@gmail.com")
driver.find_element(By.NAME, "phoneNumber").send_keys("01711111111")
driver.find_element(By.NAME, "password").send_keys("1234")
driver.find_element(By.XPATH, "//input[@value='student']").click()
driver.find_element(By.XPATH, "//input[@type='file']").send_keys(
     r"C:\Users\HP\Downloads\Compressed\Messi.jpg")
driver.find_element(By.XPATH, "//button[contains(text(),'Signup')]").click()
time.sleep(3)

#Recruiter part
#wait.until(EC.presence_of_element_located((By.NAME, "fullname"))).send_keys("sanat")
#driver.find_element(By.NAME, "email").send_keys("sanat@gmail.com")
#driver.find_element(By.NAME, "phoneNumber").send_keys("01711111111")
#driver.find_element(By.NAME, "password").send_keys("1234")
#driver.find_element(By.XPATH, "//input[@value='recruiter']").click()
#driver.find_element(By.XPATH, "//input[@type='file']").send_keys(
#     r"C:\Users\HP\Downloads\Compressed\Messi.jpg")
#driver.find_element(By.XPATH, "//button[contains(text(),'Signup')]").click()
selenium.webdriver.common.by