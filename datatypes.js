"use strict";
// String
let lname;
lname = "Apurva";
let newname = lname.toUpperCase();
console.log(newname);
// Number
let age;
age = 35;
console.log(age);
let dob = "24";
let result = parseInt(dob);
console.log(result);
// Boolean
let isValid = false;
console.log(isValid);
// Array
let greetlist;
greetlist = ["hey", "hello", "heya"];
console.log(greetlist);
let greet = greetlist.find((greetlist) => greetlist === "hello");
console.log(greet);
let numlist;
numlist = [1, 2, 3, 4, 5];
let num = numlist.filter((numlist) => numlist >= 2);
console.log(num);
let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);
// enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
let c = color.blue;
console.log(c);
let s = 1 /* state.liquid */;
console.log(s);
// Tuples
let swapnums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapnums = swapNumbers(10, 20);
swapnums[0];
swapnums[1];
