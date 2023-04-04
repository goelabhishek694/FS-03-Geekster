//<----------------Async/await---------------->

// async function foo() {
//   return "Hello Geeksters";
// }

// foo().then((data) => console.log(data));


async function fun() {
    let p = new Promise((resolve, reject) => {
        setTimeout(resolve(100), 6000);
    })
    let num = await p; 
    console.log(num);
}

fun()

