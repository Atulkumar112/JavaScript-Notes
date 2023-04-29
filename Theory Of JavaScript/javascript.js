// Diff. b/w let, var and const 
// const:- if i declare it once we can change it value...  Ex:-
const a = 50;
a = 40;   // Error:- you can override the value of a 

//var:-  you can use same varible in diff diff data type
var a = 50;
var a = "this is 50";
console.log(a);  //output:- this is 50   // NO error

//let:- let is a mordern keywords. It's comes after/in ES6 version of JS. I recommended that use let keyword every time.
let a = 50;
let a = "this is 50"  // Error:- a is already define
