class Person{
    constructor(name){
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let p1=new Person("Akshay");
console.log(p1);

class Engineer extends Person {
  constructor(name, branch) {
    //super calls the parent constructor
    super(name);
    this.branch = branch;
  }
  greet() {
    console.log(`Hello Er.${this.name}`);
  }
}

class Doctor extends Person {
  constructor(name, specialization) {
    //super calls the parent constructor
    super(name);
    this.specialization = specialization;
  }
  greet() {
    console.log(`Hello Dr.${this.name}`);
  }
}

let sde = new Engineer("Abhishek", "CSE");
sde.greet();
console.log(sde);

let doc = new Doctor("Abhishek", "neurosurgeon");
doc.greet();
console.log(doc);

//polymorphism
//parameter
let concatAll=(a,b)=>{
    return b.concat(a);
}

let ans1=concatAll([10,20],[30,40]);
let ans2=concatAll("Goel","Abhishek");

console.log(ans1);
console.log(ans2);

//overloading
console.log(10+20);
console.log("hello"+" world");
