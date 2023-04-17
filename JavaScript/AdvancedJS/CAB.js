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











