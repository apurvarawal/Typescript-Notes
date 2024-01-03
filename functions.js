"use strict";
function add(num1, num2) {
    return num1 + num2; //  |----> output datatype
}
console.log(add(2, 3));
// Other ways to write a function
const sub = (num1, num2) => num1 - num2;
console.log(sub(3, 4));
const multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(4, 5));
// when the third parameter is optional
function findsum(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(findsum(1, 2, 3));
console.log(findsum(1, 2));
// when the third parameter is required
const findingsum = (num1, num2, num3 = 10) => num1 + num2 + num3;
console.log(findingsum(1, 2));
console.log(findingsum(1, 2, 3));
// Rest Parameter
function findsum2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [3, 4, 5];
console.log(findsum2(1, 2, ...numbers));
// another way of writing the above line
// console.log(findsum2(1,2,...[3,4,5]));  
// console.log(findsum2(1,2,3,4,5)); in this the num1=1, num2=2 and the rest numbers are considered part of num3 array
// Generic Function
function getitems(items) {
    return new Array().concat(items);
}
let concatNums = getitems([1, 2, 3, 4]); // getitems<number>([1,2,3,4]) or we can write it like this
let concatString = getitems(["a", "b", "c", "d"]);
