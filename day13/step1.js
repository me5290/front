console.log('step1.js 열림');

const idArray = [];     // 1. 아이디를 저장하는 배열
const pwArray = [];     // 2. 패스워드를 저장하는 배열

function 회원가입(){
    console.log('회원가입 버튼 함수') ;
    //1. 입력   document.querySelector('선택자').value;
    const signId = document.querySelector('#signId').value;
    const signPw = document.querySelector('#signPw').value;
    //2. 처리
    idArray.push(signId);
    pwArray.push(signPw);
    //3. 출력
    alert('회원가입이 완료 되었습니다.');
        document.querySelector('#signId').value='';
        document.querySelector('#signPw').value='';
};

function 로그인(){
    console.log('로그인 버튼 함수') ;
    //1. 입력
    const loginId = document.querySelector('#loginId').value;
    const loginPw = document.querySelector('#loginPw').value;
    //2. 처리   배열명.indexOf(값)
    const sIndex = idArray.indexOf(loginId);
    if( sIndex >= 0 && pwArray[sIndex] == loginPw){
        //1. 만약에 입력받은 로그인 아이디가 배열 내 존재하면
        //2. 찾은 아이디 인덱스의 패스워드도 동일한지
    //3. 출력
        alert('로그인 성공');
    }else{
        alert('동일한 회원정보가 없습니다.');
    }
};