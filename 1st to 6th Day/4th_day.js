//Arrays: arrays is nothing but the collection of similar types of data 
let marks = [23, 45, 54, 67, 85];
console.log(marks);

let actors = ["salman khan", "Akshay kumar", "Prabhash", "Yash", "Ram Charan", "Jr. NTR"];
console.log(actors);     //array is also known as object as there will key and their values in the array key will be index and value you know:


console.log(actors[3]);

marks[3]= 88;  // indices the values, as you can see in the index value of 3 i gave 88 and there wil be array with these elements:
console.log(marks);

actors[2] = "Aamir Khan";
console.log(actors); // In this case it is not immutable as i'm replaceing a whole value 

let string = "TrollX";
console.log(string);

string[3]="Y";
console.log(string);   // will be immutable if you want to change one letter of a string




// Looping over an array:
let loop1 = ["Vikash", "Thakur", "mayank", "Gaurav", "sahil"];
for (let i in loop1)
{
    console.log("The values are :",i);  //will print the index values of the array
}

for (let i of loop1)
{
    console.log("The values are :",i);  //will print all the values of the array
}

//another way to print the values of the array 
for(let idx=0; idx<loop1.length; idx++)
{
    console.log(loop1[idx]);
}


// Question:
//   for a given array with the marks of the students: [85,97,44,37,76,60], Find the average marks of the entire class

let students = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (el of students)
{
    sum = sum + el;
}

console.log("The sum of all the marks :", sum);
let average = (sum/students.length);
console.log("The average marks of the entire class :", average);


// Question: 
//  for a given array of prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% off on them. Change the array to
//  store the final prices of the items after applying the offer

let items = [250, 645, 300, 900, 50];
for( i=0; i<items.length; i++)
{
    console.log(`Price at index ${i} : ${items[i]}`);
    let offer = items[i]/10;
    items[i] = items[i] - offer;
}

console.log("Price after discount is: ",items);




//Methods in arrays 
// push() -> to add item at the end 
// pop() -> delete from the end & return 
// toString() => convert array to sting 
// concat() -> to join multiple arrays & returns result 
// unshit() -> add to start (act as push )
// shift() -> delete from start & return ( act as pop )




let fooditems = ["Apple", "mango", "tomato", "brinjal", "Cauli"];
let gooditems = ["shoes", "Jacket", "watch", "Mobile", "Computer"];
let smallitems = ["pen", "scissors", "bottle", "lock"];
// console.log(fooditems);

// fooditems.push("Chillies");
// console.log(fooditems);

// fooditems.pop();
// console.log(fooditems);

// console.log(fooditems.toString());

// console.log(fooditems.concat(gooditems, smallitems));


smallitems.unshift("car");
console.log(smallitems);
gooditems.shift();



// slice()  -> returns the piece of the array (slice(startidx, endidx))   doesnot change in original array 
// splice()  -> change original array(add, remove, replace) splice(addidx, delcount, newel1) Change in oringial array 

let marvelheroes = ["IronMan", "Captain", "Thor", "Hulk", "Dr.Strange", "Spiederman"];
let dcheroes = ["batman", "superman", "wondarwoman", "flash", "robot"];


console.log(marvelheroes.slice(2,5));
console.log(dcheroes.splice(2,2));



// Quesiton: 
//  create an array to store companies -> "bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix";
//  a. remove the first company from the array 
//  b. remove uber and add ola in its place 
//  c. Add amazon in the end


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Neftflix"];
companies.shift();
console.log(companies);



companies.splice(1,1,"ola");
console.log(companies);


companies.push('Amazon');
console.log(companies);