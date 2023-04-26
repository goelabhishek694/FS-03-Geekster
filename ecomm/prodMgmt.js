let addBtn = document.querySelector(".add");
let updateBtn = document.querySelector(".update");
let delBtn = document.querySelector(".delete");

let inputadd = document.querySelector(".addinput");

addBtn.addEventListener("click", function () {
    let val = inputadd.value; 
    console.log(val);
    addproduct(val);
})

async function addproduct(data) {
    let req = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: JSON.stringify(data),
    });
    let res = await req.json();
    console.log(res);
}


