//Array Destructuring in JS
const number = [1,2,3,4,5,6,7,8,9];
const [a,b,,,...rest] = number;

console.log(a,b,rest);

//Object Destructuring in JS
const person = {name: "Vikash", Age: 21, City: "Bengaluru"};
const {name, Age, City} = person;

console.log(name, Age, City);



// Spread Syntax in JS
const myArr = [2,3,4]
const obj = {...myArr}
function sum(x,y,z) {
    return x+y+z;
}

console.log(obj)
console.log(sum(...myArr));


const details = {
    Name: "Vikash",
    Company: "Amazone",
    Address: "Bengaluru"
}

console.log({...details, Name:"Troll"})  // The name will be changed to Troll as name will be override  by the new value of Name
console.log({Name:"Troll", ...details})  // This will not rename the name as it will be override by the details at the end