// console.log("Welcome to the world of mine where i wil write some of the interesting codes:");

// // Notes:
// // var : variables can be re-declared and updated. A global scope variables.  we don't use this keyword as a good programmer

// // let : variables cannot be re-declared but can be updated. A block scope variables.
 
// // const : variables cannot be re-declared and updated. A block scope variables.

// let age = 23;
// age = 56;
// age = 39;
// console.log(age);


// const pi = 3.14;
// console.log(pi);

// {
//     let a = 45;
//     console.log(a);
// }

// {
//     let a = 35;
//     console.log(a);
// }



// // Data types in javascript:

// let name = "Vikash Thakur";
// let price = 100.34;


// // Non-Primitve datatype
// // also known as objects where lots of information are collected like array, functions, etc 


// const student = {
//     firstName:"vikash",
//     age: 21,
//     city: "Delhi",
//     cgpa: 9.3
// };

// student.age = student.age + 1;

// console.log(student.firstName);
// console.log(student["age"]);



// // Practice question of day 1

// const product = {
//     name : "parker jotter standard ct ball pen (black)",
//     price : 270,
//     isdeal : true,
//     rating : 4.5
// }

// console.log(typeof product);
// console.log(typeof product.name);






// // day2
// // Arithmetic operators

// let a = 5;
// let b = 7;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);  // this is exponential operator where we have power like 5^7

// console.log(++a);
// console.log(--a);


// let c = 6; 
// let d = 4;

// cond1 = c > d;
// cond2 = c == 4;
// cond3 = d == 5;

// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond1 && cond3 =", cond1 && cond3);


// console.log("cond1 || cond3 =", cond1 || cond3);
// console.log("cond2 || cond3 =", cond2 || cond3);




// // Conditional statements

// let mode = "Light";
// let color;

// if(mode === "dark")
// {
//     console.log("black");
// }

// if (mode === "Light")
// {
//     console.log("white");
// }



// //Finding odd or even using if else statement 
// let num = 10;
// if (num%2 == 0)
// {
//     console.log(num, "is even number");
// }
// else 
// {
//     console.log(num, "is odd number:");
// }




// let age1 = 61;

// if(age1 < 18)
// {
//     console.log("They are youngers:");
// }
// else if(age1 >=18 && age1<=60)
// {
//     console.log("They are mature:");
// }
// else
// {
//     console.log("They are older;");
// }


// let mode1 = "dark";
// let color1;

// if (mode1 === "dark")
// {
//     color1 = "black";
// }
// else if (mode1 === "blue"){
//     color1 = "yellow";
// }else if ( mode1 === "greeen"){
//     color1 = "white";
// }
// else 
// {
//     color1 = "sky blue";
// }

// console.log(color1);


// // Ternary operators
// // condition ? true output : false output

// let age = 20;
// age >= 18 ? console.log("Older ") : console.log("Younger");

// let age1 = 10;
// let result = age>= 18 ? "Adult" : "Not adult";
// console.log(result);



// // day 2 practice question:
// // prompt : built-in function that displays a dialog box with an optional message, an input field, and buttons for the user to interact with.
// // get user to input a number using prompt("Enter the number:"). Check if the number is multiple of 5 or No:

// let num1 = prompt("Enter the number:");
// if(num1%5 == 0)
// {
//     console.log(num, " is multiple of 5");
// }
// else 
// {
//     console.log(num, "is not multiple of 5:");
// }

// // 2nd question:
// // write a code which can give grades to students according to thier scores:

// let mark = prompt("Enter the number you want for your Grade:");
// let grade;
// if (mark >= 90 && mark <=100)
// {
//    grade = "A+";
// }
// else if(mark >= 80 && mark <90)
// {
//     grade = "A";
// }
// else if(mark >= 70 && mark <80)
// {
//     grade = "B";
// }
// else if(mark >= 60 && mark < 70)
// {
//     grade = "C";
// }
// else if(mark >= 40 && mark < 60)
// {
//     grade = "D";
// }
// else 
// {
//     grade = "Fail";
// }

// console.log("According to your marks, Your grade is ", grade);