모든글출력()
function 모든글출력(){
    const tableBody = document.querySelector('table>tbody');
    console.log(tableBody);

    let boardArray = JSON.parse(localStorage.getItem('boardArray'));
    console.log(boardArray);
    let html=``; console.log(html);

    for(let i = 0; i < boardArray.length; i++){
        console.log(boardArray[i]);
        html += `<tr onclick="개별글출력(${i})">
                    <td>${i+1}</td>
                    <td>${boardArray[i].제목}</td>
                    <td>${boardArray[i].작성자}</td>
                    <td>${boardArray[i].조회수}</td>
                </tr>
        `
    }
    tableBody.innerHTML = html;

    return;
}