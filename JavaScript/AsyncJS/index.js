// console.log(10);
// console.log(100);
// setTimeout(() => console.log("200"), 3000);
// console.log(1000);

function getData(cb) {
  setTimeout(() => {
    const data = [10, 20, 30, 40, 50];
    cb(data);
  }, 5000);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

getData(cb);

function cb(arr) {
  console.log(arr);
}

//callback hell
// dealing with multiple/nested callbacks
//code is not readable, difficult to maintain.

asyncFunction1(
    function (err, result1) {
        if (err) console.log(err);
        else {
            asyncFunction2(result1, 
                function (err, result2) {
                    if (err) console.log(err);
                    else{
                        asyncFunction3(result2,function(err,result3){
                            if(err) console.log(err);
                            else console.log("Pyramid of doom");
                        })
                    }
                }
            );
        }
    }
);

//promises 

//creating a promise
                                     //executor
let companyStatusPromise=new Promise(function(resolve,reject){
  //contains api call->result
  // resolve,reject -> cb functions
  // either of resolve() or reject() is called
  //resolve(value)-> if job is finished succesfully with result "value"
  //reject(error) -> if an error occurs
})
//when new Promise is created , executor is called automatically







