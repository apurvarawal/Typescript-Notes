// String

let lname : string;
lname = "Apurva";
let newname = lname.toUpperCase();
console.log(newname);

// Number

let age : number;
age = 35;
console.log(age);

let dob = "24";

let result = parseInt(dob);

console.log(result);

// Boolean

let isValid : boolean = false;
console.log(isValid);

// Array

let greetlist : string[];
greetlist = ["hey", "hello", "heya"];
console.log(greetlist);

let greet = greetlist.find((greetlist) => greetlist === "hello");
console.log(greet);

let numlist : Array<number>;
numlist = [1,2,3,4,5];

let num = numlist.filter((numlist) => numlist >= 2);
console.log(num);

let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);

// enum

enum color{  // we can add const before enum to remove the unnecessary code from datatypes.js, which shows after compilation
    red,
    green,
    blue
}

let c : color = color.blue;
console.log(c);

const enum state{
    solid,
    liquid,
    gas
}

let s : state = state.liquid;
console.log(s);

// Tuples

let swapnums : [firstNum : number, secondNum : number];

function swapNumbers(num1 : number, num2 : number) : [number, number]{
    return [num2, num1];
}

swapnums = swapNumbers(10, 20);

swapnums[0];
swapnums[1];
