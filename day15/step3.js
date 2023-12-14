// 전역 자료
const 할일목록 = [];    //할일의 내용을 저장
const 상태목록 = [];    //할일의 상태를 저장
// 지역 자료

// 1. 등록 함수
function 등록함수(){
    console.log('등록함수() 실행');
    //[1.입력]
    const content = document.querySelector('#content').value;
    //[2.처리]
    할일목록.push(content);
    상태목록.push(false);
    console.log(할일목록);
    console.log(상태목록);
    
    //[3.출력]
    document.querySelector('#content').value = '';
    alert('등록 성공');

    출력함수();
}

// 2. 변경 함수
function 변경함수(변경할인덱스){
    console.log('변경함수() 실행' + 변경할인덱스);
    //[1.입력] X
    //[2.처리] false => true / true => false
    상태목록[변경할인덱스] = !상태목록[변경할인덱스];
    console.log([상태목록]);
    //[3.출력]
    출력함수();
}

// 3. 삭제 함수
function 삭제함수(삭제할인덱스){
    console.log('삭제함수() 실행' + 삭제할인덱스);
    //[1.입력] X
    //[2.처리] 배열에서 요소 삭제 .splice()
    할일목록.splice(삭제할인덱스 , 1);  //할일목록 1개 삭제
    상태목록.splice(삭제할인덱스 , 1);  //상태목록 1개 삭제
    //[3.출력]
    출력함수();
}

// 4. 출력 함수
function 출력함수(){
    //1. 어디에 - todoBottom에
    const todoBottom = document.querySelector('#todoBottom');
    //2. 무엇을 - 배열에 있는 여러 요소들을
    let html = '';
        //1. 배열 내 모든 요소들을 하나씩 꺼내기
    for(let i = 0; i < 할일목록.length; i++){
        html += `<div class="todo ${ 상태목록[i] ?'success':'' } ">
                    <div class="content">
                        ${할일목록[i]}
                    </div>
                    <div class="btnBox">
                        <input onclick="변경함수(${i})" type="button" value="변경"/>
                        <input onclick="삭제함수(${i})" type="button" value="삭제"/>
                    </div>
                </div>`;
    }
    //3. 대입
    todoBottom.innerHTML = html;
}