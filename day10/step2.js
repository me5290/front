//1. 상수만들기 [4단계]
    //1. const
    //2. 상수명
    //3. =
    //4. 자료
const pi=3.141592;
//2. 상수 호출하는 방법 [상수 이름 작성]
console.log(pi);
//3. 상수의 값을 변경하는 방법 X [호출해서 다시 대입]
//pi = 3.97; //Uncaught TypeError: Assignment to constant variable.

const r = 10;
//4. 상수의 연산
console.log(2*pi*r);

//5. 동일한 상수명 사용 [상수명은 식별용 이므로 중복이 불가능]
//const pi=3.97; //Uncaught SyntaxError: Identifier 'pi' has already been declared

//6. 상수의 값 대입을 안했을때 [값을 넣지 않을 경우 오류 발생]
//const pi2; //Uncaught SyntaxError: Missing initializer in const declaration


//1. 변수 만들기 [4단계]
    //1. let
    //2. 변수명
    //3. =
    //4. 값
let pi3=3.141592;
//2. 변수 호출
console.log(pi3);
console.log("pi3 : " + pi3);
console.log(`pi3 : ${pi3}`);
//3. 변수의 값 변경 [값 변경시에도 변수 호출후 다시 대입]
pi3=3.15;
console.log(pi3);
//4. 변수의 연산
let r3=10;
console.log(2*pi3*r3);

//var 와 let 키워드 차이
let value1=10;
//let value1=10; //불가능
var value2=10;
var value2=10; //가능

// 복합 대입 연산자
let value=10;
value += 10;
value = value+10;
console.log(value);
//* js에서 html 작성할때
let list=``; //list 변수에 빈문자열 넣은 상태로 선언
list += `<ul>`;
list += `<li>Hello</li>`;
list += `<li>JavaScript</li>`;
list += `</ul>`;

document.write(list);

//예제1 : 2개의 숫자를 입력받아 더한 값을 html에 <h3> 안에 출력
    //입력받은 예) 3,5
    //html 출력 예) 8
    //input에 입력된 결과를 반환
let ex1Value1=prompt("예1 첫번째 숫자를 입력하세요.");
console.log(typeof ex1Value1);
    //타입 변환1
//ex1Value1=parseInt(ex1Value1);
    console.log(typeof ex1Value1);
    //타입 변환2 [Number("숫자") -> 숫자]
ex1Value1=Number(ex1Value1);
console.log(typeof ex1Value1);

let ex1Value2=Number(prompt("예1 두번째 숫자를 입력하세요."));

document.write(` <h3> 예제1 결과 ${ ex1Value1 + ex1Value2 } </h3> `);
//예제2 : 2개의 숫자를 입력받아 더 큰수를 html에 <h3> 안에 출력

let ex2Value1 = Number(prompt('예제2 첫번째 숫자를 입력하세요.'));
let ex2Value2 = Number(prompt('예제2 두번째 숫자를 입력하세요.'));

console.log(ex2Value1 > ex2Value2);

console.log(ex2Value1 > ex2Value2 ? '진실' : '거짓' );

document.write(` <h3> 예제2 결과 ${ ex2Value1 > ex2Value2 ? ex2Value1 : ex2Value2} </h3> `);