const numbers = [1, 2, 3, 4, 5];

// Summing up all elements in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 5);

console.log(sum); // Output: 20


const course = [
    {
        course: "JS course",
        price: 2999
    },
    {
        course: "Python course",
        price: 999
    },
    {
        course: "Software course",
        price: 5999
    },
    {
        course: "Data Science course",
        price: 12999
    }
]


const newCourse = course.reduce( (acc, item) => {
    return acc + item.price;
},0);

console.log(newCourse);