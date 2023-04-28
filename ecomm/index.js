let data;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pageNum = document.querySelector(".curr");
const priceLH = document.querySelector(".lh");
const priceHL = document.querySelector(".hl");

prevBtn.addEventListener("click", getPrevPage);
nextBtn.addEventListener("click", getNextPage);

priceLH.addEventListener("click", sortLH);
priceHL.addEventListener("click", sortHL);

let currPage = 1;
let prodPerPage = 6;
let start = 1;
let end = 6;

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
    allProdDiv.innerHTML = '';
  dataObj.forEach(({ id, image, title }) => {
    let html = `<div class="card" style="width: 18rem;">
        <p class=" card-title card-text">${title.slice(0, 30) + "..."}</p>
            <img src=${image} "card-img-top" alt="...">
            <div class="card-body">
                <button class="btn btn-primary atc" value=${id}>Add To Cart</button>
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
    return data.slice(start-1, end);
}

function sortLH() {
    data = data.sort((a, b) => a.price - b.price);
    console.log(data);
    createCard(filterData(start, end, data));
}

function sortHL() {
    data = data.sort((a, b) => b.price - a.price);
    console.log(data);
    createCard(filterData(start, end, data));
}

window.onload = () => {
  const atc = document.querySelectorAll(".atc");
  // console.log(atc);
  atc.forEach((btn => btn.addEventListener("click", () => { sendData(btn.value) })
  ));

  function sendData(id) {
    console.log(id);
  }

}

