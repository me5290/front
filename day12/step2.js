/*
    배열
        -여러 자료를 묶어서 활용할수 있는 특수한 자료
        -문자열과 배열은 똑같이 사용됨
        -형태
            let 변수/상수명 = []
        -여러개의 변수를 한번에 선언해 다룰 수 있는 자료형
            -[]사용
            -내부 값을 ,로 구분
            -내부 값은 요소
        1. 배열 선언
            -let 변수/상수명 = [ 요소 , 요소 , 요소 ]
        2. 배열 요소에 접근
            -인덱스란? 배열 내 요소들이 저장된 순서 번호
                0부터 시작 (주의할점 length/size는 1부터 시작)
            -형태
                변수명[인덱스]
        3. 배열 요소 개수 확인
            배열.length
        4. 배열 뒷부분에 요소 추가하기
            배열.push(추가할요소);
        5. 배열 요소 제거하기
            배열.splice(제거할값의인덱스,제거할요소의개수);
                -배열.splice(0) : 배열 요소 전체 삭제
        6. 배열 내 요소 찾기
            배열.indexof(값);
                - 배열 내 동일한 값이 있으면 인덱스번호 반환 없으면 -1

    변수 : 하나의 자료를 저장하는 메모리 공간
    상수 : 하나의 자료를 저장하는 메모리 공간 [수정 불가능]
    배열 : 여러개의 자료를 묶어서 하나의 자료로 만들어주는 문법
    
    str.length-1 : 마지막 인덱스
        length : 1~ , 인덱스 : 0~
*/
const str = '안녕하세요';
console.log(str[2]);            //하
console.log(str[str.length-1]); //요

//161P
const array = [273,'String',true,function(){},{},[273,10]];
        //가장 큰 쇼핑백 = [ 273 , ['s','t','r','i','n','g'] , true , 함수(){} , {객체} , 배열 ]
        //배열자료형 = [ 숫자자료형 , 배열자료형 , 불자료형 , 함수 , 객체 , 배열자료형 ]
console.log(array);
console.log(array[3]);
console.log(array[5]);
console.log(array[5][0]);

//162P
const numbers = [273, 52 , 103 , 32];
console.log(numbers[0]);    //273
console.log(numbers[1]);    //52
console.log(numbers[1+1]);  //103
console.log(numbers[1*3]);  //32

//163P
console.log(numbers.length);            //4
console.log(numbers[numbers.length-1]); //32

//164P
const todos =  [ '우유 구매' , '업무 메일 확인하기' , '필라테스 수업' ];
console.log(todos);

//todos = '저녁 식사 준비하기';
todos.push('저녁 식사 준비하기');

todos[7] = '사과먹기';
console.log(todos);

//166P
const itemsA = [ '사과' , '배' , '바나나' ];
console.log(itemsA);

itemsA.splice( 2 , 1 );
console.log(itemsA);

itemsA.splice( 0 );     //삭제 개수 생략 시 삭제할 인덱스 뒤로 모두 삭제
console.log(itemsA);

//167P
const itemsB = [ '사과' , '배' , '바나나' ];
const index = itemsB.indexOf('바나나');
console.log(index);
itemsB.splice(index , 1);
console.log(itemsB);

//168P
const itemsD = ['사과' , '귤' , '바나나' , '오렌지'];
itemsD.splice(1,0,'양파');
console.log(itemsD);

itemsD.splice(5,0,'수박');
console.log(itemsD);

//172P
