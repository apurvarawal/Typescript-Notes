"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    id;
    name;
    address;
}
let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "india";
console.log(john);
// Using Constructor in class
class Employee1 {
    id;
    name;
    address;
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // creating Method
    getAddressWithName() {
        return `${this.name} stays at ${this.address}`;
    }
    // Static members
    static getEmployeeCount() {
        return 40;
    }
    login() {
        return john;
    }
}
console.log(Employee1.login());
// calling static member
console.log(Employee1.getEmployeeCount());
let alley = new Employee1(1, "Alley", "Delhi");
console.log(alley);
let address = alley.getAddressWithName();
console.log(address);
// Member visibility
class Manager extends Employee1 {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let manager = new Manager(3, 'ken', 'palace');
console.log(manager.getAddressWithName()); //getAddressWithName is not in class Manager but it can be accessed through parent class, which can be seen as member visibility.
// Getters and Setters
class Employee2 {
    #id;
    name;
    address;
    get empID() {
        return this.#id;
    }
    set empID(id) {
        this.#id = id;
    }
    constructor(id, name, address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
}
let kevin = new Employee2(4, 'kevin', 'india');
kevin.empID = 100; // setting empID by using setter
console.log(kevin.empID); // printing empID by using getter
