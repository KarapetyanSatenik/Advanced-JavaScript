let n =  7; 
console.log(+`${n}${2*n}${3*n}`);


// 1. Check whether a given number is _negative_.
// Print **true**, if it is negative, print **false** otherwise

// let num = -5
// if(num < 0  ){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// 2. Swap 2 variables, without using any other variables.

// let a = 100
// let b = 200

// a = a + b;
// b = a - b; 
// a = a - b; 

// console.log(a , b);


// 3. Given two numbers print 0 if one of them is divisible by the other one, otherwise print 1

// const a = 7
// const b = 14

// if(a % b === 0 || b % a === 0){
//     console.log(0);
// }else{
//     console.log(1)
// }

// 4. Given a number. Print true if the number is even and false if it is odd

// let a = 14

// if(a % 2 === 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// 5. Given three sides of a triangle. Check whether the triangle is valid or not. Print true if it is valid and false otherwise. (Triangle is valid if the sum of its two sides are greater than the third side)

// let x = 3
// let y = 5
// let z = 7

// if(x + y > z && z + y > x && x + z > y){
//     console.log(true)
// }else{
//     console.log(false)
// }

// 6. Given number n (positive integer). Print the value of n + 2n + 3n 
// (not multiplication).

// let n = 3
// let m = n.toString() + n * 2 + n * 3
// console.log(m)

console.log(3|| 3 && 0 || 5 && NaN || false ); 3