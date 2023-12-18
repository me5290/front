// 0. 전역변수 [배열]
        // - 속성[상태] 마다 배열을 하나씩 만들면 배열이 너무 많아져서 관리가 힘들어짐
        // 객체지향 나오기전 - 여러 속성들을 하나의 배열에서 관리하고 싶다.
            // 1. boardArray = []
                // - 단점 : 하나의 서로 다른 유형의 4가지의 데이터 저장하면 인덱스 관리 힘들다
            // 2. boardArray = ["작성자/비밀번호/제목/내용","작성자/비밀번호/제목/내용","작성자/비밀번호/제목/내용"]
                // - 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함
                // - 입력 데이터에는 구분 문자가 포함되면 안된다
                // - 단점 : 분해하고 분해 후 순서 기억해야함
const boardArray = [];

// 1. [C]글쓰기         [글쓰기 버튼을 클릭했을때]
function 글쓰기(){
    //1. html로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    //2. 배열에 저장하기
    // **!! 직접 /로 구분해서 하나로 만들었는데 이제는 객체로 하나로 만들기
    const board = {
        작성자 : writer, 비밀번호 : password, 제목 : title, 내용 : content
    };
    //객체 내 속성 추가
    board.조회수 = 0;
    boardArray.push(board);

    console.log(board);
    console.log(boardArray);

    //3. html에 출력하기
    document.querySelector('#writer').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#content').value = '';

    모든글출력();
    return;
}
// 2-1. [R]모든글출력   [1.JS가 열렸을때 2.글쓰기/글수정/글삭제 처리 했을때 새로고침]
function 모든글출력(){
    const tableBody = document.querySelector('table>tbody'); console.log(tableBody);

    let html=``; console.log(html);

    for(let i = 0; i < boardArray.length; i++){
        console.log(boardArray[i]);
        html += `<tr onclick="개별글출력(${i})">
                    <td>${i+1}</td>
                    <td>${boardArray[i].제목}</td>
                    <td>${boardArray[i].작성자}</td>
                    <td>${boardArray[i].조회수}</td>
                </tr>
        `
    }

    tableBody.innerHTML = html;

    return;
}
// 2-2. [R]개별글출력   [해당 글을 선택했을때]
function 개별글출력(index){  //매개변수 : (대상) 보고자하는 식별번호
    console.log(index);

    const boardBox = document.querySelector('#boardBox');
    // - replaceAll("교체할문자열" , "새로운문자열"); : 특정 문자열 치환함수
    // - \n을 <br/>로 변경 : <textarea>에서 줄바꿈 처리하면 \n으로 저장되고 html에 출력할때 <br/>로 치환
    
    // 조회수 증가
    boardArray[index].조회수 += 1;
    모든글출력();

    let html = `<div>
                    작성자 : ${boardArray[index].작성자} 조회수 : ${boardArray[index].조회수}
                </div>
                <div>
                    제목 : ${boardArray[index].제목}
                </div>
                <div>
                    내용 : ${boardArray[index].내용.replaceAll("\n" , "<br/>")}
                </div>
                <input onclick="글수정(${index})" type="button" value="수정"/>
                <input onclick="글삭제(${index})" type="button" value="삭제"/>
                `;

    boardBox.innerHTML = html;

    return;
}
// 3. [U]글수정         [글수정 버튼을 클릭했을때]
function 글수정(index){      //매개변수 : (대상) 수정할 식별번호
    console.log(index);

    // 1. 검증[유효성검사] - 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면
    const checkPw = prompt('비밀번호');

    if(checkPw == boardArray[index].비밀번호){
        // 수정할 값들을 입력받기
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');
        // 수정처리
        console.log(boardArray[index]); //수정 전
        boardArray[index].제목 = updateTitle;
        boardArray[index].내용 = updateContent;

        console.log(boardArray[index]); //수정 후
        alert('수정 완료');
        //새로고침
        모든글출력();
        개별글출력(index);
    }else{
        alert('패스워드가 다릅니다. 수정불가!');
    }

    return;
}
// 4. [D]글삭제         [글삭제 버튼을 클릭했을때]
function 글삭제(index){      //매개변수 : (대상) 삭제할 식별번호
    console.log(index);
    
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].비밀번호){
        //삭제처리
        boardArray.splice(index , 1);
        alert('삭제 완료');
        //새로고침
        모든글출력();
        document.querySelector('#boardBox').innerHTML = ''; //개별글보기 구역 초기화
    }else{
        alert('패스워드가 다릅니다. 삭제불가!')
    }

    return;
}

/*
    함수 만들때 고민할점
        1. 언제 실행하는 함수인지
        2. 함수 안으로 넣을 매개변수
        3. 함수 밖으로 반환할 값
        4. 무엇을 실행 하는지
*/