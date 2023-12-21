
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
        작성자 : writer,
        비밀번호 : password,
        제목 : title,
        내용 : content
    };

    let boardArray = JSON.parse(localStorage.getItem('boardArray'));

    if(boardArray == null){
        boardArray = [];
    }
    //객체 내 속성 추가
    board.조회수 = 0;
    boardArray.push(board);

    localStorage.setItem('boardArray' , JSON.stringify(boardArray));

    console.log(board);
    console.log(boardArray);

    //3. html에 출력하기
    document.querySelector('#writer').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#content').value = '';

    location.href="list.html";

    모든글출력();
    return;
}