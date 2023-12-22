// 274P - Math 객체

const num = Math.random();  // 0~1 사이의 난수
console.log(num);

// 0~10 사이의 난수
console.log(num * 10);

// 0~50 사이의 난수
console.log(num * 50);

// 1이상~50이하 사이의 난수
console.log(num * 50 + 1);

// -5이상~5미만 사이의 난수
console.log(num * 10 -5);

// -25이상~25미만 사이의 난수
console.log(num * 50 -25);

console.log(Math.floor(3.14));
console.log(parseInt(3.14));
console.log(3.14.toFixed(0));

// -5이상~5미만 사이의 정수
console.log(Math.floor(num * 10 -5));

// -25이상~25미만 사이의 정수
console.log(Math.floor(num * 50 -25));

// 291P
const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

if(object.name !== undefined){
    console.log('name 속성 있음');
}else{
    console.log('name 속성 없음')
}

if(object.auther !== undefined){
    console.log('auther 속성 있음');
}else{
    console.log('auther 속성 없음')
}
