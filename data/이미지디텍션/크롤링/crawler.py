# from cgitb import html
# from urllib.request import urlopen
# from bs4 import BeautifulSoup as bs
# from urllib.parse import quote_plus

# base_url = "https://search.naver.com/search.naver?where=image&sm=tab_jum&query="
# search_query = input("검색어를 입력하세요 : ")

# url = base_url + quote_plus(search_query)
# html = urlopen(url)
# soup = bs(html, "html.parser")
# img = soup.find_all(class_='_img')

# n = 1
# for i in img:
#     imgUrl = i['data-source']
#     with urlopen(imgUrl) as f:
#         with open('./img/' + search_query + str(n)+'.jpg','wb') as h: # w - write b - binary
#             img = f.read()
#             h.write(img)
#     n += 1
# print('다운로드 완료')


from selenium import webdriver
from selenium.webdriver.common.by import By
from urllib.parse import quote_plus
from urllib.request import urlopen
import os
import time
from selenium.webdriver.common.keys import Keys
import pandas as pd
 
 
def save_images(images, save_path):
    for index, image in enumerate(images[:30]):  # images[:크롤링하고 싶은 사진 개수]
        src = image.get_attribute('src')
        t = urlopen(src).read()
        file = open(os.path.join(save_path, str(index + 1) + ".jpg"), "wb")
        file.write(t)
        print("img save " + save_path + str(index + 1) + ".jpg")
 
 
def create_folder_if_not_exists(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print('Error: Creating directory. ' + directory)
 
 
def make_url(search_term):
    # 네이버 이미지 검색
    base_url = 'https://search.naver.com/search.naver?where=image&section=image&query='
    # # CCL 상업적 이용 가능 옵션
    # end_url = '&res_fr=0&res_to=0&sm=tab_opt&color=&ccl=2' \
    #           '&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&recent=0&datetype=0&startdate=0&enddate=0&gif=0&optStr=&nso_open=1'
    return base_url + quote_plus(search_term)
 
 
def crawl_images(search_term):
    # URL 생성
    url = make_url(search_term)
 
    # chrome 브라우저 열기
    options = webdriver.ChromeOptions()
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    browser = webdriver.Chrome('chromedriver', options=options)
    browser.implicitly_wait(1)  # 브라우저를 오픈할 때 시간간격을 준다.
    browser.get(url)

    for i in range(1,3):
        browser.find_element(By.XPATH,"//body").send_keys(Keys.END) #키보드 END키를 누른다
        time.sleep(2)
    
    #8. 지금 현재 보이는 웹페이지의 html코드를 저장하기
    # time.sleep(1)  #네트워크 느릴까봐 안정성을 위해 sleep해줌

 
    # 이미지 긁어오기
    # images = browser.find_elements_by_class_name("_image")
    images = browser.find_elements(By.CLASS_NAME, "_image")
 
    # 저장 경로 설정
    save_path = "C:/Users/multicampus/Desktop/이미지클롤러/" + search_term + "/"
    create_folder_if_not_exists(save_path)
 
    # 이미지 저장
    save_images(images, save_path)
 
    # 마무리
    print(search_term + " 저장 성공")
    browser.close()
 
 
if __name__ == '__main__':
    plants = pd.read_excel('C:/Users/multicampus/Desktop/이미지클롤러/식물이름들고오기/똑분이 데이터.xlsx', usecols=[1])
    plants_list = plants.values.tolist()
    for word in plants_list:
        crawl_images(word[0])
        time.sleep(1)