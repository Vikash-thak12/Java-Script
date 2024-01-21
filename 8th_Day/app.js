const student = {
    FullName: "Vikash Thakur",
    Marks: 98.5,
    PrintMarks: function () {
        console.log("The mark is: ", this.Marks);
    }
};


const employee = 
{
    calcTax() {
        console.log("The tax is 10%: ");
    },
    calc2Tax: function () {
        console.log("The tax is 20%: ");
    }
};


const Vikash = {
    salary: 70000,
    calcTax() {
        console.log("The tax is 30%: ");
    }
};



Vikash.__proto__ = employee;


// If object and prototype have same method, 
// object's method will be used

const employee1 = 
{
    calcTax() {
        console.log("The tax is 10%: ");
    },
    calc2Tax: function () {
        console.log("The tax is 20%: ");
    }
};


const Vikash1 = {
    salary: 70000,
    calcTax() {
        console.log("The tax is 30%: ");
    }
};

Vikash1.__proto__ = employee1;


// Classes in JavaScript
// A class is a blueprint for creating objects with similar properties and methods.

class ToyataCar {

    constructor() {
        console.log("This is a constructor and automatically invocked by the object: ")
    }
    start () {
        console.log("Start: ")
    }

    stop () {
        console.log("stop:")
    }
    
    setbrand(brand) {
        this.brandName = "Brand ";
    }
}

let Mercedies = new ToyataCar();
Mercedies.setbrand("Vikash");


class Class {
    constructor(vikash) {
        console.log("Creating the list of the students: ");
        this.Brandvikash = vikash;

    }
}

let pupil = new Class();


// Inheritance 
// Inheritance is passing down properties and methods from parent class to chlil class

class Parent {
    fn1()
    {
        console.log("This is the Parent Class: ")
    }
};

class child extends Parent {};

let Newobj = new child();