const todos = ['우유 구매' , '업무 메일 확인하기' , '필라테스 수업'];
// 1. - i는 0부터 마지막인덱스까지 1씩 증가 하면서 console.log 반복 실행
for(let i = 0 ; i < todos.length ; i++){
    console.log(todos[i]);
}
// 2. - i는 rodos 배열 내 요소 인덱스를 하나씩 대입 받으면서 console.log 반복 실행
for(let i in todos){
    console.log(todos[i]);
}
// 3. - i는 todos 배열 내 요소 값을 하나씩 대입 받으면서 console.log 반복 실행
for(let i of todos){
    console.log(i);
}
// 4. - i는 0부터 마지막인덱스까지 console.log 출력 후 증감이 반복 실행
let i = 0;
while(i < todos.length){
    console.log(i);
    i++;
}
//무한루프
let j = 0;
/*
while(true){
    alert(`${j}번째 반복입니다.`);
    j++;
}

for(let j = 0 ; true ; j++){
    alert(`${j}번째 반복입니다.`);
}

for(;;){
    alert(`번째 반복입니다.`);
}
*/
/*
let p = 0;
while(confirm('계속 진행하시겠습니까?')){
    alert(`${p}번째 반복입니다.`);
    p++;
}
*/
/*
for(let m = 0; true ; m++){
    alert(`${m}번째 반복입니다.`);
    //조건에 따른 무한루프 종료 break;
    const isContinue = confirm('계속 할까요?');
    if(!isContinue){
        break;      //가장 가까운 for/while 탈출
    }
}
*/
for(let m = 0; m < 5 ; m++){
    continue;   //반복 작업을 멈추고 반복문의 처음으로 이동
    alert(m);   //vscode에서 지원하는 기능 => 의미없는 투명색 코드
}
// 185P 1~10까지 짝수만 누적 합계 구하기
let output = 0;
for(let m = 1; m <= 10; m++){
    if(m % 2 === 1 ){
        continue;
    }
    output += m;
}
console.log(output);

// 191P 확인문제
    // 1. #for in 반복문 0 1 2 3 #for of 반복문 사과 배 귤 바나나
    // 2. const => let
    // 3. for (let i = 1; i <= 100; i++){output *= i;}