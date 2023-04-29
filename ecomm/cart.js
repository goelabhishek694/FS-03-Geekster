//display my cart
// 1. get all the items from cart 
let data={};
async function getCartProducts(){
    let req = await fetch('http://localhost:3000/cart');
    data = await req.json();
    console.log(data);
    updateTotalItems();
    displayProducts()
}

function updateTotalItems(){
    let totalItemsEle = document.querySelector(".total-items");
    let totalItems = data.reduce((acc, curr) => {
        return acc = acc + curr.quantity;
    }, 0);

    totalItemsEle.innerText = totalItems +' Items';
}

function displayProducts() {
    let productTable = document.getElementById("product-row");
    data.forEach(item => {
        productTable.innerHTML+=``
        
    })
    
}





getCartProducts()

