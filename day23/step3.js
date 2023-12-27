document.addEventListener('DOMContentLoaded' , function(){
    // 343P
    // 1. 각 요소 객체로 호출
    const select = document.querySelector('select');
    const p = document.querySelector('p');
    // 2. 요소의 이벤트[change : value 값이 바뀔때 마다]등록
    select.addEventListener('change' , function(e){
        console.log(e); // change 이벤트 결과 정보 객체
        console.log(e.currentTarget);   // change 이벤트를 발생시킨 요소
        console.log(e.currentTarget.options);   // select 하위 요소들/배열 반환

        // 방법1
        const options = e.currentTarget.options;
        const index = e.currentTarget.options.selectedIndex;

        p.textContent = `선택 : ${options[index].textContent}`;
        
        // 방법2
        console.log(select.value);
        p.textContent = `선택 : ${select.value}`;
    })

    // 345P
    let 현재값;             // 입력받은 값을 저장
    let 변환상수 = 10;      // 변환할 단위의 계산식

    // 1. 각 요소의 객체 호출
    const select2 = document.querySelector('#select2');
    const input = document.querySelector('input');
    const span = document.querySelector('span');
    // 2. 계산 출력함수 [실행조건 : 1.select2값 변경[change]되었을때 , 2. input 값을 입력[keyup]했을때]
    const calculate = function(){
        span.textContent = (현재값 * 변환상수).toFixed(2);  //toFixed() : 소수점 자르기 함수
    }
    // 3. select2의 값을 change 했을때
    select2.addEventListener('change' , function(e){
        const options2 = e.currentTarget.options;
        const index2 = e.currentTarget.options.selectedIndex;
        변환상수 = Number(options2[index2].value);
        calculate();    // 계산 및 출력 함수 실행
    })
    // 4. input의 값을 keyup 했을때
    input.addEventListener('keyup' , function(e){
        현재값 = Number(e.currentTarget.value);
        calculate();    // 계산 및 출력 함수 실행
    })
})