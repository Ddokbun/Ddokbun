# <img src="/uploads/3451fd1b3e4ff74ac5172b7d1b4960c8/image.png" align="left" width="40" height="40"> &nbsp; DDOKBUN - IoT 화분 관리 및 식물 E-커머스 플랫폼

> <h3> 똑똑한 화분, 똑분이

![image](/uploads/08aa7b6deec8926283301580cf9416c2/image.png)

<br>

## 🪴 **Introduce**

> **DDOKBUN**은 스마트 화분을 통해 식물 관리 서비스를 제공하고, 식물, 화분을 판매하는 E커머스 플랫폼입니다.<br>
> 사용자는 본인의 LIFE 스타일에 맞게 식물을 추천받을 수 있으며, 화분 관리 시스템을 통해 효율적으로 식물을 관리할 수 있습니다.

<br>

## 🎥 **소개 영상**

- [UCC 바로가기]()

<br>


## 🕘 **프로젝트 진행 기간**

-  **2022.10.10(월) ~ 2022.11.18(금)**

<br>


## ☃️ **Team**
<table>
 <tr>
    <td align="center"><a href="https://github.com/Jaehwany"><img src="https://avatars.githubusercontent.com/Jaehwany" width="80px;" alt=""></td>
    <td align="center"><a href="https://github.com/Jaehwany"><img src="https://avatars.githubusercontent.com/Jaehwany" width="80px;" alt=""></td>
    <td align="center"><a href="https://github.com/Jaehwany"><img src="https://avatars.githubusercontent.com/Jaehwany" width="80px;" alt=""></td>
    <td align="center"><a href="https://github.com/Jaehwany"><img src="https://avatars.githubusercontent.com/Jaehwany" width="80px;" alt=""></td>
    <td align="center"><a href="https://github.com/Jaehwany"><img src="https://avatars.githubusercontent.com/Jaehwany" width="80px;" alt=""></td>
    <td align="center"><a href="https://github.com/Jaehwany"><img src="https://avatars.githubusercontent.com/Jaehwany" width="80px;" alt=""></td>
  </tr>
  <tr>
    <td align="center">팀장, Frontend</td>
    <td align="center">Frontend</td>
    <td align="center">Frontend</td>
    <td align="center">Backend</td>
    <td align="center">Backend</td>
    <td align="center">Backend</td>
  </tr>
     <tr>
    <td align="center"><a href="https://github.com/"><sub><b>신혜원</b></td>
    <td align="center"><a href="https://github.com/"><sub><b>김채리</b></td>
    <td align="center"><a href="https://github.com/"><sub>허건녕</b></td>
    <td align="center"><a href="https://github.com/"><sub><b>손광진</b></td>
    <td align="center"><a href="https://github.com/"><sub><b>이동욱</b></td>
    <td align="center"><a href="https://github.com/"><sub><b>이재환</b></td>
  </tr>

</table>
     
<br>     

## 📍 PPT

- **[중간 발표 PPT]()**  
- **[최종 발표 PPT]()**
<br>


## 🧾 프로젝트 산출물

- [ERD]()
- [API 명세서]()
- [와이어프레임]()
- [포팅 매뉴얼]()
<br>   



 ## ✔️ 주요 기능

- **기능 1111**


<br>

- **기능 2222**

<br>

- **기능 3333**

<br>


- **기능 4444**



<br><br>
     

## 🖇️ 아키텍처

<img src="/uploads/055a53f56c83bd6436ed7dd3aa7002bd/Group_247.png"  width="800">
     
<br>   <br>

## 🖇️ 기술 스택

<img src="/uploads/e6c2f46f098268cb37eb262d3a12d7b9/Ddokbun_기술스택.png"  width="800">

<br>   <br>

## 🖇️ 개발 환경

<br>

- FrontEnd
   - Typescript
   - Next.js
   - Next PWA
   - Next SEO
   - React
   - Redux-toolkit
   - Three.js
   - Framer-motion
   - Chart.js
   - Styled-Components
   - Tailwind
   - Axios
   - Firebase
   - ESLint
   - Prettier


- BackEnd
   - Spring Boot 2.7.5
   - Spring Data JPA
   - Spring Security
   - Java 11
   - QueryDSL
   - Firebase
   - Redis
   - Kafka
   - MySQL
   - Spark
   - Yarn
   - YOLO v5
   - Scikit Learn
   - Pytorch

- IoT
   - Rasbian

- CI/CD
   - AWS EC2
   - Docker
   - Jenkins
   - nginx
   - certbot

- IDE
   - VS Code
   - IntelliJ
   - MySQL Workbench 8.0

<br><br>

## ✔ 프로젝트 파일 구조


### Frontend

```
frontend
  ├── apis
  ├── assets
  │    ├── commerce
  │    ├── fonts
  │    ├── icon
  │    └── onboarding
  ├── common
  │    ├── Button
  │    ├── Cards
  │    ├── Carousel
  │    ├── DatePick
  │    ├── Dot
  │    ├── GetPostsModal
  │    ├── Graph
  │    ├── Input
  │    ├── Labels
  │    ├── Login
  │    ├── Modal
  │    ├── NavCard
  │    ├── Navbar
  │    ├── PageTitle
  │    └── Spinner
  ├── components 
  │    ├── Flower
  │    ├── admin
  │    ├── commerce
  │    ├── manage
  │    ├── mypage
  │    ├── search
  │    └── welcome
  ├── pages
  │    ├── admin
  │    ├── commerce
  │    ├── login
  │    ├── manage
  │    ├── manage/[userseq]
  │    ├── search
  │    ├── test
  │    └── welcome
  ├── public
  │    ├── icons
  │    └── models
  ├── store  
  ├── styles
  │    ├── animations
  │    ├── commerce
  │    ├── manage
  │    ├── manage/[userseq]
  │    ├── search
  │    ├── temp
  │    └── welcome
  ├── types
  │    ├── admin
  │    ├── commerce
  │    └── search
  └── utils


```

### Backend

```
backend
  ├── ddokbun-batch
  │   ├── conf
  │   └── run
  ├── ddokbun
  │   ├── api
  │   ├── config
  │   ├── domain
  │   │   ├── ai
  │   │   │   ├── dto
  │   │   │   └── service
  │   │   ├── alarm
  │   │   │   ├── dto
  │   │   │   ├── entity
  │   │   │   ├── repository
  │   │   │   ├── res
  │   │   │   └── service
  │   │   ├── auth
  │   │   │   ├── dto
  │   │   │   └── service
  │   │   ├── cart
  │   │   │   ├── dto
  │   │   │   ├── entity
  │   │   │   ├── repository
  │   │   │   └── service
  │   │   ├── order
  │   │   │   ├── dto
  │   │   │   ├── entity
  │   │   │   ├── repository
  │   │   │   └── service
  │   │   ├── plant
  │   │   │   ├── dto
  │   │   │   ├── entity
  │   │   │   ├── repository
  │   │   │   └── service
  │   │   ├── product
  │   │   │   ├── dto
  │   │   │   ├── entity
  │   │   │   ├── repository
  │   │   │   └── service
  │   │   ├── s3
  │   │   │   ├── dto
  │   │   │   └── service
  │   │   ├── survey
  │   │   │   ├── dto
  │   │   │   ├── entity
  │   │   │   ├── repository
  │   │   │   └── service
  │   │   └── user
  │   │   │   ├── dto
  │   │   │   ├── entity
  │   │   │   ├── repository
  │   │   │   └── service
  │   ├── exception
  │   ├── schedule
  │   └── utils
  │       ├── auth
  │       ├── fcm
  │       └── string
  └── ddokbun_consumer
      ├── env
      └── config
```

### IoT

```
iot
  ├── arduino
  └── raspberry
```

<br>
<br>




 ## ✔️ 서비스 화면

<br>

### Onboarding

+ GIF 도배하기



### Commerce

#### 커머스 홈

+ 다양한 배너를 통해 



#### 상품 목록

+ 약 200여종의 식물을 초보집사 / 집꾸미기 / 반려동물 / 공기정화 네가지 카테고리로 분류하여 사용자들이 자신의 목적에 맞는 상품을 구매할 수 있도록 유도하였습니다.
+ 애니메이션을 활용하여 부드러운 효과를 주었습니다.
+ 상품카드에 마우스가 올라갈 시 애니메이션 효과를 주어 상호작용을 추가하였습니다

![commerce_list](README.assets/commerce_list.gif)



####  상품 디테일

+ 카드를 활용하여 식물에 대한 요약정보를 제공하였습니다
+ 상품 디테일 화면에서 바로구매하거나 장바구니에 담을 수 있도록 하였습니다.
+ 유사 상품을 캐러셀 형태로 사용자에게 제공하여 다른 상품도 추천할 수 있도록 했습니다.

![commerce_detail](README.assets/commerce_detail.gif)



#### 설문조사 기반 추천

+ 설문조사를 바탕으로 필터링하여 사용자에게 맞는 식물을 추천하였습니다.
+ forwardRef.focus를 활용해 다음질문으로 넘어가게 하여 UX를 향상시키고자 하였습니다.
+ 필터링한 정보를 바탕으로 식물을 추천하였고, 카드를 재사용하여 생산성을 높였습니다. 


> GIF 도배하기

> GIF 도배하기

> GIF 도배하기



#### 장바구니(스마트화분 사진 갱신후 Gif촬영) / 주문

+ Redux를 활용하여 새로고침 없이도 장바구니 정보가 갱신되도록 하였습니다.
+ 장바구니 페이지에서 수량을 조절하고, 삭제할 수 있도록 하였습니다.
+ 결제정보를 입력하고 유효성 검사를 통해 사용자가 결제를 
