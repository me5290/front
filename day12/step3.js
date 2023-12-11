const 회원리스트 = [];

function 회원등록(){
    //1.입력
    const name = document.querySelector('#nameInput').value;
    //2.처리
    //부가기능2
    if (회원리스트.indexOf(name) >= 0){
        alert('현재 등록된 이름입니다.[중복]');return;
    }
    if (name.length != 3){
        alert('회원명 3글자로 입력해주세요.');return;
    }
    if(!isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])){
        alert('숫자를 입력할수 없습니다.');return;
    }
    회원리스트.push(name);
    console.log(회원리스트);
    //3.출력
    document.querySelector('#nameList').innerHTML = 회원리스트;
    //4.부가기능1
    document.querySelector('#nameInput').value='';
}
function 회원삭제(){
    console.log('회원삭제 함수');
    //1.입력
    const name = document.querySelector('#nameInput').value;
    //2.처리
    const deleteIndex = 회원리스트.indexOf(name);
    if(deleteIndex >= 0){
        회원리스트.splice(deleteIndex,1);
        alert('삭제 했습니다.');
    }else{
        alert('존재하지 않습니다.');
    }
    //3.출력
    document.querySelector('#nameList').innerHTML = 회원리스트;
}