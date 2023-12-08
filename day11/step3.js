//문제1. 3개의 점수를 각 input으로 입력받아 총점과 평균을 span에 출력하시오.
function 연습버튼을클릭했을때실행되는코드모음상자(){
    //input에 입력받은 값 가져오기
    //1. 입력
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    //2. 처리
    let sumValue = Number(value1) + Number(value2) + Number(value3);
    let avgValue = sumValue / 3;

    //3. 출력
    document.querySelector('#result').innerHTML = `총점 : ${sumValue}점 평균 : ${avgValue}`;
}

//문제2. 2개 정수를 입력받아 더 큰 수를 출력
function 문제2함수(){
    //1. 입력
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);

    //2. 처리
    let result = 0;
    if ( value1 > value2 ){
        result = value1+"가 큽니다.";
    }else if (value1 < value2 ){
        result = value2+"가 큽니다.";
    }else{
        result = "두 수는 같다.";
    }

    //3. 출력
    document.querySelector('#result').innerHTML = `${result}`
}

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력
function 문제3함수(){
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);

    let result="";
    if ( value1 > value2 && value1 > value3 ){
        result = value1+"가 큽니다.";
    }else if ( value2 > value1 && value2 > value3 ){
        result = value2+"가 큽니다.";
    }else if ( value3 > value1 && value3 > value2 ){
        result = value3+"가 큽니다.";
    }else {
        "모두 같습니다."
    }

    document.querySelector('#result').innerHTML = `${result}`
}

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){
    let value1 = Number(document.querySelector('#input1').value);

    let result="";
    if ( value1 >= 90 ){
        result = "합격";
    }else{
        result = "탈락";
    }

    document.querySelector('#result').innerHTML = `${result}`
}
          
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5함수(){
    let value1 = Number(document.querySelector('#input1').value);

    let result="";
    if ( value1 >= 90 ){
        result = "A등급";
    }else if ( value1 < 90 && value1 >= 80){
        result = "B등급";
    }else if ( value1 < 80 && value1 >= 70){
        result = "C등급";
    }else{
        result = "재시험";
    }

    document.querySelector('#result').innerHTML = `${result}`
}

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function 문제6함수(){
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;

    let result="";
    if ( value1 == "admin" && value2 == 1234 ){
        result = "로그인 성공";
    }else {
        result = "로그인 실패";
    }

    document.querySelector('#result').innerHTML = `${result}`
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 
function 문제7함수(){
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);


}