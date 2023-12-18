console.log({});

// 1. Object객체를 만들어서 상수에 대입
const product = {
    제품명 : '7D 건조 망고',
    유형 : '당절임',
    성분 : '망고,설탕,메타중아황산나트륨,치자황색소',
    원산지 : '필리핀'
}

// 2. 객체 호출
console.log(product);
// 3. 객체 내 속성 호출     객체명['keyname'] : 해당하는 키의 값을 호출
console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);
console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);

//248p
const 객체2 = {
    number:273, string:'구름',array:[52,273,103,32],method:function(){},객체3 : {method2 : function(){}}
}
console.log(객체2);     //console객체 내 log속성 함수 호출

객체2.method();         //객체2 내 속성(메소드) 호출
객체2.객체3.method2();  //객체2 내 속성(객체3 내 속성(메소드2) 호출) 호출

//249p
const pet = {
    name:'구름',
    eat:function(food){
        alert(`${this.name}은/는 ${food}을/를 먹습니다.`);
    },
        //this : 함수 내에서 현재객체 내 속성을 호출할때 사용하는 키워드
        //this.key
    eat2(food){}    //함수명이 속성명을 대신한다.
}
pet.eat('밥');
pet.eat('도시락');
pet.eat('라면');

//250p
const student={}
student.이름="윤인성"
student.취미="악기"
student.장래희망="생명공학자"

console.log(student);

//251p
delete student.장래희망

console.log(student);

//254p 확인문제
/*
    1.
        const object = {
            name : '혼자 공부하는 파이썬',
            price : 18000,
            publisher : '한빛미디어'
        }
    2.
        (3) 객체명[새로운속성명] = 새로운값
    3.
        (1) delete 객체명[삭제할속성명]
    4.
        메소드속성 - print : function(lang){}
        실행결과예측
            -object.print('es');
            빵는 스페인어로 pan입니다.

    *this가 있으면 현재 객체 내 속성
    *this가 없으면 매개변수
*/