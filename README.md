# 자바스크립트

- 웹 페이지를 동적으로 동작할 수 있도록 만들어주는 프로그래밍 언어

### 변수 선언

![picture 1](images/fd6512b7d0ed36c11a956f063fe0109a78fa8293af76494d0c4b255bb7edd16d.png)

### 배열 Property, Method

- array.length : 배열의 길이
- array.push(data) : data를 array에 추가
- array.pop() : array의 가장 뒤의 데이터를 추출
- array.includes(data) : array에 data가 포함되어 있는지 boolean으로 반환
- array.indexOf(data) : array에서 data의 인덱스를 반환 없으면 -1 반환

### 객체 Method

- Object.keys() : 객체의 key만을 배열로 반환
- Object.values() : 객체의 value만을 가져와 배열로 반환

### DOM(Document Object Model)

- DOM : 브라우저가 HTML 문서를 파싱하는 과정에서 생겨나는 객체
- 트리노드
- document.querySelector() : HTML 태그 찾아서 불러오기
- document.createElement() : HTML 태그 추가
- document.createElement("li").appendChild : li 태그 생성 후 요소 추가
- document.createElement("li").addEventListener("click",()=>{}) : li 태그 생성 후 클릭 이벤트 리스터 설정

### 스코프

- 스코프 : 변수가 참조 될 수 있는 유효범위
- 전역 스코프 : 전역 변수
- 지역 스코프 : 지역 변수 ex) 함수 안 변수, 조건문 / 반복문 내부 변수
- 스코프 체이닝 : 로컬 -> 스크립트 -> 글로벌 순으로 변수가 존재하는지 확인하는 과정
