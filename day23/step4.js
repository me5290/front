document.addEventListener('DOMContentLoaded' , function(){
    // 347P
    // 1.
    let timer = 0;      // 타이머(초)
    let timerId = 0;    // 시간을 체크하는 함수를 가지는 변수

    // 2. 각 요소를 객체로 호출
    const h1 = document.querySelector('h1');
    const checkbox = document.querySelector('input');

    // 3. 체크박스의 이벤트[change] 등록
    checkbox.addEventListener('change' , function(e){
        // 4. checked 속성 확인
        console.log(checkbox.checked);

        // 5. 만약에 체크가 되어있으면
        if(e.currentTarget.checked){    // 체크 된 상태
            // 6. 1초마다 익명함수를 실행
            timerId = setInterval(function(){
                timer += 1;
                h1.textContent = `${timer}초`;
            },1000)
        }else{  // 체크 해제 상태
            clearInterval(timerId);
        }
    })

    // 348P
    // 1. 각 요소를 객체로 호출
    const output = document.querySelector('#output');
    const radios = document.querySelectorAll('[name=pet]');

    // 2. 모든 라디오버튼을 하나씩 호출
    for(let i = 0; i < radios.length; i++){
        // 3. 이벤트 등록
        radios[i].addEventListener('change' , function(e){
            // [1]
            const current = e.currentTarget;    // 이벤트를 발생시킨 요소

            if(current.checked){    // 만약에 해당 요소가 체크되어 있으면 value 출력
                output.textContent = `좋아하는 애완동물은 ${current.value}이시군요!`
            }
            // [2]
            const checkValue = document.querySelector('input[name=pet]:checked').value;
            output.textContent = `좋아하는 애완동물은 ${checkValue}이시군요!`
            console.log(checkValue);
        })
    }
})