//lexical env, scope chaining example
// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// var b = 10;
// a();
// console.log(b);

//closures
// functions along with its lexical scope forms a closure. in other words a closure gives you and access to outer function's scope to inner function .

// function x() {
//     var aa=100;
//     var a = 10;
//     function y() {
//         console.log(a);
//         console.log(aa);
//         console.log(b);
//     }
//     var b = 1000;
//     return y;
// }
// let ans = x();
// console.log(ans);
// // function y() {
// //         console.log(a);
// //     }
// ans();
// ans forms a closure , because it has access to it's local scope + it's parent's scope.

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function z() {
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y() {
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// function x() {
//     var i = 1;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
//     console.log("hello");
// }
// x();  // hello 1

// for (var i = 1; i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// 5 setTimeout, i = 6;

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     i += 100;
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     i += 100;
//     console.log(i);
//   }, i * 1000);
// }

// print 1 2 3 4 5 w/0 using let keyword
// for (var i = 1; i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// //genius sol by vishnu
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function a() {
//     i += 10;
//     console.log(Math.floor(i / 10));
//   });
// }

//expected soln by krishna
// for (var i = 1; i <= 5; i++) {
//   function close(num) {
//     setTimeout(function () {
//       console.log(num);
//     }, num * 1000);
//   }
//   close(i);
// }


//<------this------>
 
let user1 = {
  name: "Aman",
  age: 25,
  greet() {
    alert(`Hello ${user1.name} my age is ${user1.age}`);
  },
};

let user2 = {
  name: "Krishna",
  age: 23,
  greet() {
    alert(`Hello ${this.name} my age is ${this.age}`);
  },
};

// console.log(user.name);
// user1.greet();
// user2.greet();
//this keyword is not permanently pointing to user object

// this keyword is going to point to the object from where the function has invoked i.e. via which obj the function was invoked. 
// or this points 

// 1st ques-> this instead of obj name ?

// let user3 = user1;
// user1 = null;
// user3.greet();

// let user3 = user2;
// user2 = null;
// user3.greet();

// <------golden rules------>
// 1. the value of "this" is evaluated during run time 
// 2. value of "this" depends from where it is called
// 3. "this" points to that object from where the function is being called
// 4. arr,obj,fn are all passed by reference  

//benefit of using this 
let admin={name1:"Abhishek"}
let user={name1:"Ankit"}

function meet(){
    console.log(`hello ${this.name1}`);
}

admin.fn=meet;
user.fn=meet;

// admin.fn();
// user.fn();

let foo1=admin.fn;
let foo2=user.fn;

foo1()
foo2()











