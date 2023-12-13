// 문제1) 입력받은 수 만큼 * 출력 
let output = '';
/*
const value1 = Number(prompt('문제1 수 입력'));
for(let i = 1; i <= value1; i++){
    output += '*';
}
console.log(output);

// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
output = '';
const value2 = Number(prompt('문제2 수 입력'));
for(let i = 1; i <= value2; i++){
    output += '*';
    if(i % 3 == 0){
        output += `\n`;
    }
}
console.log(output);

// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';
const line3 = Number(prompt('문제3 줄 수 :'));
for(let i = 1; i <= line3; i++){
    //별찍기
    for(let s = 1; s <= i; s++){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}
console.log(output);

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
output = '';
const line4 = Number(prompt('문제4 줄 수 :'));

for(let i = line4; i >= 1; i--){
    //별찍기
    for(let s = i; s >= 1; s--){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}
console.log(output);


//강사님 코드
for(let i = 1; i <= line4; i++){
    //별찍기
    for(let s = 1; s <= line4-i+1; s++){
        output += `*`;
    }
    //줄바꿈
    output += '\n';
}
console.log(output);


// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';
const line5 = Number(prompt('문제5 줄 수 :'));

for(let i = 1; i <= line5; i++){
    //공백
    for(let b = line5; b >= i+1; b--){
        output += ' ';
    }
    //별찍기
    for(let s = 1; s <= i; s++){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}
console.log(output);


//강사님 코드
for(let i = 1; i <= line5; i++){
    for(let b = 1; b <= line5-i; b++){
        output += ' ';
    }
    for(let s = 1; s <= i; s++){
        output += '*';
    }
    output += `\n`;
}
console.log(output);

// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';
const line6 = Number(prompt('문제6 줄 수 :'));

for(let i = 1; i <= line6; i++){
    //공백
    for(let b = 1; b <= i-1; b++ ){
        output += ' ';
    }
    //별찍기
    for(let s = line6; s >= i; s--){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}
console.log(output);


//강사님 코드
for(let i = 1; i <= line6; i++){
    //공백
    for(let b = 1; b <= i-1; b++){
        output += ' ';
    }
    //별찍기
    for(let s = 1; s <= line6-i+1; s++){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}
console.log(output);

// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';
const line7 = Number(prompt('문제7 줄 수 :'));

for(let i = 1; i <= line7; i++){
    //공백
    for(b = 1; b <= line7-i; b++){
        output += ' ';
    }
    //별찍기
    for(s = 1; s <= i*2-1; s++){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}

console.log(output);

// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
output = '';
const line8 = Number(prompt('문제8 줄 수 :'));

for(let i = line8; i >= 1; i--){
    //공백
    for(let b = 1; b <= line8-i; b++){
        output += ' ';
    }
    //별찍기
    for(let s = 1; s <= i*2-1; s++){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}

console.log(output);

// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
output = '';
const line9 = Number(prompt('문제9 줄 수 :'));

for(let i = 1; i <= line9; i++){
    //공백
    for(let b = 1; b <= line9-i; b++){
        output += ' ';
    }
    //별찍기
    for(let s = 1; s <= i*2-1; s++){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}
for(let i = line9; i >= 1; i--){
    //공백
    for(let b = 1; b <= line9-i; b++){
        output += ' ';
    }
    //별찍기
    for(let s = 1; s <= i*2-1; s++){
        output += '*';
    }
    //줄바꿈
    output += `\n`;
}

console.log(output);


// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
output = '';
const line10 = Number(prompt('문제10 줄 수 :'));

//[행]
for(let r = 1; r <= line10; r++){
    //[열]
    for(let c = 1; c <=line10; c++){
        if(r == c){
            output += `*`;
        }else if(r+c == line10+1){
            output += `*`;
        }else{
            output += ' ';
        }
    }
    //줄바꿈
    output += `\n`;
}

console.log(output);
*/
// 문제10-2)
function 문제10(){
    // [입력]
    const line = Number(document.querySelector('#line10').value);
    // [처리]
    let html = '';
    // [행]
    for(let r = 1; r <= line; r++){
        html += `<tr>`;
        
        // [열]
        for(let c = 1; c <= line; c++){
            if(c == r){
                html += `<td>★</td>`;
            }else if(c+r == line+1){
                html += `<td>★</td>`;
            }else{
                html += `<td>☆</td>`;
            }
        }

        html += `</tr>`;
    }
    // [출력]
    const tableObj = document.querySelector('#table10');
    tableObj.innerHTML = html;

    console.log(tableObj);
}

// 문제9-2)
function 문제9(){
    // [입력]
    const line9 = Number(document.querySelector('#line9').value);
    // [처리]
    let output = '';

    for(let i = 1; i <= line9-1; i++){
        output += `<tr>`
        //공백
        for(let b = 1; b <= line9-i; b++){
            output += `<td> </td>`;
        }
        //별찍기
        for(let s = 1; s <= i*2-1; s++){
            output += `<td>★</td>`;
        }
        //줄바꿈
        output += `</tr>`;
    }
    for(let i = line9; i >= 1; i--){
        output += `<tr>`
        //공백
        for(let b = 1; b <= line9-i; b++){
            output += `<td> </td>`;
        }
        //별찍기
        for(let s = 1; s <= i*2-1; s++){
            output += `<td>★</td>`;
        }
        //줄바꿈
        output += `</tr>`;
    }
    // [출력]
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML = output;

    console.log(tableObj);
}
/*
// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
*     *
 *   *
  * *
   *
  * *
 *   *
*     *

공백       공백         별          행
0           5           2           1
1           3           2           2
2           1           2           3
3           0           1           4
2           1           2           3
1           3           2           2
0           5           2           1

*/