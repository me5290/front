document.addEventListener('DOMContentLoaded' , function(){
    let counter = 0;
    let isConnect = false   // isConnect를 false로 대입

    // html에 있는 요소를 상수에 대입
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const connectButton = document.querySelector('#connect');
    const disconnectButton = document.querySelector('#disconnect');

    // h1에 클릭 했을때 counter 숫자가 올라가는 함수
    const listener = function(event){
        console.log(event);
        h1.textContent = `클릭 횟수 : ${counter++}`
    }

    // 이벤트 연결 버튼을 클릭했을때 실행되는 함수
    connectButton.addEventListener('click' , function(){
        if (isConnect === false){   // isConnect가 false 일때
            h1.addEventListener('click' , listener);    // h1 클릭 시 listener함수 실행
            p.textContent = '이벤트 연결 상태 : 연결';   // p에 연결이라고 출력
            
            console.log(isConnect);

            isConnect = true;   // isConnect를 true로 변환
        }
    })

    // 이벤트 제거 버튼을 클릭했을때 실행되는 함수
    disconnectButton.addEventListener('click' , function(){
        if (isConnect === true){    // isConnect가 true 일때
            h1.removeEventListener('click' , listener);     // h1 클릭 시 listener함수 실행되지 않음
            p.textContent = '이벤트 연결 상태 : 해제';       // p에 해제라고 출력
            
            console.log(isConnect);

            isConnect = false;  // isConnect를 false로 변환
        }
    })
})

/*
    326P 마무리

    1. 2
    2. #header , .active
    3. 4
    4. 
        style.boderRadius
        style.fontFamily
        style.lineHeight
        style.width
        style.boxZizing
*/