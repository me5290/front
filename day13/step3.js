/*
    반복문
        - 반복 작업
        - 형태
            for( let i = 0 ; i < 반복횟수 ; i++){
                문장
            }
            for( 초기값 ; 조건문 ; 증감식){
                실행코드;
            }

            1. let i = 0;       : 반복을 시작할때 처음 값 [ 초기값 ]
            2. i < 반복횟수      : 반복을 할 수 있는 조건 [ 조건을 충족 시 반복 실행 ]
            3. 문장              : 반복시 실행되는 코드
            4. i++              : 1회 반복 후 실행되는 증감식
        
        -실행순서
            1. [ 초기값 ] 변수에 처음값을 초기화
            2. [ 조건문 ] for{}안/반복문에 들어갈수 있는지 검사
            3. [ 실행문 ] {}안에 있는 코드 모두 실행
            4. [ 증감식 ] 실행문 후에 증가 또는 감소.
                //초기값 1번만 실행되므로 증감식 이후 조건문으로 이동
            5. [ 조건문 ] 조건검사
            6. [ 실행문 ] 실행코드
            7. [ 증감식 ] 증감 또는 감소
*/
// 1. 우유 구매를 10번 출력해
console.log('우유 구매');
for ( let i = 1; i <= 10; i++){
    console.log('for-우유 구매');
}
// 178P 예제
for ( let i = 0; i < 5; i++){
    console.log(`${i}번째 반복입니다.`)
}

// 179P 예제
let output = 0;
for(let i = 1; i <= 100; i++){
    output += i;
}
console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`)

// 180P 예제 for문과 배열의 관계(인덱스:0부터 ~ 1씩 증가 패턴,배열 내 인덱스 순회/확인)
const todos = ['우유구매' , '업무 메일 확인하기' , '필라테스 수업'];

for (let i = 0; i < todos.length; i++){
    console.log(`${i}번째 할일 : ${todos[i]}`);
}

//역순
for (let i = todos.length-1; i >= 0; i--){
    console.log(`${i}번째 할일 : ${todos[i]}`);
}

let outPrint = '';  //공백이 저장된 변수
//예1) 1부터 10이하까지 1씩 증가 반복 [ 한줄표시 ];
for( let i = 1; i <= 10; i++){
    outPrint += `${i}  `;
}
console.log(outPrint);

//예2) 1부터 10이하까지 1씩 증가 반복 [ ul 표시 ];
outPrint = '';
for (let i = 1; i <= 10; i++){
    outPrint += `<li> ${i} </li>`;
}
document.querySelector('ul').innerHTML = outPrint;

//예3) 1부터 10이하까지 1씩 증가 반복 [ 누적 합계 ]
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}
/*
    예4 반복문 순서도.
        초기값 :    i = 1    ,    sum = 0
        for 시작
            i          조건[i<=10]     실행문[sum += i]     sum[누계]       증감식[i++]
            i = 1      true            0+1 => 1            sum = 1         i = 2
            i = 2      true            1+2 => 3            sum = 3         i = 3
            i = 3      true            3+3 => 6            sum = 6         i = 4
            i = 4      true            6+4 => 10           sum = 10        i = 5
            i = 5      true            10+5 => 15          sum = 15        i = 6
            i = 6      true            15+6 => 21          sum = 21        i = 7
            i = 7      true            21+7 => 28          sum = 28        i = 8
            i = 8      true            28+8 => 36          sum = 36        i = 9
            i = 9      true            36+9 => 45          sum = 45        i = 10
            i = 10     true            45+10 => 55         sum = 55        i = 11
            i = 11     false
*/

//예5) 1부터 100까지 7배수 누적합계
sum = 0;
for(let i = 0; i <= 100; i+=7){
    sum += i;
}
console.log(`1~100까지 7배수 합 : ${sum}`);

sum = 0;
for(let i = 1; i <= 100; i++){
    if( i % 7 == 0 ){
        sum += i;
    }
}
console.log(`1~100까지 7배수 합 : ${sum}`);

//for 중첩
for(let 부모 = 1; 부모 <= 5; 부모++){
    console.log(`==== ${부모} ====`);
    for(let 자식 = 1; 자식 <= 3; 자식++){
        console.log(`${부모}의 자식 : ${자식}`);
    }
}

//예6) 구구단
    //1. 2단
const 단 = 2;
for(let 곱 = 1; 곱 <= 9; 곱++){
    console.log(`${단} X ${곱} = ${단*곱}`);
}
    //2. 2~9단
for(let dan = 2; dan <= 9; dan++){
    console.log(`${dan} 단`);
    for(let gob = 1; gob <= 9; gob++){
        console.log(`${dan} X ${gob} = ${dan*gob}`);
    }
}