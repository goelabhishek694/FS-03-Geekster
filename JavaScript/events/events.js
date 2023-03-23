function myFunction(val) {
    console.log(val);
}
//onchnage event -> is an event attribute , we write itinside element. Whenever there is a change in value of element, onchnage vent occurs which in turn calls the function asociated with it. 

const selectEle = document.getElementById("mySelect");
console.log(selectEle);

selectEle.addEventListener("change", cb);
//if there is a change in my element , call cb
function cb() {
    console.log("Technology selected -> ", selectEle.value);
}

