// console.log(10);
// console.log(100);
// setTimeout(() => console.log("200"), 3000);
// console.log(1000);

function getData(cb) {
    setTimeout(() => {
        const data = [10, 20, 30, 40, 50];
        cb(data);
    }, 5000);
    for(let i=0;i<10;i++){
        console.log(i);
    }
}

getData(cb)

function cb(arr){
    console.log(arr)
}

// addNum1((result1)=>{
//     addNum2(result1,(result2)=>{
//         addNum3(result2,(result3)=>{
//             console.log(result3);
//         })
//     })
// })
