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

console.log(User);

// Extending an interface

interface employees extends user{
    salary : number;
}


let employee : employees = {name:'ress', id: 3, address : 'delhi', salary: 200};

console.log(employee);
