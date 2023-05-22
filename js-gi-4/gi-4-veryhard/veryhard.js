// *VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  
// Do not have anyone give you the answer or solve this problem for you. 

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1



//HOW I WOULD WORK THIS QUESTION

// create a function called fewestCoins with the parameter coin
//since the input is an array I would create a for loop that iterates through the length of the array so that it can evaluate each number of the array
//then i would use an if else statement that evaluates if the coins make up the amount of money then it calculates the sum of the money with the fewest coins
// the else statement would return -1

//Pseudo code of problem

function fewestCoins (coins, amount) {

    for (let i = 0; i < coins.length; i++) {
        if (amount == coins.min() + coins.max()) {
            return amount;
                    // I want to grab the minimum amount and the maximum amounts to calculate the amount 
}  else {
    return -1
    // I want the function to return -1 if the amount cannot be calculated with the coins amount available
}
}
}
console.log(fewestCoins([1,2,5], 11));

