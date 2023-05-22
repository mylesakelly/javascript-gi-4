// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot 
// unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. 
// If found in the array, return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. 
// Review your lesson on Arrays to aid in working through this problem. 




function findValuesIndex(arr, target) { //created a function caled findValuesIndex with the two parameters, arr and target
    return arr.indexOf(target); // the return value will find the index of the target value
  }

const arr = [4, 5, 6, 7, 0, 1, 2]; // created an array with some numbers to test the function
const target = 11; // declared the variable target. If the number that is currently the value of target is found in the array, the functiom will find the index. If it isn't -1 will be returned.
console.log(findValuesIndex(arr, target)); //running the function with the argumenets arr and target. Because the target value is 11, -1 will be printed. 
// if target value is changed to 4, 0 will be printed because arrays start at the index of 0.
