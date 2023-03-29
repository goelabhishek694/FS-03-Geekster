const elements = document.querySelectorAll("*");
// console.log(elements);
// for (let ele of elements) {
//   //bubbling
//   ele.addEventListener("click", (e) => {
//     console.log(
//       "Bubbling -> ",
//       ele.tagName,
//       "Clicked on ->",
//       e.currentTarget,
//       "Originated from -> ",
//       e.target
//     );
//   });
    
//   //capturing
//   ele.addEventListener(
//     "click",
//     (e) => {
//       console.log(
//         "Capturing -> ",
//         ele.tagName,
//         "Clicked on ->",
//         e.currentTarget,
//         "Originated from -> ",
//         e.target
//       );
//     },
//     true
//   );
// }

document.querySelector(".parent").addEventListener("click", function(e){
    console.log(`Click event is fired on ${this.nodeName}1`)
})

document.querySelector(".child").addEventListener("click", function (e) {
  // stopping event propogation
  e.stopPropagation();
  console.log(`Click event is fired on ${this.nodeName}2`);
});




