const h1 = document.getElementsByClassName("greet");
console.log(h1);

const button = document.getElementById("b1");
console.log(button);

//query selector 

var ele = document.querySelector("h3");
console.log(ele.innerHTML);

var ele = document.querySelector("div>.head2");
console.log(ele.innerHTML);

var ele = document.querySelector("#head2");
console.log(ele.innerHTML);

var elements = document.querySelectorAll(".head2")
console.log(elements);

//change via dom 

const b2 = document.getElementsByClassName("button2");

function myFunction() {
    const headingEle = document.querySelector(".example");
    headingEle.innerHTML="Bye World"
}

const b1 = document.getElementById("b1");
function changeColour() {
    const h1 = document.querySelector(".head1");
    const h3 = document.querySelector(".head3");

    h1.setAttribute("class", "name");
    h3.setAttribute("class", "name");
}
// addClassList
//removeclasslist
//how webpage renders
//onmouseneter nmouseleave

//innertext inner html
