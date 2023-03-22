let arr = [1, 2, 3, 4, 5, 6]; //sum=21
let initialValue = 100;
let ans = arr.reduce(sum);
console.log("sum is -> ",ans);

function sum(acc, currVal,index) {
    console.log("acc -> ",acc," ","currVal -> ",currVal," ","idx-> ",index);
    return acc + currVal;
}

//when we do not use initialValue
// acc is equal to 0th index and currVal starts from 1st index

//when we use initialValue
// acc is equal to initialValue and currVal starts from 0th index

// ultimately acc is equal to the operation being performed before returning

let arrOfObj = [{ a: 100 }, { a: 200 }, { a: 300 }, { a: 400 }]; //600

let res = arrOfObj.reduce(sumOfObj,0);
console.log(res);

function sumOfObj(acc, obj) {
    return acc + obj.a;
}

const flattened = [
  [0, 1],
  [2, 3, 4, 5],
  [6, 7],
];    

//output-> [1,2,3,4,5,6,7]

//some() in arr
// atleast one element return true
[1, 2, 3, 4, 15, 6]
//this function is testing function
//fn function i going to run 6 times,if i get true in any of 6 cases, then arr.some would return true. 
const fn = (ele) => ele>10
let res1 = arr.some(fn); 
console.log(res1);


