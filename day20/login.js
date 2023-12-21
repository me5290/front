// 1. 로그인 함수 : 실행조건 - 로그인버튼을 클릭했을때
function 로그인(){
    console.log('로그인()함수');
    // 1. 입력
    const mid = document.querySelector('#mid').value;
    const mpw = document.querySelector('#mpw').value;
    // 2. 처리
        // 회원가입에서 저장된 객체 가져오기
    const memberArray = JSON.parse(localStorage.getItem('memberArray'));
        // 로그인에서 입력받은 객체
    const member = {
        mid : mid ,
        mpw : mpw
    };
        // 비교
    for(let i = 0; i < memberArray.length; i++){
        console.log(memberArray[i]);
        let oldMember = memberArray[i];
        if(oldMember.mid == member.mid && oldMember.mpw == member.mpw){
            alert('로그인 성공');
            location.href="step1.html";
            return;
        }
    }
    alert('로그인 실패');
    
    console.log(memberArray);
    console.log(member);
}