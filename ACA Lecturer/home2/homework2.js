// 1. Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even, and print 

// for (i = 0; i <= 15; i++){
//   if (i % 2 ===0){
//    console.log(`${i} is even`)
//  }else {
//    console.log(`${i} is odd`)
//   }
// }

// 2. Write a JavaScript program which iterates the integers from 1 to 60. 
// But for multiples of three print "Fizz" instead of the number and 
// for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// for(i = 1; i <= 60; i++){
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log('fizzbuzz')
//   }else if(i % 3 === 0){
//     console.log('fizz')
//   }else if(i % 5 === 0){
//     console.log('buzz')
//   }else{
//     console.log(i)
//   }
// }

// 3. Write a code to print a pattern using loop.


// let a = ''
// let b = ' '
// for(i = 1; i <= 8; i++){
//      a = a + i + b 
//     console.log(a)
// }

// 4. Write a code to find count of digits in n number


// let n = 3476
// let i = 0
//  while(n>0){
//     let a = n % 10 
//     n = (n - a)/10
//     i++
//  }console.log(i)

 

//5. Given n number. Write a program witch calculate sum of 1 - n numbers.

// let n = 100
// let sum = 0
// for (i = 1; i<=100; i++){
//     sum = sum + i
// }console.log(sum)


// 6. Insert n digit and n number. Check whether the digits contains in the number or not.


// 5, 2463 - "No"
// 4, 6 - "No"
// 8, 45689 - "Yes"


// let tiv = 2463 
// let tvanshan = 5
// let payman = false
// for (i = 0; i < 4; i++) {
//      let mnacord = tiv % 10
//      tiv = (tiv - mnacord) / 10
//     if(tvanshan === mnacord ) {
//         payman = true 
//         break
//     }
// }
// if(payman === true) {
//     console.log('yes')
// }else{
//     console.log('no')
// }


// 7. Write a code to calculate the sum of digits in n number

// 2 - 2
// 25 - 7
// 895796 - 44

// let n = 895796
// let sum = 0

// for (i = 0; i < 6; i++){
//      let a = n % 10 
//      n = (n - a) / 10
//      sum = sum + a
// } console.log(sum)


// let value = 58;
// let sum = 0;

// while (value > 1) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }
// console.log(sum);