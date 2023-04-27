let data;
//pagination
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let pageNum = document.querySelector(".curr");

prevBtn.addEventListener("click", getPrevPage);
nextBtn.addEventListener("click", getNextPage);

let currPage = 1;
let prodPerPage = 6;
let start = 1;
let end = 5;

async function getAllProducts() {
    let req = await fetch("http://localhost:3000/products");
    data = await req.json();
  console.log(JSON.stringify(data));
  let fd = filterData(start, end, data);
  createCard(fd);
}

getAllProducts();


function createCard(dataObj) {
  let allProdDiv = document.querySelector("#all-products");
  dataObj.forEach(({ id, image, title }) => {
    let html = `<div class="card" style="width: 18rem;">
        <p class=" card-title card-text">${title.slice(0, 30) + "..."}</p>
            <img src=${image} "card-img-top" alt="...">
            <div class="card-body">
                <a href="#" class="btn btn-primary">Add To Cart</a>
                <a href="./product.html?id=${id}" class="btn btn-primary">View Product</a>
            </div>
        </div>`;
    allProdDiv.innerHTML += html;
  });
}

function getPrevPage() {
  if (currPage > 1) {
    currPage -= 1;
    let start = (currPage - 1) * prodPerPage + 1;
    let end = start + prodPerPage - 1;
      let fd = filterData(start, end, data);
      let allProdDiv = document.querySelector("#all-products");
      allProdDiv.innerHTML=''
      createCard(fd);
      pageNum.innerText = currPage;
  } else alert("This is the first Page");
}

function getNextPage() {
  if (currPage < data.length / prodPerPage) {
    currPage += 1;
    let start = (currPage - 1) * prodPerPage + 1;
    let end = start + prodPerPage - 1;
      let fd = filterData(start, end, data);
      let allProdDiv = document.querySelector("#all-products");
      allProdDiv.innerHTML = "";
      createCard(fd);
      pageNum.innerText = currPage;
  } else alert("This is the last Page");
}

function filterData(start, end, data) {
  return data.filter((dataObj) => dataObj.id >= start && dataObj.id <= end);
}
