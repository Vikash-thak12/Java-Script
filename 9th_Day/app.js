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