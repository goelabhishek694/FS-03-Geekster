// console.log(10);
// console.log(100);
// setTimeout(() => console.log("200"), 3000);
// console.log(1000);

// function getData(cb) {
//   setTimeout(() => {
//     const data = [10, 20, 30, 40, 50];
//     cb(data);
//   }, 5000);
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

// getData(cb);

// function cb(arr) {
//   console.log(arr);
// }

//callback hell
// dealing with multiple/nested callbacks
//code is not readable, difficult to maintain.

// asyncFunction1(
//     function (err, result1) {
//         if (err) console.log(err);
//         else {
//             asyncFunction2(result1, 
//                 function (err, result2) {
//                     if (err) console.log(err);
//                     else{
//                         asyncFunction3(result2,function(err,result3){
//                             if(err) console.log(err);
//                             else console.log("Pyramid of doom");
//                         })
//                     }
//                 }
//             );
//         }
//     }
// );

//promises 

//creating a promise
                                     //executor
// let promise=new Promise(function(resolve,reject){
  //contains api call->result
  // resolve,reject -> cb functions
  // either of resolve() or reject() is called
  //resolve(value)-> if job is finished succesfully with result "value"
  //reject(error) -> if an error occurs
// })
//when new Promise is created , executor is called automatically

let companyStatusPromise = new Promise(function (resolve, reject) { 
  //i am sure i will get the value
  setTimeout(() => resolve("hoorrayy"), 3000);
  // setTimeout(() => reject(new Error("corrupted file")), 1000);
})

console.log(companyStatusPromise);

//consumers -> then and catch

// then
                          
// promise.then(
//   function (result) {}, //will be called if promise is fulfilled
//   function (err) {} //will be called if promise is rejected
// );

companyStatusPromise.then((result) => console.log(result), (error) => console.log(error))

let isEvenPromise = new Promise(function (resolve, reject) {
  function getVal() {
    let val = Math.floor(Math.random() * 100);
    // let val = 100;
    if (val % 2 == 0) resolve(`Received even number ${val}`);
    else reject(new Error(`received odd number, ${val}`));
  }
  setTimeout(getVal,4000);
})

// isEvenPromise.then(
//   (result) => console.log(result),
//   (err) => console.log(err)
// );

isEvenPromise.then(
  (result) => console.log(result)
).catch(err => console.log(err));


function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(()=>resolve(),ms)
  })
}

delay(3000).then(() => console.log("delayed for 3 seconds"));

function getData() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const data = [10, 20, 30, 40, 50];
      resolve(data);
    }, 5000);
  })
}

getData().then(cb);

function cb(arr) {
  console.log(arr);
}

//instantly resolved promises
new Promise((resolve, reject) => {
  // if(data)
  resolve("hello");
  //server call to get data 
}).then((x) => console.log(x)).catch((e) => console.log(e));

new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 2000);
})
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    console.log(res);
  })
  .catch(err => console.log(err))

let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 2000);
})
  
p.then(res => {
  console.log(res);
  return res * 2
});

p.then(res => {
  console.log(res);
  return res * 2
});

p.then((res) => {
  console.log(res);
  return res * 2;
});


  


















