// 267P
// 1.
const l = 123.456789;
console.log(l.toFixed(2));
console.log(l.toFixed(3));

// 2.
const m = Number('숫자로 변환할 수 없는 경우');
console.log(m);
console.log(m === NaN);
console.log(Number.isNaN(m));

// 3.
const n = 10/0;
console.log(n);
const o = -10/0;
console.log(o);

Number.isFinite(n);

// 269P
// 1. .trim() : 문자열 양쪽 끝에 공백 없애기
console.log(`         앞과 뒤에 공백도 들어가고         `.trim());

// 2. .split()
const timeList = "12:30\n15:21";
console.log(timeList);
const timeArray = timeList.split("\n");
console.log(timeArray);
const time = timeArray[0];
console.log(time);
const hour = time.split(':');
console.log(hour[0]);

// 3. JSON
    // 1. JS객체 --> JSON문자열 : JSON.stringify()
    // 2. JSON문자열 --> JS객체 : JSON.parse()

// 356P 좀 더 알아보기2
// localStorage : 브라우저에 저장 , 브라우저 자체가 꺼지면 사라짐 , 다른 탭에서 공유
// sessionStorage : 브라우저에 저장 , 탭 꺼지면 메모리도 사라짐 , 같은 탭에서 공유
//localStorage.setItem('키','값');
localStorage.setItem('이름','유재석'); //'이름' 이라는 키로 '유재석' 값을 저장

console.log(localStorage.getItem('이름')); //'이름' 이라는 키를 넣어서 '유재석' 값을 호출

// 예2)
const 회원목록 = [{이름 : '유재석'},{이름 : '강호동'}];

localStorage.setItem('회원정보목록',회원목록);
localStorage.setItem('회원정보목록2',JSON.stringify(회원목록));