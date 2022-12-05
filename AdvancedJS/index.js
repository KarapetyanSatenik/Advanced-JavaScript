// // 1.Check whether a given number is _negative_.
// // Print **true**, if it is negative, print **false** otherwise.
// // Solution:
// let x = 15;
// let message;
// if(x > 0) {
//     message = false
// }else{
//     message = true
// }
//  console.log(message); // false

// // 2.Swap 2 variables, without using any other variables.
// // Solution:
// let a = 2;
// let b = 5;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a=" + a , "b=" + b); // a= 5 , b= 2

// // 3. Given two numbers print 0 if one of them is divisible by the other
// // one, otherwise print 1.
//  Solution:
// let a = 30;
// let b = 6;
// let message;
// if(a % b == 0 || b % a == 0) {
//     message = 0;
// }else{
//     message = 1;
// }
// console.log(message); //  0
// // 4. Given a number. Print true if the number is even and false if it is
// // odd.
// // Solution:
// let num = 1023;
// let message;
// if(num % 2){
//     message = false;
// }else {
//     message = true;
// }
// console.log(message);
// // 5. Given three sides of a triangle. Check whether the triangle is valid
// // or not. Print true if it is valid and false otherwise. (Triangle is valid if
// // the sum of its two sides are greater than the third side).

// // Solution:
// let a = 6;
// let b = 7;
// let c = 8;
// let message;
// if(a + b > c && c + b > a && a + c > b){
//     message = true;
// }else {
//     message = false;
// }
// console.log(message);

// // 6. Given number n (positive integer). Print the value of n + 2n + 3n (not
// // multiplication).
// // Solution:
// let n = 5;
// console.log(n + (+("2" + n)) + (+("3" + n))); // 65

// let n = 6
// let num = String(n);
// n1 =  2 * num;
// n2 =  3 * num;
// number = n + n1 + n2;
// console.log(number);
