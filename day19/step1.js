/*

*/
// 1. 카테고리 목록
//백엔드로부터 데이터를 받았다 치고
let categoryArray = [
    {cno : 1 , cname : '신제품(NEW)'},
    {cno : 2 , cname : '프리미엄'},
    {cno : 3 , cname : '와퍼&주니어'},
    {cno : 4 , cname : '치킨&슈림프버거'},
    {cno : 5 , cname : '올데이킹&킹모닝'},
];

// 2. 제품목록
let productArray = [
    {pno : 1 , pname : '스파이시 큐브 스테이크 와퍼' , pprice : 9500 , pimg : '스파이시큐브스테이크와퍼.png' , cno : 1},
    {pno : 2 , pname : '블랙바비큐콰트로치즈와퍼' , pprice : 8900 , pimg : '블랙바비큐콰트로치즈와퍼.png' , cno : 2},
    {pno : 3 , pname : '몬스터와퍼' , pprice : 9800 , pimg : '몬스터와퍼.png' , cno : 3},
    {pno : 4 , pname : '비프&슈림프버거' , pprice : 8200 , pimg : '비프&슈림프버거.png' , cno : 4},
    {pno : 5 , pname : '블양양 맥시멈4' , pprice : 12300 , pimg : '블양양맥시멈4.png' , cno : 5}
];

let cartArray = [];

// 3. 카테고리 출력
printCategory(1);

function printCategory(selectCno){
    const categoryUl = document.querySelector('#header>ul');

    let html = '';

    for(let i = 0; i < categoryArray.length; i++){
        html += `
            <li onclick="printCategory( ${categoryArray[i].cno}) " class="${categoryArray[i].cno == selectCno ? 'selectMenu' : ''}">
                ${categoryArray[i].cname}
            </li>
        `
    }

    categoryUl.innerHTML = html;

    printItem(selectCno);
}

// 4. 제품 출력
function printItem(selectCno){
    const item = document.querySelector('#productBox');

    let html = '';

    for(let i = 0; i < productArray.length; i++){
        if(productArray[i].cno == selectCno){
            html +=`
                <div onclick="setCart(${productArray[i].pno})" class="product">
                    <img src="img/${productArray[i].pimg}"/>
                    <div class="pinfo">
                        <div class="pName">
                            ${productArray[i].pname}
                        </div>
                        <div class="pPrice">
                            ${productArray[i].pprice.toLocaleString()}원
                        </div>
                    </div>
                </div>
            `
        }
    }

    item.innerHTML = html;
    
}

// 5. 제품선택시 장바구니에 담기
function setCart(selectPno){
    console.log(selectPno);

    cartArray.push(selectPno);

    console.log(cartArray);

    cnt();
    printCart();
}

// 6. 장바구니 담을때 제품 개수
function cnt(){
    const cnt = document.querySelector('.cnt');

    for(let i = 0; i <= cartArray.length; i++){
        cnt.innerHTML = `${[i]}`;
    }
}

// 7. 장바구니 목록 삭제
function cartDelete(deleteIndex){
    cartArray.splice(deleteIndex,1);

    printCart();
}

// 8. 장바구니의 현재 상태를 출력
function printCart(){
    const cartContent = document.querySelector('.cartContent');
    const allPrice = document.querySelector('.cartRight>p>span');

    let html = '';

    let totalPrice = 0;

    for(let i = 0; i < cartArray.length; i++){
        for(let j = 0; j < productArray.length; j++){
            if(cartArray[i] == productArray[j].pno){
                html += `
                    <div class="cartBox">
                        <div class="cartCon">
                            <h3>${productArray[j].pname}</h3>
                            <input onclick="cartDelete(${i})" type="button" value="X"/>
                        </div>
                        <p>${productArray[j].pprice.toLocaleString()}원</p>
                    </div>
                `
                totalPrice += productArray[j].pprice;
            }
        }
    }
    cartContent.innerHTML = html;
    allPrice.innerHTML = totalPrice.toLocaleString()+"원";
}

// 취소 버튼
function 취소(){
    alert('취소되었습니다.')
}

// 주문 버튼
function 주문(){
    alert('주문이 완료 되었습니다.')
}

//카테고리 추가
function addCategory(){
    const add = document.querySelector('#add').value;

    const addCategory = {
        cno : Number(categoryArray.length +1),
        cname : add
    }

    categoryArray.push(addCategory);

    printCategory();
}

// 상품 입력
function 등록(){
    // 1.입력받은 데이터 변수
    const goodsCategory = document.querySelector('#goodsCategory').value;
    const goodsName = document.querySelector('#goodsName').value;
    const goodsPrice = document.querySelector('#goodsPrice').value;
    const goodsImg = document.querySelector('#goodsImg').value;

    // 2. 4개의 변수를 하나로
    const product = {
        pno : productArray.length+1 ,
        pname : goodsName ,
        pprice : Number(goodsPrice) ,
        pimg : goodsImg,
        cno : Number(goodsCategory)
    }

    // 3. 객체를 배열에 담기
    productArray.push( product );

    console.log(productArray);

    printItem();
}

// 상품 출력
