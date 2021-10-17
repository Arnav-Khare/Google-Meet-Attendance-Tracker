import os
import time
import pandas as pd
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options

chrome_options = Options()

# chrome_options.add_argument("--headless")

def inputvalues(value,element):
    for i in value:
        print(i)
        element.send_keys(i)
        time.sleep(1)


load_dotenv()
enrollmentValue = os.getenv('enrollmentNumber')
dateOfbirthValue = os.getenv('dateOfBirth')
passwordValue = os.getenv('password')
driver = webdriver.Chrome('./chromedriver',options=chrome_options)
driver.get("https://webkiosk.jiit.ac.in/")
enrollment_number = driver.find_element_by_id("MemberCode")
inputvalues(enrollmentValue,enrollment_number)
dateOfBirth = driver.find_element_by_id("DATE1")
inputvalues(dateOfbirthValue,dateOfBirth)
password = driver.find_element_by_id("Password101117")
inputvalues(passwordValue,password)
captcha = driver.find_element_by_tag_name("i").text
captchaInput = driver.find_element_by_id("txtcap")
inputvalues(captcha,captchaInput)
submit = driver.find_element_by_id('BTNSubmit').send_keys(Keys.RETURN)

try :
    a = driver.find_element_by_tag_name('frameset')
    iframe = driver.find_elements_by_tag_name('frame')[2]
    driver.switch_to.frame(iframe)
    driver.find_element_by_xpath('/html/body/table/tbody/tr[3]/td/div/div[4]').click()
    driver.find_element_by_xpath('/html/body/table/tbody/tr[3]/td/div/span[4]/a[6]').click()
    driver.switch_to.default_content()
    iframe2 = driver.find_elements_by_tag_name('frame')[3]
    driver.switch_to.frame(iframe2)
    x = driver.find_element_by_id('exam')
    drop=Select(x)
    drop.select_by_visible_text("2021ODDSEM")
    driver.find_element_by_xpath('/html/body/form/table/tbody/tr[2]/td/input').click()
    table =[]
    table = driver.find_element_by_xpath('/html/body/table[2]/tbody')
    rows = table.find_elements_by_tag_name('tr')

    heading = []
    tableRows = []
    titles = rows[0].find_elements_by_tag_name('td')
    for i in titles:
        heading.append(i.text)

    rows = rows[1:-1]
    for i in rows:
        temp = []
        coloums = i.find_elements_by_tag_name('td')
        for j in coloums:
            temp.append(j.text)
        tableRows.append(temp)

    df = pd.DataFrame(tableRows)
    df.columns = heading
    print("Saving CSV")
    try :
        print(df)
        df.to_csv('timeTable.csv')
        print("CSV Saved ")
    except:
        print("Error Saving CSV...!")
except:
    print('Login Error')



# search_bar.send_keys(Keys.RETURN)
# print(driver.current_url)
# input(a)
time.sleep(1)
driver.close()