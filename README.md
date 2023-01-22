# TIL2
Today I Learned 2(Book: 한 권으로 끝내는 웹 기본 교과서 HTM+CSS+자바스크립트 웹 표준의 정석)<br><br>
<h3>HTML</h3>
<ul>
<li>table tr태그 : 행,  td태그: 행 안의 셀</li>
<li>object 태그 : pdf 파일 삽입("data="으로 파일 경로 설정)</li>
  <li>웹 브라우저 창 너비에 딱 맞추기: width=100% 지정</li>
  <li>fieldset 태그 : 하나의 폼 안에 구역을 나누어 표시</li>
  <li>radio 버튼에서 하나의 버튼만 선택할 수 있게 하려면 name값을 똑같이 지정해 주어야 함</li>
      ex: input type="radio" name="gift" value="yes"<br>
          input type="radio" name="gift" value="no"
  <li>input type=button : 주로 자바스크립트 실행할 때 사용</li>
  <li>textarea 태그 : 택스트 영역 삽입(cols:글자수, rows:세로줄 수)</li>
  </ul>
  <h3>CSS</h3>
  <h3>JavaScript</h3>
  <ul>
  <li>script 태그 : 위치, 갯수 상관 없음. 삽입된 위치에서 바로 실행<br>
  되도록이면 /body 태그 직전에 삽입</li>
  <li>스타일 가이드 : https://google.github.io/styleguide/jsguide.html</li>
  <li>문장 끝에 세미콜론 붙이지 않아도 실행되나 반드시 붙이도록 권장</li>
  <li>문자열 : "", '' 상관 없음<br>
  큰 따옴표로 묶은 문자열 안에 또 다른 문자열을 넣으려면 중복되지 않도록 작은 따옴표 사용</li>
  <li> AND(&&) 조건 계산 빠르게 하는 법 : 첫 번째 조건식이 false면 두 번째 조건식은 체크하지 않고 바로 false. false가 될 확률이 높은 조건을 첫 번째 조건으로 사용함</li>
  <li> OR(||) 조건 계산 빠르게 하는 법 : 조건식 하나만 true여도 바로 true. true가 될 확률이 높은 조건을 첫 번째 조건으로 사용함</li>
  <li> let 예약어 특징 : <br>
  1. 변수를 선언한 블록({})에서만 유효함 <br>
  2. 값의 재할당은 가능, 재선언 불가능 <br>
  3. 변수 이름 중복해서 사용 불가능 <br>
    4. 변수 선언하기 전에 사용할 경우 오류 메세지 표시 </li>
  </ul>
