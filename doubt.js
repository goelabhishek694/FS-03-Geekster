let obj = {
    p1: {"name":"laptop"},
    p2: {"name":"iphone"},
    p3: {"name":"toothbrush"}
};
//how to traverse 
Object.keys(obj) //[p1,p2,p3]
Object.values(obj) //[{},{},{}]
Object.entries(obj) //[ [ 'p1', {} ], [ 'p2', {} ], [ 'p3', {} ] ]

//how to display on UI 
let ans = Object.entries(obj);
let badaDiv = document.querySelector('.abc');
ans.forEach(([key,value])=> {
    badaDiv+=`<div>${value.name}</div>`
})

console.log(ans);






