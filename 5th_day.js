// Functions:
//   is a block of code that performs a specific task , and can be invocked(call) whenever it is needed 

function Myfunction()
{
   console.log("This is the first code in funcion:");
   console.log("The is the second line code in the function: ");
}
Myfunction();


function secondfunction(msg)  // values passing during the function definition  is known as parameter and they are local variables 
{
    console.log(msg);
}

secondfunction("My name is Vikash Thakur:");  // values passed during calling the funcion is known as argument 


//finding sum of two numbers without taking input from the user

function sum(x,y)
{
    s = x+y; 
    console.log("Before return :");
    return s;
}

let value = sum(5,7);
console.log(value);


//arrow function (=>)
const sum1 = (a,b) =>
{
    return (a+b);
}

const arrowMul = (a,b) =>
{
    // console.log(a*b);   
    return a * b;
}


// Question: 
//  create a function using a keyword function that takes a string as an argument and return the number of vowels in the string:


function countVowels(str)
{
    let count = 0;
    for( let char of str)
    {
        if(char === "a"  || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }

    console.log(count);
}


// create an arrow function to to perfrom the same task

const countvowel = (str) =>
{
    let count = 0;
    for(let char of str)
    {
        if(char === "a"  || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
   return count;
}


// ForEach Loop in Arrays 
// A callback is a function that is passed as an argument to another function 

let arr = ["mumbai", "delhi", "chennai", "Hyderabad", "bengaluru"];
arr.forEach( (val) => 
 { console.log(val.toUpperCase());}
);


let arr1 = ["India", "Nepal", "Bangaldesh", "Srilanka", "Pakistan", "Afghanistan", "Bhutan", "Maldives"];

arr1.forEach( (ele, idx, arr1) =>
{
    console.log(ele.toUpperCase(), idx, arr1);
})


// Interview question: 
// what do you mean by higher order function/method: also known as foreach function: takes another funciton as a parameter or
// reaturn that function as a value 


// question: 
//  for a given array of numbers, print the square of each value using foreach loop.

let arr2 = [2,4,5,6,7,9,88,34,56];
arr2.forEach( (ele) =>
{
    console.log(ele**2);
})



//map:
// creates a new array with the results of some operation. The value its callback returns are used to form new array\
//arr.map(callbackfunciton(value, index, array))

let nums = [4,5,6,7,8,10];
let new_array = nums.map( (val) =>
{
    return val**2;
});
console.log(new_array);


//fiter:
// create a new array of elemets that give true for a condition/filter
//example: all even numbers (condition)


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

let new_numbers = numbers.filter( (val) =>
{
    return val%2==0;
});

console.log("The even numbers of the given array is: ", new_numbers);


//Reduce:
// performs some operations and reduce the array to a single value. It returns that single value 


let arr3 = [1,2,3,4,5,6];
let output = arr3.reduce((res, curr) =>        // res is the first value and current is the second value then after that the first two value will be counted as one value and the next value will be counted as current value
{
    return res + curr;   // The return value will be stored in res and the next value like 3 will be current value initially current value was 2
})
console.log(output);

// question: 
//  find the largest element in the array

let arr4 = [3,4,6,7,78,10,21,34];

let output1 = arr4.reduce( (pre, curr) =>
{
    return pre > curr ? pre : curr;   // if previous is greater than current then return previous otherwise return current
});

console.log(output1);


// Question:
//   -we are given array of marks of students. Filter out of the marks of students that socred 90+.
//   -take a number n as input from user. Create an array of numbers from 1 to n.
//   -use the reduce method to calculate sum of all numbers in the array
//   -use the reduce method to calculate the product of all the numbers in the array 


let marks = [23,43,91,84,93,32,99];

let topper = marks.filter( (val) =>
{
    return val >= 90;
});

console.log(topper);




let n = prompt("Enter the number you want to form an array:");
let empty_arr = [];
for( let i=1; i<=n; i++)
{
    empty_arr[i-1] = i;
}
console.log(empty_arr);




let result = empty_arr.reduce( (pre, curr) =>
{
    return pre + curr;
});
console.log("The sum of all the elements in the array is: ", result);


let result1 = empty_arr.reduce( (pre, curr) =>
{
    return pre * curr;
});
console.log("The sum of all the elements in the array is: ", result1);


