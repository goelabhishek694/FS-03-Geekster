// import { API_KEY } from "../../secrets.mjs";
// console.log(API_KEY);
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

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(100), 2000);
// })
//   .then((res) => {
//     return res * 2;
//   })
//   .then((res) => {
//     return res * 2;
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(err => console.log(err))

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(100), 2000);
// })
  
// p.then(res => {
//   console.log(res);
//   return res * 2
// });

// p.then(res => {
//   console.log(res);
//   return res * 2
// });

// p.then((res) => {
//   console.log(res);
//   return res * 2;
// });

//returning a promise from then handler. 
new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 2000);
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res * 2), 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res * 2), 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res * 2), 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res * 2), 1000);
    });
  });

//fetch
// promises used for network requests -> fetch
let lat = '25.3176';
let lon = '82.9739';
let url = `https://api.openweathermap.org/data/2.5/weather?lat=25.3176&lon=82.9739&units=metric&appid=d8ab14f7e93c56cbe84562d28e8202bd`;

let weatherPromise = fetch(url);
weatherPromise
  .then((res) => { //response object
    console.log(res)
    return res.json();
  })
  .then((data)=>console.log(data)) // data extraction from response object
  .catch((err) => console.log(err))

// let username="vishnupumar"
// let githubUserPromise = fetch(`https://api.github.com/users/${username}`);
// githubUserPromise
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let img = document.createElement('img');
//     img.src = data.avatar_url;
//     img.style.height='300px'
//     img.style.width = '300px';
//     img.style.borderRadius = '50%';
//     document.body.append(img);
//     setTimeout(()=>img.remove(), 3000);
//   })
//   .catch((err) => console.log(err));

  //Promise.all
// let p1=new Promise((resolve,reject)=>{
//   setTimeout(()=>resolve(100),1000)
// })
// let p2=new Promise((resolve,reject)=>{
//   setTimeout(()=>reject(new Error("promise rejected")),7000)
// })
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(300), 3000);
// });
// let allPromise = Promise.all([p1, p2, p3]); //return an array with values if all promise's state as been fulfilled, else error msg aayega 
// allPromise
//   .then(data => console.log(data))
//   .catch((err) => console.log(err));

    //Promise.allSettled
// let p1=new Promise((resolve,reject)=>{
//   setTimeout(()=>resolve(100),1000)
// })
// let p2=new Promise((resolve,reject)=>{
//   setTimeout(()=>reject(new Error("promise rejected")),7000)
// })
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(300), 3000);
// });
// let allSetlledPromise = Promise.allSettled([p1, p2, p3]); //returns an array with values of promises, does not matter if promise has been resolved or rejected. It just waits for promise to get settled. 
// allSetlledPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

  // Promise.race
  // simiilar to promise.all but waits for first settled promise.
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(100), 10000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("promise rejected")), 1000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(300), 3000);
// });
// let racePromise = Promise.race([p1, p2, p3]); 
// racePromise.then((data) => console.log(data)).catch((err) => console.log(err));


// Promise.any 
//return first fuflfilled promise
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(100), 10000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("promise rejected")), 1000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(300), 3000);
// });
// let racePromise = Promise.race([p1, p2, p3]); 
// racePromise.then((data) => console.log(data)).catch((err) => console.log(err));
  


// let userNames = ["goelabhishek694", "vishnupumar","smulla786"];
// let allGithubUsersRequest = userNames.map(username => fetch(`https://api.github.com/users/${username}`))
// console.log(allGithubUsersRequest)
// Promise.all(allGithubUsersRequest)
//   .then((responseObjectArr) => {
//     console.log(responseObjectArr);
//     let userDataArr = responseObjectArr.map((resObj) => resObj.json());
//     console.log(userDataArr);
//     return Promise.all(userDataArr);
//   })
//   .then((userDataArr) => userDataArr.forEach((user) => {
//     console.log(user);
//     const img = document.createElement("img");
//     img.src = user.avatar_url;
//     img.style.height = "300px";
//     img.style.width = "300px";
//     img.style.borderRadius = "50%";
//     document.body.append(img);
//     setTimeout(() => img.remove(), 3000);
//   }))
//   .catch(err=>console.log(err))
  //display profile picture instead of printing object 

  //settlled
let userNames = ["goelabhishek694", "vishnupumar34566", "smulla786"];
let allGithubUsersRequest = userNames.map((username) =>
  fetch(`https://api.github.com/users/${username}`)
);
console.log(allGithubUsersRequest);
Promise.allSettled(allGithubUsersRequest)
  .then((responseObjectArr) => {
    console.log(responseObjectArr);
    let userDataArr = responseObjectArr.map((resObj,idx) => {
      if (resObj.status == "fulfilled") {
        return resObj.value.json();
      };
      return Promise.reject(new Error("url is wrong"));
    });
    console.log(userDataArr);
    return Promise.allSettled(userDataArr);
  })
  .then((userDataArr) =>
    userDataArr.forEach((user,idx) => {
      console.log(user);
      if (user.status == 'fulfilled') {
        if (user.value && user.value.avatar_url) {
          const img = document.createElement("img");
          img.src = user.value?.avatar_url;
          img.style.height = "300px";
          img.style.width = "300px";
          img.style.borderRadius = "50%";
          document.body.append(img);
          setTimeout(() => img.remove(), 3000);
        }
        else console.log(`${userNames[idx]} wrong user`);
      }
    })
  )
  .catch((err) => console.log(err));

  




























