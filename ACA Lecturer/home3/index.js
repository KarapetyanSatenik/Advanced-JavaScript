
// Given an array of integers, return a new array with each value doubled.
let arr2 = []
// let arr = [1, 5, 6, -5, 30, 10, 25]
for(let i = 0; i < arr.length; i++){
   arr2.push (arr.push = arr[i] * 2);  
    
}
console.log(arr2);

// Write a function which receives an array and a number as arguments and returns a new array
// from the elements of the given array which are larger than the given number
// Input [10,25,16,-5,30,15,24],16  Output[25,30,24]

// let arr = [1, 1, 2, -3, 0, 8, 4, 0];
function givenArr(arr, number) {
  let newArr = [];
  for (let i of arr) {
    if (i > number) {
      newArr.push(i);
    }
  }
  if (newArr.length === 0) {
    newArr = "[] such values do not exist";
  }
  return newArr;
}
// console.log(givenArr(arr, 6));

// Given sorted array of integers,write a function that returns the index of the given number
// Input [1,2,5,8,7] , 8  Output 3

// let arr = [1, 2, 5, 8, 7];
function indexOf(arr, n) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

// console.log(indexOf(arr, 8));

// Given a sentence with missing words and an array of words.
// Replace all '_' in a sentence with the words from the array

let sentence = '_, we have a _';  
// let arr = ['Houston', 'Problem'];
for(let i of arr) {
    sentence = sentence.replace('_', i)
} console.log(sentence)
  
let arr = [];
let str = '';
console.log(Boolean(arr))//true
console.log(Boolean(str))//false
console.log(arr == str)//true



let text = "_, we have a _" 
// let arr = ["Houston", "problem"]
let output = ""
for (let i = 0; i < text.length; i++) {
        if(text[i] === "_" ) {
            output += arr[0]
            arr.shift()
        } 
        else{
            output +=   text[i]
        }
    }   

console.log(output);