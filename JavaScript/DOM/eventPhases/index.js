// const elements = document.querySelectorAll("*");
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

// document.querySelector(".parent").addEventListener("click", function(e){
//     console.log(`Click event is fired on ${this.nodeName}1`)
// })

// document.querySelector(".child").addEventListener("click", function (e) {
//   // stopping event propogation
//   e.stopPropagation();
//   console.log(`Click event is fired on ${this.nodeName}2`);
// });



//POC of bubbling
let bought = false;
document.querySelector(".list").addEventListener("click", function (e) {
    console.log(`${e.type} event fired on ${this.nodeName}`);
    if (!bought) {
        e.target.classList.add("bought");
    }
    else if (bought){
        e.target.classList.remove("bought");
    }
    bought = !bought
    
    e.target.classList.toggle("bought");

    console.log("target",e.target);
    console.log("currentTarget", e.currentTarget);
    console.log("eventPhase", e.eventPhase);
})


