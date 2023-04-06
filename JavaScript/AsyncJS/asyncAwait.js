//<----------------Async/await---------------->

// async function foo() {
//   return "Hello Geeksters";
// }

// foo().then((data) => console.log(data));


// async function fun() {
//     let p = new Promise((resolve, reject) => {
//         setTimeout(()=>resolve(100), 6000);
//     })
//     let num = await p; //await stops the execution at this line until promise is settled
//     console.log(num); 
//     console.log("hello");
// }

// fun()
// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }

//promise
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

//cb+promise
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// },);

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");


async function getGithubAvatar() {
    try{
        let githubUserRequest =  await fetch(`https://api.github.com/users/goelabhishek694`);
        let data = await githubUserRequest.json();
        const img = document.createElement("img");
        img.src = data.avatar_url;
        img.style.height = "300px";
        img.style.width = "300px";
        img.style.borderRadius = "50%";
        document.body.append(img);
        await new Promise((resolve, reject) => {
            return setTimeout(resolve, 3000);
        });
        img.remove();
        console.log("dp removed");
        return data
    }
    catch (err) {
        console.log(err);
    }
}

let ans = getGithubAvatar();
console.log(ans);
ans.then(data => console.log(data));

//error - handling 
function fun() {
    try {
        console.log("hello in try");
        throw new Error("data cannot be processed");
        // return {a:100}
    }
    catch (err) {
        console.log(err);
        return {}
    }
    finally {
        console.log("in finally");
    }
}

let obj = fun();
console.log(obj);



