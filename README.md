# [**Project 7**] 디에이그라운드 실습 과제
## 🔗 배포 주소

- 아래 URL을 클릭하면 배포된 페이지로 이동합니다.
    
    [https://daground-sandbank.netlify.app/](https://daground-sandbank.netlify.app/)
    

<br>

## **⚙**개발 환경

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/Styled%20Components-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white"/></a>

<br>

## 👫 참여 멤버

- 손한빈:  탭 컨테이너 컴포넌트, 리덕스 모듈
- 김도연 : 새로 올라왔어요 컴포넌트(캐러셀)
- 유지수 : 콘텐츠 더보기 컴포넌트
- 박세은 : 디테일 컴포넌트
- 유혜정:  구독하기,좋아요 & 공유하기 버튼 컴포넌트

<br>

## 🕹 설치 및 시작방법

```
# install dependencies
 $ npm install

# serve with hot reload at localhost:8888
 $ npm start
```

<br>

## 🖥️ 구현 목록

<aside>
💡 샌드뱅크 모바일 앱 내 인포탭을 참고하여 웹으로 변환 제작

</aside>

### 1. 상단 Tab bar

`알쓸B잡` `유튜브` `인사이트`


![탭](https://user-images.githubusercontent.com/81206124/158330099-6ba300ae-fffd-4eac-b985-8255dcd16bcb.gif)


- tab 간 이동시 슬라이딩 애니메이션

<br>


### 2. Tab 별 페이지
![메인리스트](https://user-images.githubusercontent.com/81206124/158329552-9865a556-0fca-4532-99a2-52418daf1b92.gif) ![상세페이지](https://user-images.githubusercontent.com/81206124/158329763-3c6975eb-4b89-40c1-8ba5-21cd529cf089.gif) ![좋아요](https://user-images.githubusercontent.com/81206124/158329828-14500120-6774-47f4-b3bc-f7cc71acc75e.gif)



1. 메인 리스트 페이지
    - [새로 올라왔어요] Carousel View 구현
    - [구독하기]버튼 클릭 시 https://sandbank.io로 새 창 열림
    - 콘텐츠 리스트(더보기 버튼 클릭 시 각 sector에 맞게 조회) 
2. 컨텐츠 상세페이지
    - 상세 내용 및 영상 재생
    - 미디엄링크 또는 노션 바로가기
3. 좋아요, 공유하기(메인리스트, 상세페이지)
