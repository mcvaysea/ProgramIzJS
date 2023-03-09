/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Functions
////////////////////////////////////////

//++++++++++++++++++++++++++++
// PROGRAMIZ Programming Task
//+++++++++++++++++++++++++++

/* 
Create a program that can tell us if someone is eligible to vote.
    - Create a function canVote that accepts the age of a person.
    - If the age is above 18, then return true else false.
    - Call the function for ages 17, 20 and 65 to verify if it is correctly working.
*/

// console.log("<------Problem Set 1------>");
// console.log(` `);

// function canVote(age) {
//     if (age >= 18){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(canVote(17));

// const result1 = canVote(18);
// const result2 = canVote(13);
// const result3 = canVote(54);

// console.log(result1);
// console.log(result2);
// console.log(result3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("<------greet elements in array function------>");
// console.log(` `);

// const nameArray = ["Thomas", "Phil", "Candice", "Rhonda", "Samuel", 'Timothy'];

// function greet(namesArray) {
//   for (const element of namesArray) {
//     console.log(`Hello there, ${element}`);
//   }
// }

// const nameArray2 = ["dog", "cat", "bird", "llama", "horse"];

// greet(nameArray);
// console.log(`--------------`);
// greet(nameArray2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("<------square a number function------>");
// function square(aNum) {
//   let result = aNum * aNum;
//   return result;
// }

// console.log(square(7));

// console.log(` `);
// console.log("<------sum two numbers function------>");

// function add(a, b) {
//     let sum = a + b;
//     console.log(a + b);
// }

// add(14, 6);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("<------JS built-in function------>");

// console.log(Math.sqrt(9));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("<------JS regular add function // no return------>");

// let a = parseFloat(prompt("Enter 1st number:"));
// let b = parseFloat(prompt("Enter 2nd number:"));
// let a = 4;
// let b = 6;

// function addNums(a, b) {
//   console.log(a + b);
// }

// addNums(5, 10);
// addNums(3, 4);
// addNums(2, 9);

// console.log("<------JS regular add function with a return------>");
// function add2Nums(a, b) {
//   return a + b;
// }

// console.log(add2Nums(a, b));

// console.log(`The sum of your numbers is ${add2Nums(a, b)}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("<------Function as Expressions------>");

// // ---let the function to square a number to equal thre variable 'sqr' and accept an aurgument
// let sqr = function(num) {
//   return num * num;
// };
// console.log(sqr(4));

// // ---assign the sqr function to another variable for use
// let y = sqr(3);
// console.log(y);
