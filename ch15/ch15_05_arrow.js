// 매개변수가 없는 화살표 함수
const hi = () => { return "안녕하세요?" };
const bye = () => "안녕히 가세요";

// 매개변수가 1개 있는 화살표 함수
let hi2 = user => { document.write(user + "님 안녕하세요"); }

// 매개변수가 2개 이상인 화살표 함수
let sum = (a, b) => a + b;