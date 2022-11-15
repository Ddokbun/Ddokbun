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
     

## 🖇️ 아키텍처

<img src="/uploads/055a53f56c83bd6436ed7dd3aa7002bd/Group_247.png"  width="800">
     
<br>   <br>

## 🖇️ 기술 스택

<img src="/uploads/e6c2f46f098268cb37eb262d3a12d7b9/Ddokbun_기술스택.png"  width="800">

<br>   <br>

## 🖇️ 개발 환경

- BackEnd

   - Spring Boot 2.7.2
   - Spring Data JPA
   - Spring Validation
   - Java 11
   - QueryDSL 5.0
   - Lombok 1.18.24
   - Firebase 8.x
   - Gradle 7.4.x
   - Swagger 3.x

- DB

   - MySQL 8.0.29 

- CI/CD

   - AWS EC2
   - Docker
   - Jenkins

- IDE
   - IntelliJ
   - MySQL Workbench 8.0

<br>

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
backend-flask
backend
  ├── auth-service
  │   ├── api
  │   ├── clinet
  │   ├── config
  │   ├── dto
  │   ├── entity
  │   ├── exception
  │   ├── info
  │   ├── error
  │   ├── repository
  │   ├── service
  │   └── util
  ├── chat-service
  │   ├── api
  │   ├── clinet
  │   ├── config
  │   ├── dto
  │   ├── error
  │   ├── repository
  │   └── service
  ├── cs-service
  │   ├── api
  │   ├── clinet
  │   ├── controller
  │   ├── dto
  │   ├── entity
  │   ├── repository
  │   ├── scheduler
  │   └── service
  ├── pay-service
  │   ├── client
  │   ├── controller
  │   ├── dto
  │   └── service
  ├── user-service
  │   ├── api
  │   ├── clinet
  │   ├── config
  │   ├── dto
  │   ├── entity
  │   ├── exception
  │   ├── info
  │   ├── repository
  │   ├── service
  │   └── util
  ├── eureka
  └── gateway
      └── config
```





 ## ✔️ 주요 기능

- **1111**

 


- **222**



- **333**




- **444**



</br></br>

 ## ✔️ 서비스 

</br>

> **111** - 111111111


