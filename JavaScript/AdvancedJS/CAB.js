//<--------CALL,APPLY,BIND-------->

let player1 = {
  fName: "Rahul",
  lName: "Dravid",
  welcome: function () {
    console.log(this.fName + " "+this.lName);
  },
};

player1.welcome();

let player2 = {
  fName: "Sachin",
  lName: "Tendulkar",
};

//function borrowing
// player1.welcome() //-> somehow "this" should point to player2 instead of player1
player1.welcome.call(player2);
//functionName.call(name of object to whom we want "this" to point to)

let player3 = {
  fName: "Kapil",
  lName: "Dev",
};

// parameters received from call method
function welcome(email,age) {
    console.log(`Welcome ${this.fName} ${this.lName}
    Email ${email}
    Age ${age}`);
}
//          name of object, n number of arguments
// welcome.call(player3,"kd83@gmail.com",60);
welcome.call(player2,"masterblaster@gmail.com",50); //this->player2 and welcome fn is called 

//Apply
let argsArr = ["kd83@gmail.com", 60];
welcome.apply(player3, argsArr);


//bind 
// as soon as we use call method, the function is called.
//in bind method "this" keyword gets binded to obj of our choice and returns a function which can be called later on.

let welcomeSachin = welcome.bind(player2, "masterblaster@gmail.com", 55); //this->player2
console.log(welcomeSachin);
welcomeSachin(); //-> welcome fn is called


welcomeSachin.call(player3); //no effect
welcomeSachin.bind(player3); // no effect 

//polyfill for bind

let car={
    name:"Thar",
    brand:"Mahindra"
}

let carDescription=function(){
    console.log(`I bought a new ${this.brand} ${this.name}`);
}

//assume i do not have a bind function 
// var bindedFn=carDescription.bind(car);

// prototype is an obj which contains methods and properties 


Function.prototype.myBind=function(arg){
  let fn = this; //carDescription
  return function () {
    fn.call(arg);
  };
};



var bindedFn=carDescription.myBind(car);
console.log(bindedFn);
bindedFn();



//obj destructuring
let obj = {
    name: "Abhishek",
    profession: "Engineer",
    age: 24,
    hobby:"music"
}

var { age, name } = obj;
console.log(name);
console.log(age);


//array destructuring 
let person = ["Abhishek", "Engineer", 24, "music"];
var [name,,,hobby] = person;
console.log(name);
console.log(hobby);


//spread operator
let fruits = ["Apple", "Mango", "Banana", "Grapes"];
let allFruits = ["papaya", "kiwi", "pineapple", ...fruits];
allFruits.tasty = true;
console.log(allFruits);
console.log(allFruits.tasty);
console.log(allFruits["tasty"]);

userProfile("Abhishek", "Engineer", 24, "music", "CSE", "MAIT");
function userProfile(...args) { //rest
    console.log(...args); //spread
};

//string destructuring
let fullName = "Abhishek Goel";//["A", "b", "h", "i", "s","h","e","k"," ","G","o","e","l"]
let [...firstLetter] = fullName;
let [firstName] = fullName.split(" ");//["Abhishek","Goel"]
console.log(firstLetter);
console.log(firstName);

// let arrow = (name) => {
//     console.log("hello"+name);
// };
// arrow("Abhishek")
// arrow()
// arrow()
// arrow()


// normal/conventional functions
function arrow() {
  console.log("hello" + name);  
}

//function expression
// let arrow = function () {
//     console.log("hello" + name);
// }

// //arrow fn
// let arrow = () => {
//     console.log("hello" + name);
// }

// let arrow = (name) => {
//   console.log("hello" + name);
// };

// let arrow = (name,age) => {
//   console.log("hello" + name+age);
// };

// let arrow = name => {
//   return ("hello" + name); //explicitly type return if curly braces present 
// }; 

// let arrow = (name) => console.log("hello" + name);

// let arrow = name => "hello" + name; //returns whatever is there after arrow


//diff b/w normal func & arrow fn 
// 1) this
// 2) hoisting

//hoisting -> all the varibale and function declaration are moved to the top 

console.log(a);
var a = 10;
console.log(a);

hello();
function hello() {
    console.log("hi");
}

console.log(bye);
var bye = () => {
    console.log("byeeeee");
}
console.log(bye);
bye();










