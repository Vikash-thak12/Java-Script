// Synchronous in JS
// where the execution runs in a sequence manner that is one after another

console.log("One");
console.log("Two")
console.log("Three");
console.log("Four");

//Asynchoronous 
// Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow


console.log("Five");
console.log("Six")

setTimeout( () => {
    console.log("Chal na a kaam karne de, Sarak wodhar:");
}, 2000);

console.log("Seven");
console.log("Eight");



// callback
// function passed as an argument in another functoin is known as callback 

function sum (a,b) {
    console.log(a+b);
};

function calculator (a,b,sumcallback) {  //here the sumcallback function is sum function which is called in another function so known as callback 
    sumcallback(a,b);
}

calculator(3,4,sum);