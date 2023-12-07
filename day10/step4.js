// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력
/*
let score1 = Number(prompt('국어 점수'));
let score2 = Number(prompt('영어 점수'));
let score3 = Number(prompt('수학 점수'));

let 총점 = score1 + score2 + score3;
let 평균 = 총점 / 3

console.log(` 총점 : ${총점}점 / 평균 : ${평균}점 `);

// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
let 반지름 = Number(prompt('반지름'));

console.log(` 원 넓이 : ${ 반지름 * 반지름 * 3.14 }`);

// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력 [- 54.5   84.3 두 실수 입력시   결과 : 64%]
let 실수1 = Number(prompt('실수1'));
let 실수2 = Number(prompt('실수2'));

let 백분율 = (실수1/실수2) * 100;

console.log(`두 실수의 백분율 : ${parseInt (백분율)}`);

// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
let 정수 = Number(prompt('정수'));

console.log(정수 % 2 == 0 ? '짝수' : '홀수' );

// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력
let 정수2 = Number(prompt('정수'));

console.log(정수2 % 7 == 0);

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]
let 금액 = Number(prompt('십만원 단위의 금액'));
let 십만원권 = parseInt(금액/100000);
금액 -= (십만원권*100000);
let 만원권 = parseInt(금액/10000);
금액 -= (만원권*10000);
let 천원권 = parseInt(금액/1000);
console.log( `십만원 : ${십만원권}장 , 만원 : ${만원권}장, 천원 : ${천원권}장` );

// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]
let 아이디 = prompt('아이디를 입력하세요.');
let 비밀번호 = prompt('비밀번호를 입력하세요.');

console.log(`로그인 결과 ${아이디 == 'admin' && 비밀번호 == 1234}`);

// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
let 정수3 = Number(prompt('정수'));

console.log(`홀수 이면서 7배수인지? ${정수3%2 == 1 && 정수3%7 == 0}`);

// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력
let 정수4 = Number(prompt('정수'));
let 정수5 = Number(prompt('정수'));

console.log(`더 큰수는? ${정수4 > 정수5 ? 정수4 : 정수5}`);

// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 
let 정수6 = Number(prompt('정수'));
let 정수7 = Number(prompt('정수'));
let 정수8 = Number(prompt('정수'));

let max = 정수6;
max = max < 정수7 ? 정수7 : max;
max = max < 정수8 ? 정수8 : max;

console.log(`가장 큰수는? ${ max }`);

//[ JS 연산자 과제1 ]
//문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
let 정수1 = Number(prompt('정수'));
let 정수2 = Number(prompt('정수'));
let 정수3 = Number(prompt('정수'));

// - 자릿수 각 비교해서 스왑하는 방법

    //1. 첫번째 자리 비교 [비교 2번]
    let temp = 정수1 > 정수2 ? 정수2 : 정수1;
    정수2 = 정수1 > 정수2 ? 정수1 : 정수2;
    정수1 = 정수1 > 정수2 ? temp : 정수1;

    temp = 정수1 > 정수3 ? 정수3 : 정수1;
    정수3 = 정수1 > 정수3 ? 정수1 : 정수3;
    정수1 = 정수1 > 정수3 ? temp : 정수1;

    //2. 두번째 자리 비교 [비교 1번]
    temp = 정수2 > 정수3 ? 정수3 : 정수2;
    정수3 = 정수2 > 정수3 ? 정수2 : 정수3;
    정수2 = 정수2 > 정수3 ? temp : 정수2;

    //3. 세번째 자리 비교 x [비교 0번]

    //4. 결과 출력
    console.log(`${정수1},${정수2},${정수3}`);

//문제12 : [ 가위바위보 게임 ] 
   //- 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   //- 승리자 판단과 무승부 경우의수를 출력하시오.
   //[입력]
      //플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      //플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   //[경우의수 판단]
      //플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      //플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      //비겼을경우 '무승부' 출력

      let player1 = Number(prompt('플레이어1'))
      let player2 = Number(prompt('플레이어2'))
      let answer = player1==player2 ? 
                          '무승부' :  player1==(player2+1)%3 ? 
                                      '플레이어1 승리' :  '플레이어2 승리';
      console.log( answer );
*/