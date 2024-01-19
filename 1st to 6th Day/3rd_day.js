// loops and strings in javascript 

for (let i=1; i<10; i++)
{
    console.log("Welcome to the Java Script:");
}

console.log("This is out of the loop:");

// printing the value of i using loop
for (var i=1; i<9; i++)
{
    console.log("The value of i is:",i);
}



// finding sum of 1 to n numbers 

let n = prompt("Enter the value you want to find up that number:");
let sum = 0;
for (let i =1; i<= n; i++)
{
    sum = sum + i;  
}
console.log("The sum of 1 is :", sum);

let count = 10;
while(count<5)
{
    console.log("Vikash Thakur:");
    count++;
}


// let i=1;
// do 
// {
//     console.log("Troll X:");
//     i++;
// }while(i<=5);


let j = 10;
do 
{
    console.log("Again Vikash Thakur:");
}while(j<10);

//for-of-loop
let str1 = "Vikash Sharma";
for(let val of str1)  // i = iterator -> characters
{
    console.log("val :",val);
}





// for-in-loop
// In JavaScript, the for...in loop is used to iterate over the enumerable properties of an object. 

let student = 
{
    name: "Vikash",
    age: 21, 
    cgpa: 8.6, 
    ispass: true
};
for (let key in student)
{
    console.log("Key : ", key, " Value :", student[key]);
}


//print all even numbers from 0 to 100
for(i=1; i<=100; i++)
{
    if(i%2==0) //i%2!==0 for odd number
    {
        console.log(i);
    }
}
console.log("These are the all even numbers in between 0 and 100");


// create a game where you start with any random game numebr. Ask the user to keep guessing the game number until the gamer enters the correct number:

let gameNumber = 35; 
let num = prompt("Guess the number for Game:");

while (num != gameNumber )
{
    num = prompt("You entered the wrong number. Please guess the number again: ");
}

console.log("Congratulations! you have guessed the right number:");



// string in java Script
// string is the sequence of characters to represent the text 

let str = "Vikash Thakur";
console.log(str[3]);
console.log(str.length);


let obj = 
{
    name: "Vikash",
    age: 21
};

console.log("My name is", obj.name, "And i'm", obj.age,"Old.");


// template literals in java Script (``) is nothing but the string embedded with backticks(``)
let output = `My name is ${obj.name} And i'm ${obj.age} old.`;
console.log(output);


let specialString = `Troll is very troller`;
console.log(specialString);


let anotherString = `Give me that fucking ${200+455+200} dollars`;   // 200+455+200 is that expression embedded in the brackets 
console.log(anotherString);

// String interpolation 
// string interpolation refers to the process of embedding expressions or variables within a string,
//  allowing you to create a dynamic string by combining static text and variable values.


// escape character 
// helps to break the line into next line which is \n and \t to give more space in between two words:

console.log("Trolling is the level of troller:\nAnd nothing is going to right for >>");



// String methods in JS
let char1 = "This is one of the fastest writer in the college:";
let char2 = "This is one of the sexiest thing i have ever in my life:";
let char3 = "Leave it whatever is happening in your life and take is as a positive way";


console.log(char1.toUpperCase());
console.log(char2.toLowerCase());
console.log(char3.trim());  //trim to remove all the whitespaces, whitespaces are nothing but the space before staring and space after ending of the string 
console.log(char1.slice(3,9)); // slice is nothing but used to extract the portion of the string 
console.log(char1.concat(char2)); //concact is the method used to join two strings 
console.log(char1.replaceAll("is", "are")); // 'is' is the search value where as 'are' is the replaced value in the string
console.log(char3.charAt(4)); //charAt(4) will show the character at index 3 


// Question:
//     prompt the user to enter their full name. Generate a username for them based on the input.
//     Start username with @, followed by their full name and ending with the full name length 


let input = prompt("Enter the name you want so that we can generate the username for you :");
let username = `@${input}${input.length}`;
console.log("The generated name is :", username);