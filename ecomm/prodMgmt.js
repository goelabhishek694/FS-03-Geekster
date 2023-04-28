let addProductForm = document.querySelector(".addProduct");
let deleteProductForm = document.querySelector(".deleteProduct");
let updateProductForm = document.querySelector(".updateProduct");

// addProductForm.addEventListener("submit", sendData);
// deleteProductForm.addEventListener("submit", delData);
updateProductForm.addEventListener("submit", updateData);

function sendData(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description");
    let category = document.getElementById("category").value;
    let image = document.getElementById("image").value;
    let rate = document.getElementById("rate").value;
    let count = document.getElementById("count").value;

    let rating = { rate, count };
    let data = {
        title,price,description,category,image,rating
    }
    console.log(data);
    addProduct(data);
}
async function addProduct(data) {
    try{
    let req = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await req.json();
    console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}

function delData(e) {
  e.preventDefault();
  let id = document.getElementById("id").value;
  console.log(id);
  deleteProduct(id);
}
async function deleteProduct(id) {
  try {
    let req = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    let res = await req.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

function updateData(e) {
    e.preventDefault();
    const id = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    let data = {};
    if (title) data["title"] = title;
    if (price) data["price"] = price;
    if (description) data["description"] = description;
    if (category) data["category"] = category;
    if (image) data["image"] = image;
    data["id"]=id;
    console.log(data);
    updateProduct(data,id);
}
async function updateProduct(data,id) {
    try {
        let req = await fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        let res = await req.json();
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}




