document.addEventListener('DOMContentLoaded' , function(){
    // 1. 각 요소를 객체에 호출
    const input = document.querySelector('#todo');
    const todoList = document.querySelector('#todoList');
    const addButton = document.querySelector('#addButton');

    // 카운트 변수 선언
    let keyCount = 0;

    // 2. 
    const addTodo = function(){
        // 만약 input의 값이 비어 있으면
        if(input.value.trim() === ''){   // trim() : 문자열 좌우에 공백 제거 함수
            alert('할 일을 입력해주세요.');
            return;
        }

        // html에 객체 추가
        const item = document.createElement('div');
        const checkbox = document.createElement('input');
        const text = document.createElement('span');
        const button = document.createElement('button');

        const key = keyCount;
        keyCount += 1;

        // 새로 생긴 div에 들어갈 속성과 요소
        item.setAttribute('data-key' , key);
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todoList.appendChild(item);

        console.log(item);

        // 체크박스에 체인지 이벤트 등록
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change' , function(e){
            // 만약 체크박스에 체크가 되어있다면 item.style.textDecoration을 line-through
            item.style.textDecoration = e.target.checked ? 'line-through' : '';
        })

        // span에 input 값 넣기
        text.textContent = input.value;

        // 버튼에 클릭 이벤트 등록
        button.textContent = '제거하기';
        button.addEventListener('click' , function(){
            removeTodo(key);
        })

        //input 내용 비우기
        input.value = '';
    }
    
    // 제거하는 함수
    const removeTodo = function(key){
        const item = document.querySelector(`[data-key="${key}"]`);
        todoList.removeChild(item); //removeChild() : 객체 제거 함수
    }

    // 엔터를 눌러도 추가되는 함수
    addButton.addEventListener('click' , addTodo);
    input.addEventListener('keyup' , function(e){
        const ENTER = 13;
        // 만약 e의 키코드가 엔터 = 13 과 동일 하다면
        if(e.keyCode === ENTER){
            addTodo();
        }
    })
})