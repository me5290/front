/*
const input = prompt('message','_default');

alert(input);

const input2 = confirm('수락하시겠습니까?');

alert(input2);

//3. 숫자 자료형으로 변환
console.log(Number("273"));
console.log(Number("a"));
console.log(Number(true));

//4. 숫자 연산을 사용해 자료형 변환
console.log("52" - 3);
console.log(true - 1);
console.log(true + 1);

//5. 문자열 자료형으로 변환
console.log(String(52.273));
console.log(true);

console.log(52.273+"");
console.log(true+"");

//6. 불 자료형으로 변환
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
let 변수;
console.log(Boolean(변수));

//7. 논리 부정 연산자를 사용해 자료형 변환
console.log(!273);
console.log(!!273);
console.log(!!0);

//124p 예제
const rawInput = prompt('inch 단위의 숫자를 입력해주세요.');
const inch = (rawInput);
const cm = inch * 2.54;
alert(`${inch}inch는 ${cm}cm 입니다.`)

function 변환기능(){
    const 인치 = document.querySelector('input');
    console.log(인치.value);

    document.querySelector('h3').innerHTML = 인치.value;
}
*/

//3번 문제
const cm정수 = prompt("cm 단위의 숫자를 입력해주세요.");
const 인치 = Number(cm정수) / 2.54;
alert(`${cm정수}cm는 ${인치}inch 입니다.`);

//4번 문제
let 반지름 = Number(prompt('원의 반지름을 입력해주세요.'));

console.log(` 원의 넓이 : ${3.14 * 반지름 * 반지름} / 원의 둘레 : ${2 * 3.14 * 반지름} `);

//5번문제
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러*1207;

console.log(`달러 : ${달러} -> 원화 : ${원화}`)