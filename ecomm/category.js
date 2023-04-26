async function getCategoryProducts() {
  const url = window.location.href;
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  console.log(params);
  if (!params.has("id")) {
    return;
  }

  let productCategory = params.get("id");
  console.log(productCategory);
  let request = await fetch(`http://localhost:3000/products`);
  let data = await request.json();
  console.log(data);
  let filteredData = filterData(data, productCategory);
  renderCategoryProduct(filteredData);
}

getCategoryProducts();

function filterData(data, productCategory) {
  let fd = data.filter(item => item.category == productCategory );
  return fd;
}

function renderCategoryProduct(data) {
  data.forEach(
    ({ title, image, description, price, rating: { rate, count } }) => {
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
  );
}
