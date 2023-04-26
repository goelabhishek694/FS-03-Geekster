async function getProduct() {
    const url = window.location.href;
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    console.log(params);
    if (!params.has('id')) {
        return;
    }

    let productId = params.get('id');
    let request = await fetch(`http://localhost:3000/products/${productId}`);
    let data = await request.json();
    renderProduct(data);

}

getProduct()

function renderProduct({title,image,description,price,rating:{rate,count}}) {
    let cardEle = document.querySelector(".card");
    cardEle.innerHTML += `<div class="card-body">
    <h5 class="card-title">${title}</h5>
            <img src="${image}" class="card-img-top product-img" alt="...">
            <p class="card-text">${price}</p>
            <p class="card-text">${description}</p>
            <p class="card-rating">Overall Rating ${rate}</p>
            <p class="card-rating">No. of Reviews ${count}</p>
            <a href="#" class="btn btn-primary">Add To cart</a>
        </div>`;
}


