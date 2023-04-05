//<----------------Async/await---------------->

// async function foo() {
//   return "Hello Geeksters";
// }

// foo().then((data) => console.log(data));


async function fun() {
    let p = new Promise((resolve, reject) => {
        setTimeout(()=>resolve(100), 6000);
    })
    let num = await p; 
    console.log(num);
}


fun()

//promise
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

//cb+promise
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});

console.log("end");



