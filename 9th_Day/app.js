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

// setTimeout(() => {
//     console.log("Chal na a kaam karne de, Sarak wodhar:");
// }, 2000);

// console.log("Seven");
// console.log("Eight");



// // callback
// // function passed as an argument in another functoin is known as callback 

// function sum(a, b) {
//     console.log(a + b);
// };

// function calculator(a, b, sumcallback) {  //here the sumcallback function is sum function which is called in another function so known as callback 
//     sumcallback(a, b);
// }

// calculator(3, 4, sum);


// //callback hell 

// function getData(DataId, NextData) {
//     setTimeout(() => {
//         console.log("Data:", DataId)
//         if (NextData) {
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



// // //Promises 
// // Promise is an object that represents the eventual completion or failure of 
// // an asynchronous operation and its resulting value. Promises provide a 
// // cleaner and more organized way to work with asynchronous code compared to traditional callback functions.


// let promise = new Promise((resolve, reject) => {
//     console.log("This is promise in JS:");
//     resolve("Got it:");
//     reject("Error:");
// });

// //Another example of promise using Asynchronous 

// function data(id, nextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("The data:", id);
//             resolve("Sucess:");
//             // reject("Error Occured:");
//             if (nextdata) {
//                 nextdata();
//             }
//         }
//             , 5000);
//     });
// }

// let vik = data(512);


// // .then() and .catch()
// //In JavaScript Promises, then and catch are methods used to handle
// //  the results of asynchronous operations when working with Promises.


// const pro = () => {
//     return new Promise((resolve, reject) => {
//         console.log("The Promise:");
//         resolve("Resolved:");
//         // reject("Rejected:");
//     })
// };


// let newpro = pro();
// newpro.then((res) => {
//     console.log("The promise is successfully handled:", res);
// });

// newpro.catch((err) => {
//     console.log("The promise is rejected:", err);
// });


// //Promise chain in JS


// function async1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data: 1");
//             resolve("Success:");
//         }, 4000);
//     })
// };


// function async2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data: 2");
//             resolve("Success:");
//         }, 3000);
//     })
// };

// function async3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data: 3");
//             resolve("Success:");
//         }, 2000);
//     })
// };


// console.log("Fetching the data1.......");
// let fn1 = async1();
// fn1.then(() => {
//     console.log("Fetching the data2.......");
//     let fn2 = async2();
//     fn2.then(() => {
//         console.log("Fetching the data3.......");
//         let fn3 = async3();
//         fn3.then(() => {

//         });
//     })
// });

// // In the above program there is then inside then which is known as promise chain in java Script 



// //Another example of chain Promise 
// function getData1(id, nedata) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log("dataID", id);
//             resolve("Success");
//         }, 3000)
//     })
// }

// getData1(1).then((res) => {
//     console.log(res);
//     getData1(2).then( (res) => {
//         console.log(res);
//         getData1(3).then( (res) => {
//             console.log(res);
//             getData1(4).then((res) => {
//                 console.log(res);
//             })
//         })
//     })
// });



// //Async-Await
// Async/await is a feature in JavaScript that allows you to work 
// with asynchronous code in a more synchronous-like manner

function api(data) {

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
        console.log("Weather data:", data);
        resolve("Success:")
        },3000);
    }) 
}

async function getweatherdata() {
    console.log("Getting data 1....");
    await api(1);
    console.log("Getting data 2....");
    await api(2);
    console.log("Getting data 3....");
    await api(3);
    console.log("Getting data 4....");
    await api(4);
    console.log("Getting data 5....");
    await api(5);
}

//IIFE: Immediately Invoked Function Expression 
// used to avoid calling Async-Await function 
// syntax: (function)();

(async function getweatherdata() {
    console.log("Getting data 6....");
    await api(6);
    console.log("Getting data 7....");
    await api(7);
    console.log("Getting data 8....");
    await api(8);
}) ();