/*
    형태
    1. 참일때만 실행
        if( T/F ){ 참/T 일때 실행코드; }
    2. 참 또는 거짓일때 실행
        if( T/F ){ 참/T 일때 실행코드; }
        else{ 거짓/F 일때 실행코드; }
    3. 참 또는 거짓일때 조건 추가
        if( T/F ){
            if( T/F ){}
            else{}
        }else{
            if( T/F ){}
            else{}
        }
    4. 다수 조건 일때
        if( 조건1 ){ }                      if( 조건1 ){ }
        else if( 조건2 ){ }                 if( 조건1 ){ }
        else if( 조건3 ){ }                 if( 조건1 ){ }
        else if( 조건4 ){ }                 if( 조건1 ){ }
        else { }                            if( 조건1 ){ }
*/
/*
//1.
if( 273 < 100 ){
    console.log('273<100 => true');
}
console.log('1종료');

//2.
const date = new Date(); // new Date(); 현재 시간을 알려주는 코드
    console.log(date);
const hour = date.getHours(); // 현재시간.getHours() : 현재시간에서 시분초 중에서 시를 반환
    console.log(hour);

if( hour < 12 ){
    console.log('오전입니다.');
}
if( hour >= 12 ){
    console.log('오후입니다.');
}

//3.
if( hour < 12 ){
    console.log('오전입니다.');
}else{
    console.log('오후입니다.');
}

//4.
if( hour < 11 ){
    console.log('아침 먹을 시간입니다.');
}else{
    if( hour < 15 ){
        console.log('점심 먹을 시간입니다.');
    }else{
        console.log('저녁 먹을 시간입니다.');
    }
}

//5.
if ( hour < 11 ){
    console.log('아침 먹을 시간입니다.');
}else if ( hour < 15 ){
    console.log('점심 먹을 시간입니다.');
}else {
    console.log('저녁 먹을 시간입니다.');
}
*/
// 138p 확인문제
// 1. 3
// 2. Number,Number,a>b,a=b
// 3. &&
// 4.
/*    const a = Number(prompt('숫자를 입력해주세요.',''));

    if( a > 0 ){
        console.log('입력한 숫자는 양수입니다.');
    }else if ( a = 0 ){
        console.log('입력한 숫자는 0입니다.');
    }else {
        console.log('입력한 숫자는 음수입니다.');
    }

// 5.
    const a = Number(prompt('숫자를 입력해주세요.',''));

    if ( a % 2 == 0 ){
        console.log('입력한 숫자는 짝수입니다.');
    }else{
        console.log('입력한 숫자는 홀수입니다.');
    }

//6.
    const a = Number(prompt('월을 입력해주세요.',''));

    if( a >= 3 && a <= 5){
        console.log('봄 입니다.');
    }else if ( a >= 6 && a <= 8){
        console.log('여름 입니다.');
    }else if ( a >= 9 && a <= 11){
        console.log('가을 입니다.');
    }else {
        console.log('겨울 입니다.');
    }
*/
/*
    1.
    if(결제방식 == 현금결제){현금결제해주십시오}
    else if(결제방식 == 카드결제){카드결제해주십시오}
    else{(화면유지)}

    2.
    if(take-out유무 == 매장이용){매장컵만 이용 가능합니다.}
    else if(take-out유무 == 포장){일회용 컵만 가능합니다.}
    else{(화면유지)}

    3.
    if(포인트 적립 유무 == 적립){
        if(주문가격 >= 50000){5% 적립}
        else if(주문가격 >= 100000){10%적립}
        else{3%적립}
    }
    else if(포인트 적립 유무 == 미적립){(다음 화면 이동)}
    else{(화면유지)}

    4. 
    if(영수증 출력 유무 == 출력){
        if(용지유무 == 있음){영수증 출력}
        else {"용지가 부족합니다"}
    }
    else if (영수증 출력 유무 == 미출력){(다음화면 이동)}
    else {(화면유지)}

    5.
    if(제한시간 < 100s){
        if(제한시간 <=30s) {<텍스트 : red>}
        else{<텍스트 : black>}
    }
    else {(홈화면 이동)}
*/