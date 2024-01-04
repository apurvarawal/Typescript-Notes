export interface user{
    name : string;
    age? : number; //'?' means 'age' is an optional parameter
    id : number;
    address : string;
}

export interface login{
    login(): user;
}

let User : user = {name:'ross', id: 2, address : 'delhi'};

// Object Destructuring for accessing particular objects:

// 1st Method of object destructuring
let {name : userName, address: userHome} : user = {name:'ross', id: 2, address : 'delhi'};

// 2nd Method of object destructuring
User.name;
User.address;

console.log(User);

// Extending an interface

interface employees extends user{
    salary : number;
}


let employee : employees = {name:'ress', id: 3, address : 'delhi', salary: 200};

console.log(employee);

// Array Destructuring

// creating an array
let users : user[] = [{name: 'apurva', age: 21, id: 4, address: 'india'},
                      {name: 'athiya', age: 31, id: 5, address: 'india'},
                      {name: 'alia', age: 41, id: 6, address: 'india'}
                     ]

// implementing array destructuring
let [user1, user2, ...restusers] : user[] = [{name: 'apurva', age: 21, id: 4, address: 'india'},
                     {name: 'athiya', age: 31, id: 5, address: 'india'},
                     {name: 'alia', age: 41, id: 6, address: 'india'},
                     {name: 'anima', age: 41, id: 7, address: 'india'}
                     ]

console.log(user1);
console.log(user2);
console.log(restusers);