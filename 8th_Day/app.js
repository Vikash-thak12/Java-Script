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
