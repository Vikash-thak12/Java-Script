// // Synchronous in JS
// // where the execution runs in a sequence manner that is one after another

// console.log("One");
// console.log("Two")
// console.log("Three");
// console.log("Four");

// //Asynchoronous 
// // Asynchronous code execution allows to execute next instructions
// // immediately and doesn't block the flow


// console.log("Five");
// console.log("Six")

// setTimeout( () => {
//     console.log("Chal na a kaam karne de, Sarak wodhar:");
// }, 2000);

// console.log("Seven");
// console.log("Eight");



// // callback
// // function passed as an argument in another functoin is known as callback 

// function sum (a,b) {
//     console.log(a+b);
// };

// function calculator (a,b,sumcallback) {  //here the sumcallback function is sum function which is called in another function so known as callback 
//     sumcallback(a,b);
// }

// calculator(3,4,sum);


// //callback hell 

// function getData(DataId, NextData) {
//     setTimeout( () => {
//         console.log("Data:", DataId)
//         if(NextData) {
//             NextData();
//         }
//     }, 2000);
// };


// //callback hell 
// //Nested call backs stacked below one another forming a pyramid structure 
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5, () => {
//                     getData(6, () => {
//                         getData(7);
//                     })
//                 })
//             })
//         })
//     });
// });



// //Promises 
// Promise is an object that represents the eventual completion or failure of 
// an asynchronous operation and its resulting value. Promises provide a 
// cleaner and more organized way to work with asynchronous code compared to traditional callback functions.


let promise = new Promise ( (resolve, reject) => {
    console.log("This is promise in JS:");
    resolve("Got it:");
});