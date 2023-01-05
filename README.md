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

### 호이스팅

- var, 선언식 function은 호이스팅에 의해서 선언부를 상단에 조정한다.
- 함수 표현식(const fn = () =>{}), let, const는 호이스팅이 적용되지 않는다.
- let, const 는 선언 단계와 초기화 단계가 나뉘어진다.
- let, const는 호이스팅이 이루어지긴 하지만 직접 읽히기 전까지 선언 단계와 초기화 단계 사이인 TDZ(Temporal Dead Zone)에 머물기 때문에 읽히기 전에 호출이 되면 에러가 발생한다.

### Optional Chainning

- obj?.name === obj && obj.name
- ?. : 오브젝트가 언디파인드인지 확인하고 오브젝트가 존재 할 경우 하위 name을 찾는다.

### 삼항 연산자

- (조건) ? (참일 경우 실행) : (거짓일 경우 실행);
