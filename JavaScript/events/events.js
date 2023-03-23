//onchnage event -> is an event attribute , we write itinside element. Whenever there is a change in value of element, onchnage vent occurs which in turn calls the function asociated with it.
// Event is only fired when element loses focus

// function myFunction(val) {
//   console.log(val);
// }

// const selectEle = document.getElementById("mySelect");
// console.log(selectEle);

// selectEle.addEventListener("change", cb);
// //if there is a change in my element , call cb
// function cb() {
//   console.log("Technology selected -> ", selectEle.value);
// }

//onkeypress
//it is a keyboard event, 
// we can get the key pressed on keyboard
//does not identify alt, ctrl,shift,esc
//we now use onkeydown event -> it supports all keys
// const inputEle1 = document.getElementById("inputBox1");
// console.log(inputEle1);
// inputEle1.addEventListener("keypress", cb);
// function cb(e) {
//     console.log(e.code);
//     console.log(e.key);
//     console.log(e.charCode);
//     console.log(e.keyCode);
// }

const inputEle2 = document.getElementById("inputBox2");
console.log(inputEle2);
inputEle2.addEventListener("keydown", cb);
function cb(e) {
console.log(e);
  console.log(e.code);
  console.log(e.key);
  console.log(e.charCode);
  console.log(e.keyCode);
}

//keyboard event -> real life use case 



