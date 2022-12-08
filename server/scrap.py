import time
import pandas as pd
# from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
chrome_options = Options()
import sys
headers = {'Content-Type': 'application/json'}
service = ChromeService(executable_path=ChromeDriverManager().install())

chrome_options.add_argument("--headless")

def inputvalues(value,element):
    for i in value:
        element.send_keys(i)


# load_dotenv()
enrollmentValue = sys.argv[1]
dateOfbirthValue = sys.argv[3]
passwordValue = sys.argv[2]
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(service=service)
driver.get("https://webkiosk.jiit.ac.in/")
enrollment_number = driver.find_element(By.ID,"MemberCode")
inputvalues(enrollmentValue,enrollment_number)
dateOfBirth = driver.find_element(By.ID,"DATE1")
inputvalues(dateOfbirthValue,dateOfBirth)
password = driver.find_element(By.ID,"Password101117")
inputvalues(passwordValue,password)
captcha = driver.find_element(By.TAG_NAME,"i").text
captchaInput = driver.find_element(By.ID,"txtcap")
inputvalues(captcha,captchaInput)
submit = driver.find_element(By.ID,'BTNSubmit').send_keys(Keys.RETURN)

try :
    a = driver.find_element(By.TAG_NAME,'frameset')
    iframe = driver.find_elements(By.TAG_NAME,'frame')[2]
    driver.switch_to.frame(iframe)
    driver.find_element(By.XPATH,'/html/body/table/tbody/tr[3]/td/div/div[4]').click()
    driver.find_element(By.XPATH,'/html/body/table/tbody/tr[3]/td/div/span[4]/a[6]').click()
    driver.switch_to.default_content()
    iframe2 = driver.find_elements(By.TAG_NAME,'frame')[3]
    driver.switch_to.frame(iframe2)
    x = driver.find_element(By.ID,'exam')
    drop=Select(x)
    drop.select_by_visible_text("2021ODDSEM")
    driver.find_element(By.XPATH,'/html/body/form/table/tbody/tr[2]/td/input').click()
    table =[]
    table = driver.find_element(By.XPATH,'/html/body/table[2]/tbody')
    rows = table.find_elements(By.TAG_NAME,'tr')
    heading = []
    tableRows = []
    titles = rows[0].find_elements(By.TAG_NAME,'td')
    for i in titles:
        heading.append(i.text)
    rows = rows[1:-1]
    for i in rows:
        temp = []
        coloums = i.find_elements(By.TAG_NAME,'td')
        for j in coloums:
            temp.append(j.text)
        tableRows.append(temp)

    df = pd.DataFrame(tableRows)
    subjects = []
    for i in tableRows:
        subjects.append(i[1])
    df.columns = heading
    try :
        print(df)
        df.to_csv('studentsList.csv')
    except:
        print(404)
except:
    print(404)

time.sleep(1)
driver.close()