/*
    객체 : 속성과 메소드를 가질 수 있는 모든 것
        형태
            객체 선언 : const object = {}
            객체 내 속성추가 : object.새로운속성명 = 값;
            객체 내 속성의 값 호출 : object.속성명  ,   object['속성명']
            객체 내 속성의 값 변경 : object.기존속성명 = 값;

        기본자료형 (숫자 , 불 ,문자열) 객체X
            - new : 인스턴스(객체) 만들때 사용하는 키워드
            new Number()
            new String()
            new Boolean()
*/

// 257P
const a = []
a.sample = 10;
console.log(a.sample);
console.log(typeof a);
console.log(Array.isArray(a));

function b(){}
b.sample = 10;
console.log(b.sample);
console.log(typeof b);

// 258P
const c = 273;
c.sample = 10;
console.log(c.sample);

const d = '안녕하세요';
d.sample = 10;
console.log(d.sample);

const e = true;
e.sample = 10;
console.log(e.sample);

// 260P
const f =new Number(273);
console.log(f);
f.sample = 10;
console.log(f);
console.log(f.valueOf());

const g = Number(273);
console.log(g);

// 261P
console.log('안녕하세요'.length);
console.log('안녕하세요'.anchor('aaa'));
console.log('안녕하세요'.bold('aaa'));

// 263P
Number.prototype.sample = 10;

const i = 273;
console.log(i.sample);

const j = 100;
console.log(j.sample);

// 264P
Number.prototype.power = function(n = 2){
    console.log(`n : ${n}`);
    console.log(`this : ${this.valueOf()}`);
    return this.valueOf() ** n;
}
const a2 = 12;
console.log(a2.power());
console.log(a2.power(3));
console.log(a2.power(4));

// 265P
const h = '안녕하세요';
console.log(h.indexOf('안녕'));
console.log(h.indexOf('하세'));
console.log(h.indexOf('으이'));
    // vs
//console.log(h.contain('안녕'));

String.prototype.contain = function(data){
    return this.indexOf(data) >= 0;
}

console.log(h.contain('안녕'));