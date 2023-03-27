const h1 = document.getElementsByClassName("greet");
//console.log(h1);

const button = document.getElementById("b1");
//console.log(button);

//query selector 

var ele = document.querySelector("h3");
//console.log(ele.innerHTML);

var ele = document.querySelector("div>.head2");
//console.log(ele.innerHTML);

var ele = document.querySelector("#head2");
//console.log(ele.innerHTML);

var elements = document.querySelectorAll(".head2")
//console.log(elements);

//change via dom 

const b2 = document.getElementsByClassName("button2");

function myFunction() {
  const headingEle = document.querySelector(".example1");
  //console.log(headingEle.innerHTML);
  //console.log(headingEle.innerText);
  //console.log(headingEle.textContent);
  headingEle.innerHTML = "Bye World";
  const paraEle = document.querySelector(".example2");
  // paraEle.innerText="i am bad"
  // paraEle.textContent="i am bad"
  //it is adding inline style to html ele, style properties will be written in camelCasing
  paraEle.style.color = "red";
  paraEle.style.backgroundColor = "black";
}

const b1 = document.getElementById("b1");
function addClass() {
    const h1 = document.querySelector(".head1");
    const h3 = document.querySelector(".head3");

    h1.classList.add("name");
    h3.classList.add("name");
    // h1.setAttribute("class", "name");
    // h3.setAttribute("class", "name");

}

function removeClass() {
    const h1 = document.querySelector(".head1");
    const h3 = document.querySelector(".head3");

    h1.classList.remove("name");
    h3.classList.remove("name");

}

//mouse events

//onmousenter
function enlargeImage(){
    const imageEle = document.querySelector("#cuteCat");
    imageEle.style.height="400px";
    imageEle.style.width="800px";
}

function reduceImage(){
    const imageEle = document.querySelector("#cuteCat");
    imageEle.style.height = "100px";
    imageEle.style.width = "100px";
}

function showButton() {
    const button=document.querySelector(".b3");
    button.style.opacity="100";
}

//create ele using js 
const myDiv = document.createElement("div");
console.log(myDiv);
myDiv.className = "myDiv";
myDiv.innerHTML = "<h1>Learning DOM</h1>";
myDiv.id = "b23";

//i need to place my element inside DOM tree
console.log("Adding mydiv");
document.body.append(myDiv);
//this method can only be used if ele is present inside tree
myDiv.classList.add("hello");

//remove element
console.log("Removing mydiv");
function removeElement() {
    myDiv.remove();
}


//create textNode using js
const tn = document.createTextNode("Hello Geeksters!");
console.log(tn);

const button456 = document.querySelector(".b3");
//the function which will be called, time after which fn will be called
setTimeout(cb, 10000);
function cb() {
    button456.remove();
}

//add my elemnt at a particular location in dom. 
const greetDiv = document.querySelector(".greet");
var a=greetDiv.append(myDiv);
var b=greetDiv.appendChild(myDiv);

// console.log(a);
// console.log(b);

// HTMLCollection vs NodeList

//traversing parent node
var a=greetDiv.parentElement
var b = greetDiv.parentNode
console.log(a);
console.log(b);

//traversing on children
var a = greetDiv.childNodes;
console.log(a); 
//[text, h2#head2, text, h2.head2, text, h2.head2, text, div#b23.myDiv.hello]
//this text represents a line break


var a = greetDiv.children
console.log(a);

//traversing on sibling
var a = greetDiv.nextSibling;
console.log(a); 

var a = greetDiv.nextElementSibling;
console.log(a); 

var a = greetDiv.previousElementSibling;
console.log(a); 

//cloning a node
var a = greetDiv.cloneNode(true);
console.log(a); 
