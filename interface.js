"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let User = { name: 'ross', id: 2, address: 'delhi' };
// Object Destructuring for accessing particular objects:
// 1st Method of object destructuring
let { name: userName, address: userHome } = { name: 'ross', id: 2, address: 'delhi' };
// 2nd Method of object destructuring
User.name;
User.address;
console.log(User);
let employee = { name: 'ress', id: 3, address: 'delhi', salary: 200 };
console.log(employee);
// Array Destructuring
// creating an array
let users = [{ name: 'apurva', age: 21, id: 4, address: 'india' },
    { name: 'athiya', age: 31, id: 5, address: 'india' },
    { name: 'alia', age: 41, id: 6, address: 'india' }
];
// implementing array destructuring
let [user1, user2, ...restusers] = [{ name: 'apurva', age: 21, id: 4, address: 'india' },
    { name: 'athiya', age: 31, id: 5, address: 'india' },
    { name: 'alia', age: 41, id: 6, address: 'india' },
    { name: 'anima', age: 41, id: 7, address: 'india' }
];
console.log(user1);
console.log(user2);
console.log(restusers);
