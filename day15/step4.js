//전역 자료
const 날짜 = [];
const 항목 = [];
const 금액 = [];

//1. 등록 함수
function 등록함수(){
    console.log('등록함수() 실행');
    //[1.입력]
    const con1 = document.querySelector('#con1').value;
    const con2 = document.querySelector('#con2').value;
    const con3 = document.querySelector('#con3').value;
    //[2.처리]
    날짜.push(con1);
    항목.push(con2);
    금액.push(Number(con3));
    console.log(날짜);
    console.log(항목);
    console.log(금액);

    //[3.출력]
    document.querySelector('#con1').value = '';
    document.querySelector('#con2').value = '';
    document.querySelector('#con3').value = '';
    alert('등록 성공');

    출력함수();
    합계함수();
    콤마찍기();
}
console.log(금액);
//2. 삭제 함수
function 삭제함수(삭제할인덱스){
    날짜.splice(삭제할인덱스 , 1);
    항목.splice(삭제할인덱스 , 1);
    금액.splice(삭제할인덱스 , 1);

    출력함수();
}

//3. 출력 함수
function 출력함수(){
    const list = document.querySelector('#print');

    let html = '';

    for(let i = 0; i < 날짜.length; i++){
        html += `<tr>
                    <td>${날짜[i]}</td>
                    <td>${항목[i]}</td>
                    <td>${금액[i]}</td>
                    <td>
                        <input onclick="삭제함수(${i})" type="button" value="삭제"/>
                    </td>
                </tr>`
    }
    list.innerHTML = html;
}

//4. 합계 함수
function 합계함수(){
    const sum = document.querySelector('#sum');

    let money = 0;

    for(let i = 0; i < 금액.length; i++){
        money += 금액[i];
    }
    sum.innerHTML = `총합계 : ${money} 원`;
}
합계함수();

//5. 

function 콤마찍기(){
    if(금액.length <= 3){
        return 금액;
    }else{
        return comma(금액.slice(0, 금액.slice - 3)) + "," + 금액.slice(금액.length - 3);
    }
}
콤마찍기();