const key = prompt("Enter the key you want to store in the key area:");
const value = prompt("Enter the value for the key so that we can store the value in the key:")

localStorage.setItem(key, value);