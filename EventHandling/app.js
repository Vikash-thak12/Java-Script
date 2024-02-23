const a = prompt("Enter the first number you want:");
const b = prompt("Enter the second number you want:");
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Please enter the valid input:")
}
const sum = parseInt(a) + parseInt(b);

try {
    console.log("The sum of two number is:", sum+y);
} catch (error) {
    console.log("Error aaya be, chal bhaag yaha se:")
}
finally
{
    console.log("This is the final statement of this program whether there is error or not this statement will occurs when you are going to run the program:")
}