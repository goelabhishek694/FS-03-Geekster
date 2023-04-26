


let signIn = document.querySelector(".signin");
let email = document.querySelector("#inputEmail4");
let password = document.querySelector("#inputPassword4");

signIn.addEventListener('click', (e) => {
    e.preventDefault();
    let email = email.value;
    let password = email.password;
    loginUser(email, password);
})

async function loginUser(e, p) {
    let req=await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: e,
        password: p,
      }),
    })
    let res = await req.json();
    console.log(res)
}

