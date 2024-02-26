//Array Destructuring in JS
const number = [1,2,3,4,5,6,7,8,9];
const [a,b] = number;

console.log(a,b);

//Object Destructuring in JS
const person = {name: "Vikash", Age: 21, City: "Bengaluru"};
const {name, Age, City} = person;

console.log(name, Age, City);