# 한국관광공사 — 배운 문법 중심으로 정리한 버전

## 실행
압축을 모두 풀고 index.html을 크롬에서 여세요. 이미지와 jQuery가 포함되어 있습니다.

## 파일별 역할
- index.html: 화면 내용, 메뉴, 이미지. 메뉴를 수정할 때 이 파일에서 글자를 찾으세요.
- css/style.css: 배치, 색상, 호버 효과, PC·태블릿·모바일 크기.
- js/script.js: 자동 전환, 이전·다음 버튼, 재생·정지.
- js/jquery.min.js: jQuery 원본 라이브러리. 수정할 필요 없습니다.
- img: 세 번째 압축파일의 이미지.

## 배운 내용과 연결
| 배운 문법 | 적용 위치 |
| --- | --- |
| flex / gap / justify-content | 헤더, 사업 카드, 관련사이트 |
| grid / repeat / 1fr | 소식 카드, 서비스 목록 |
| position / z-index | 겹친 배경 사진, 펼침 메뉴 |
| hover / transition / transform | 메뉴 밑줄, 아이콘, 카드 너비, 화살표 |
| @media / calc | PC 1200px 이상, 태블릿 768~1199px, 모바일 767px 이하 |
| let / if / function | 현재 슬라이드 번호와 재생 상태 |
| eq() / index() | 서비스 탭 버튼과 내용 연결 |
| setInterval / clearInterval | 자동 전환 시작과 정지 |
| fadeIn | 배경 사진을 천천히 표시 |
| animate / appendTo / prependTo | 관련사이트 순서를 바꾸는 무한 슬라이드 |

## CSS와 HTML이 처리하는 부분
- PC 메뉴: :hover로 표시, :focus-within으로 키보드 접근도 지원합니다.
- 서비스 아이콘과 밑줄, 사업 카드 확대, 참여 영역 카드: CSS hover + transition.
- 전체메뉴, 검색창, Family Site: HTML details / summary.
- 맨 위로: 앵커 href="#hero" + CSS scroll-behavior.

### 새로 쓰는 작은 문법: details / summary
```html
<details>
  <summary>누르면 열리는 제목</summary>
  <div>펼쳐지는 내용</div>
</details>
```
summary를 누르면 details가 열리고 다시 누르면 닫힙니다. 브라우저가 직접 처리하므로 JavaScript가 필요 없습니다.
CSS에서 details[open]은 열린 상태를 선택합니다. 전체메뉴를 닫으려면 오른쪽 위 X를 다시 누르세요.

### outerWidth(true)
관련사이트에서 글자마다 폭이 다르므로 실제 너비를 측정합니다. width()와 달리 padding·border·margin을 포함해 이동할 한 칸의 길이를 구합니다.

## 제이쿼리 읽는 순서
1. bannerNext(): 마지막 번호이면 0, 아니면 1 증가.
2. bannerShow(): 같은 번호의 배너에 클래스 붙이기.
3. bannerStart(): 일정 시간마다 bannerNext 실행.
4. 이전·다음·정지 버튼 이벤트.
5. visualNext(): 다음 사진을 위에 겹쳐 fadeIn.
6. relatedNext(): 왼쪽 이동 후 첫 항목을 맨 뒤로 옮기기.

## 쉽게 수정하기
- 배경 교체 주기: script.js의 6000 (6초).
- 배경 페이드 시간: fadeIn(1800) (1.8초).
- 서비스 탭 주기: 4500 (4.5초).
- 알림 배너 주기: 4000 (4초).
- 관련사이트 주기: 5000 (5초).
- 최대 콘텐츠 폭: style.css의 .container / max-width: 1280px.
- PC·모바일 간격: style.css 아래쪽 @media 부분.

## 원본 파일에서 정리한 부분
- 메뉴 배열, map(), forEach(), 템플릿으로 HTML을 생성하는 코드를 없앴습니다.
- CSS 변수(var), clamp 대신 직접적인 값과 미디어쿼리를 사용했습니다.
- 자동 슬라이드 번호 계산은 나머지 연산(%) 대신 if / else로 풀었습니다.
- 사업 카드는 모두 제목과 설명을 보여주고, PC에서 올린 카드가 넓어지도록 단순화했습니다.
- 맨 위 버튼은 항상 표시합니다. 글자 크기 조절 버튼은 학습 범위를 줄이기 위해 제외했습니다.
- 검색창은 열기·닫기와 입력까지 제공합니다. 실제 검색 서버는 연결하지 않았고 검색 버튼은 비활성화했습니다.
- href="#"인 링크와 하위 메뉴 문구는 원본처럼 연습용입니다. 뉴스·회사정보는 첨부 파일의 내용을 유지했습니다.
- 전체메뉴와 Family Site는 기본 펼침 기능이므로 슬라이드 애니메이션 없이 열립니다.

이 버전은 제공된 파일을 학습하기 쉽게 정리한 클론이며 공식 사이트가 아닙니다.
