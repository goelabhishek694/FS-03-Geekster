let signIn = document.querySelector(".login");

signIn.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username, password);
  loginUser(username, password);
});

//mor_2314
//83r5^_
async function loginUser(username, password) {
  try {
    let req = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    let res = await req.json();
    console.log(res);
    // if (res) alert("login successful");
    if (res) location.href = 'index.html';
    else alert("wrong credentials");
  } catch (err) {
    console.log("err-> ", err);
  }
}
