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

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    i += 100;
    console.log(i);
  }, i * 1000);
}

// print 1 2 3 4 5 w/0 using let keyword 
for (var i = 1; i <= 5; i++){
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

//genius sol by vishnu 
for (var i = 1; i <= 5; i++) {
  setTimeout(function a() {
    i += 10;
    console.log(Math.floor(i / 10));
  });
}

//expected soln by krishna
for (var i = 1; i <= 5; i++) {
  (function (num) {
    setTimeout(function () {
      console.log(num);
    }, num * 1000);
  })(i);
}

