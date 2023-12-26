// HTML을 모두 읽었을때 해당 함수 실행
document.addEventListener('DOMContentLoaded' , function(){
    // 2. h1 요소를 객체로 가져오기
    const header = document.querySelector('h1');
        //document.querySelector('h1'); : 해당 요소를 객체로 호출
        //document.querySelector('h1').value; : 해당 요소의 입력된 값 호출
        //document.querySelector('h1').innerHTML; : 해당 요소 사이의 HTML을 텍스트로 호출 [마크업 코드 읽어옴]
    
    header.textContent = 'HEADERS';             // DOM객체명.textContent = 텍스트호출 [마크업이 만들어낸 텍스트를 읽어옴]
    header.style.color = 'white';               // DOM객체명.style.css속성명 = '값';
    header.style.backgroundColor = 'black';
    header.style.padding = '10px';

    // 3.[313P]
    // querySelectorAll() 을 이용한 h1 dom객체를 여러개/배열 로 반환
    const headers = document.querySelectorAll('h1'); console.log(headers);
    for(let i = 0; i < headers.length; i++){
        if(i%2 == 0 ){
            headers[i].style.color = 'white';
        }else{
            headers[i].style.color = 'aqua';
        }
        headers[i].textContent = i%3 == 0 ? '3배수 O' : '3배수 X';
        headers[i].style.backgroundColor = 'black';
        headers[i].style.padding = '10px';
    }

    // 4.[314P]
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');

    a.textContent = `<h1>textContent 속성</h1>`;
    b.innerHTML = `<h1>innerHTML 속성</h1>`;
})