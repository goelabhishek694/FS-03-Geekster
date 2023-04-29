//display my cart
// 1. get all the items from cart 
let data={};
async function getCartProducts(){
    let req = await fetch('http://localhost:3000/cart');
    data = await req.json();
    console.log(data);
    updateTotalItems();
    displayProducts();
    getTotal();
}

function updateTotalItems(){
    let totalItemsEle = document.querySelectorAll(".total-items");
    let totalItems = data.reduce((acc, curr) => {
        return acc = acc + curr.quantity;
    }, 0);

    totalItemsEle[0].innerText = totalItems +' Items';
    totalItemsEle[1].innerText = totalItems +' Items';
}

function displayProducts() {
    let productTable = document.getElementById("product-row");
    data.forEach(item => {
        productTable.innerHTML += `<div class="row border-top border-bottom">
                    <div class="row main align-items-center">
                        <div class="col-2"><img class="img-fluid" src="${item.image}"></div>
                        <div class="col">
                            <div class="row">${item.title}</div>
                        </div>
                        <div class="col">
                            <a href="#">-</a><a href="#" class="border">${item.quantity}</a><a href="#">+</a>
                        </div>
                        <div class="col"> $${item.price} <span class="close">&#10005;</span></div>
                    </div>
                </div>`;
        
    }) 
}

function getTotal() {
    //traverse over each product in cart, and multiply quntity *price. 
    let totalPrice=data.reduce((acc, curr) => {
        return acc=acc+(curr.price*curr.quantity)
    }, 0)
    let total = document.querySelector('#total-price');
    total.innerText = "$" + totalPrice;
}







getCartProducts()

