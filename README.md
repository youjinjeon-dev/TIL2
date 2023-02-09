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
  <h4>개념 정리</h4>
  <ul>
  <li>script 태그 : 위치, 갯수 상관 없음. 삽입된 위치에서 바로 실행<br>
  되도록이면 /body 태그 직전에 삽입</li>
  <li>스타일 가이드 : https://google.github.io/styleguide/jsguide.html</li>
  <li>문장 끝에 세미콜론 붙이지 않아도 실행되나 반드시 붙이도록 권장</li>
  <li>문자열 : "", '' 상관 없음<br>
  큰 따옴표로 묶은 문자열 안에 또 다른 문자열을 넣으려면 중복되지 않도록 작은 따옴표 사용</li>
  <li> AND(&&) 조건 계산 빠르게 하는 법 : 첫 번째 조건식이 false면 두 번째 조건식은 체크하지 않고 바로 false. false가 될 확률이 높은 조건을 첫 번째 조건으로 사용함</li>
  <li> OR(||) 조건 계산 빠르게 하는 법 : 조건식 하나만 true여도 바로 true. true가 될 확률이 높은 조건을 첫 번째 조건으로 사용함</li><br><br>
    <li>var 예약어 특징<br>
    1. 함수 영역의 스코프를 가짐<br>
    2. 재할당, 재선언 가능</li>
  <li> let 예약어 특징 <br>
  1. 변수를 선언한 블록({})에서만 유효함 <br>
  2. 값의 재할당은 가능, 재선언 불가능 <br>
  3. 변수 이름 중복해서 사용 불가능 <br>
    4. 변수 선언하기 전에 사용할 경우 오류 메세지 표시 </li>
    <li> const 예약어 특징 <br>
    1. 상수(변하지 않는 값) 변수<br>
    2. 재선언, 재할당 불가<br>
    3. 블록 레벨의 스코프 가짐</li>
    <li> 변수 사용 주의사항<br>
    1. 전역변수(적용 범위 제한X, 특정 지역 밖에서 선언된 변수) 사용을 최소화하기 : 어디서든 접근 가능하기 때문에 메모리 차지가 크고, 오류 발생률이 높음<br>
    2. var 변수는 함수 시작 부분에 선언하기 : 호이스팅(변수 선언을 스코프의 가장 위쪽으로 끌어서 실행) 발생하기 때문<br>
    3. for문에서 카운터 변수를 사용할 때는 var 예약어 사용하지 않기 -> 블록 밖에서 선언하거나 let 예약어 사용<br>
    4. var보다는 let를 사용하기 : 프로그램 합치다 보면 변수가 중복될 가능성이 크기 때문</li><br><br>
    <li> math 객체 : 따로 인스턴스 만들지 않음</li>
    <li> window 객체 : window 객체는 기본 객체로 생략 가능<br>
	(window 메소드 종류 : alert(), close(), open(), prompt() 등)<br></li>
	<li> 이벤트 처리기 : <태그 on이벤트명 = "함수명"> </li>
	<li> DOM(웹 문서에 접근하고 제어할 수 있도록 객체를 사용하여 웹 문서를 체계적으로 정리) 메서드 <br> 
		1. 요소명.getElementById("id명") : 특정한 id가 포함된 DOM 요소에 접근 가능<br>
	2. 요소명.getElementsByClassName("class명") : class 선택자 이름이 들어 있는 DOM 요소에 접근 가능<br>
	3. 요소명.getElementsByTagName("태그명(ex:p태그)") : 태그명을 사용한 DOM 요소에 접근 가능<br>
	4. querySelector(선택자), querySelector(선택자 또는 태그) : 텍스트, 속성 노드까지 자유롭게 제어 가능<br>
	5. getAttribute("속성명") : 속성을 가져옴<br>
	6. setAttribute("속성명", "값") : 원하는 속성값으로 지정</li><br><br><br>
    
  </ul>
  
  <h4>연습문제 풀면서 어려웠던 점</h4>
  <ul>
  <li>ch15 함수와 이벤트 - 마무리 문제 1번<br>
  두 수의 값이 같으면 두 수를 곱하고, 두 수의 값이 다르면 두 수를 더하는 함수 sumMulti를 실행하는 게 문제의 내용이었다. <br>
  값이 (5,10), (10,10)으로 정해져 있는 것을 확인 못 하고 '사용자에게 입력받은 두수의 값'이라는 단어만 보고 값을 입력받는 코드를 작성하였다. <br>
  두 수의 값이 같을 경우에는 리턴값에 오류가 없었지만, 두 수의 값이 다를 경우에는 리턴값에 오류가 있었다. (ex: 3,4 입력 --> 결과값:34) <br>
	  입력한 값을 문자열로 인식하기 때문에 문자를 더하는 오류가 발생하였는데, 이러한 오류를 해결하기 위해서는 문자열을 정수로 반환하는 parseInt()함수의 사용이 필요하다.<br>
	  parseInt()함수의 사용 방법이 익숙하지 않아 처음에는 결과 출력하는 코드에 작성했지만, 문자열로 입력받고 난 이후였기 때문에 결과값에 변화가 없었다.<br>
	  따라서 문자열을 처음 입력 받을 때 바로 정수로 반환하는 코드를 작성하였는데, 처음에는 prompt(parseInt())로 잘못된 순서로 작성하여 오류가 발생하였다.<br>
	  parseInt(문자열, string의 진수를 나타내는 2부터 36까지의 정수)형태로 작성해야 하기 때문에, prompt와 parseInt의 순서를 바꾸어 작성했더니 문제없이 올바른 결과값이 출력된다.		</li>
  
  	function sumMulti(x,y) {
		if(x === y) { // 두 수의 값이 같을 경우, 곱함 
			return x*y;
		} else { // 두 수의 값이 다를 경우, 더함
			return x+y;
		}
 
	var num1 = parseInt(prompt("첫번째 수를 입력하세요")); // 수를 입력해도 문자열로 인식하기 때문에 정수로 전환
	var num2 = parseInt(prompt("두번째 수를 입력하세요"));

	var result = sumMulti(num1,num2);
	console.log(result);
	

  
