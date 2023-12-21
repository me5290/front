
function 개별글출력(index){  //매개변수 : (대상) 보고자하는 식별번호
    console.log(index);
    
    location.href="view.html";

    let boardArray = JSON.parse(localStorage.getItem('boardArray'));

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