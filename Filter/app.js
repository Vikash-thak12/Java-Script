const books = [
    { title: 'The Catcher in the Rye', genre: 'Fiction', publish: 1951, edition: 1 },
    { title: 'To Kill a Mockingbird', genre: 'Fiction', publish: 1960, edition: 1 },
    { title: '1984', genre: 'Dystopian Fiction', publish: 1949, edition: 1 },
    { title: 'The Great Gatsby', genre: 'Fiction', publish: 1925, edition: 1 },
    { title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'Fantasy', publish: 1997, edition: 1 },
    { title: 'The Hobbit', genre: 'Fantasy', publish: 1937, edition: 1 },
    { title: 'Pride and Prejudice', genre: 'Romance', publish: 1813, edition: 1 },
    { title: 'The Lord of the Rings', genre: 'Fantasy', publish: 1954, edition: 1 },
    { title: 'The Alchemist', genre: 'Fiction', publish: 1988, edition: 1 },
    { title: 'The Chronicles of Narnia', genre: 'Fantasy', publish: 1950, edition: 1 }
  ];
  

  const userChoice = books.filter( (item) => {
    return item.publish > 1980 && item.genre === "Fiction";
  })
  
  console.log(userChoice);

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const newArr = arr.filter( (num) => {
//     return num % 2 === 0;
// })
// const secondArr = arr.filter( (item) => {
//     return item > 4;
// })

// newNum = []
// arr.forEach( (num) => {
//     if(num % 2 === 0) {
//         newNum.push(num);
//     }
// })
// console.log(newNum)

// console.log(newArr);
// console.log(secondArr);