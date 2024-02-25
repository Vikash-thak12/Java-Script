const arr = [1,2,3,4,5,6,7,8,9,10];

const newArr = arr.map( (item) => {
    return item + 10;
})

// console.log(newArr);

const secondArr = arr.map( (item) => {
    return item * 10;
}).map((item) => {
    return item + 2;
})
// In the above code there are two map first the map is going to return the value after mulfiply by  10 and then it will add 2

console.log(secondArr);

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// console.log(fruits)