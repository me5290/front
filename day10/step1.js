console.log('자바스크립트실행2');

console.log(5+3*2);
console.log((5+3)*2);
console.log(5-3*2);

console.log(10%2);
console.log(10%3);
console.log(10%4);

console.log(10/2);
console.log(10/3);

//몫 구하기 [ parseInt() : 정수로 변환해주는 함수 ]
console.log(parseInt(10/3));

console.log(true);
console.log(false);

console.log(52>273); //false
console.log(52<273); //true
console.log(10===10); //true
console.log(10==='10'); //flase
console.log(10=='10'); //true
console.log('가방'>'하마'); //false

console.log(52>=273); //flase
console.log(52<=273); //true
console.log(10!=11); //true

console.log(!true); //false
console.log(!false); //true

console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

//자료형 검사
console.log(typeof('안녕하세요'));
console.log(typeof(273));
console.log(typeof(true));

console.log(typeof'안녕하세요');
console.log(typeof 50-30); console.log(typeof (50-30));
console.log(typeof false); console.log(typeof(50<30));

//*템플릿 문자열
console.log('표현식 273+52의 값은'+(273+52)+'입니다...!');
// `백틱
console.log(`표현식 273+52의 값은 ${273+52}입니다...!`);

console.log(1=='1');
console.log(false==0);
console.log(""==[]);
console.log(0==[]);

/*100p 마무리 확인 문제
1.불,숫자,숫자,불
2.\\\\
3.녕,하,세,요
4.0,4
*/