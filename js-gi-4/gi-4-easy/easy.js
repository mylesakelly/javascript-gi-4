// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

let num = [1,2,3]; // declared an array called num and set the value to 1, 2, 3

function calcAvg(num) { // created a function named calcAvg that takes in the parameter num
   for (let i = 0; i < num.length; i++) { // created a for loop inside of the function to iterate through the array and get the length
    result = (num[0] + num[1] + num[2]) / num.length; // created a variable called result that is set to an expression that adds each index in the array together and then divides them by the array length
   }
   return result; //return the value of the variable result
} 

console.log(calcAvg(num)); // called the function calcAvg and gave it the argument num so that the function is executed for the array num.