let value1 = 10;

value1 = value1 + 1;
    console.log( value1 );

value1 += 1;
    console.log( value1 );

value1++;
    console.log( value1 );

++value1;
    console.log( value1 );


let number1 = 10;
number1++;
console.log( number1 );

let number2 = 10;
++number2;
console.log( number2 );

//차이점1

let number3 = 10;
console.log( number3++ ); //출력 후 증가
let number4 = 10;
console.log( ++number4 ); //출력 전 증가

//차이점2

let result1 = number4++ + 10;
console.log(result1);
console.log(result1);
console.log(result1);
console.log(number4);