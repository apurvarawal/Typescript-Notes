import { user, login } from "./interface";
// import * as userlogin from "./interface";              ------------implementation of another way of importing

class Employee{
    id!: number;
    name!: string;
    address!: string;
}

let john = new Employee();

john.id = 1;
john.name = "John";
john.address = "india";

console.log(john);

// Using Constructor in class

class Employee1 implements login{
// class Employee1 implements userlogin.login{                 --------------------------' '---------------------------
    id : number;
    name : string;
    address : string;

    constructor(id : number, name : string, address : string){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    // creating Method

    getAddressWithName() : string{
        return `${this.name} stays at ${this.address}`;
    }

    // Static members

    static getEmployeeCount() : number{
        return 40;
    }

    login():user{
    // login():loginuser{                                   ----------------------------' '----------------------
        return {name:'john',id: 2,address: 'delhi'};
    }
}

// calling static member

console.log(Employee1.getEmployeeCount());

let alley = new Employee1(1, "Alley", "Delhi");

console.log(alley);

let address = alley.getAddressWithName();

console.log(address);

// Member visibility

class Manager extends Employee1{
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }
}

let manager = new Manager(3, 'ken', 'palace');

console.log(manager.getAddressWithName());    //getAddressWithName is not in class Manager but it can be accessed through parent class, which can be seen as member visibility.

// Getters and Setters

class Employee2{
    #id : number;
    name! : string;
    address! : string;

    get empID() : number{
        return this.#id;
    }

    set empID(id : number){
        this.#id = id;
    }

    constructor(id : number, name : string, address : string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }
}

let kevin = new Employee2(4, 'kevin', 'india');

kevin.empID = 100;  // setting empID by using setter

console.log(kevin.empID); // printing empID by using getter
