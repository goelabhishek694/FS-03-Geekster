async function getAllProducts() {
    let req=await fetch("https://fakestoreapi.com/products")
    let data = await req.json();
    console.log(data);
    createCard(data);
}

getAllProducts()

function createCard(dataObj) {
    let allProdDiv=document.querySelector("#all-products");
    dataObj.forEach(({id,image, title }) => {
        
        let html = `<div class="card" style="width: 18rem;">
        <p class=" card-title card-text">${title.slice(0,30)+"..."}</p>
            <img src=${image} "card-img-top" alt="...">
            <div class="card-body">
                <a href="#" class="btn btn-primary">Add To Cart</a>
                <a href="./product.html?id=${id}" class="btn btn-primary">View Product</a>
            </div>
        </div>`;
        allProdDiv.innerHTML+=html;

    })
}

