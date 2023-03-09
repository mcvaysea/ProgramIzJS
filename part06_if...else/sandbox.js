/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript if...else Statement
////////////////////////////////////////

//++++++++++++++++++++++++++
// PROGRAMIZ Code Challenge
//+++++++++++++++++++++++++

/* 
Create a program to check whether a number is positive, or negative, or zero.
    - If the number is positive, print 'The number is positive.'
    - If the number is negative, print 'The number is negative.'
    - If the number is zero, print 'The number is zero.'
*/

// console.log("<------Problem Set 1------>");
// console.log(` `);

// const num1 = prompt("Enter a number: ");

// if (num1 === 0) {
//   console.log(`The number ${num1} equals zero.`);
// } else if (num1 < 0) {
//   console.log(`The number ${num1} is a negative number.`);
// } else if (num1 > 0) {
//   console.log(`The number ${num1} is a positive number.`);
// } else {
//   console.log(`Your '${num1}' entry is not a valid number.`);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("<------PROGRAMIZ Challenge Question------>");
// console.log(` `);

/* 
What is the output of the program below?
*/

// const time = 19;

// if (time < 10) {
//   console.log("Good Morning");
// } else if (time <= 19) {
//   console.log("Good Evening");
// } else if (time < 22) {
//   console.log("Good Night");
// } else {
//   console.log("Invalid Time");
// }

//+++++++++++++++++++++
// if Statement
//++++++++++++++++++++
// console.log("<------Simple if Statement------>");
// console.log(` `);

// const userNum = 2;

// if (userNum > 0) {
//   console.log("The number is positive.");
// }

// console.log("The 'if' statement is easy");

//+++++++++++++++++++++
// if...else Statement
//++++++++++++++++++++
// console.log("<------if...else Statement------>");
// console.log(` `);

// const number = -10;

// if (number > 0) {
//     console.log("The number " + number + " is positive.");
// }
// else {
//     console.log("The number " + number + " is negative.");
// }
// console.log("The 'if...else' statement is easy.");

//++++++++++++++++++++++++++
// if...else...if Statement
//+++++++++++++++++++++++++
// console.log("<------if...else...if Statement------>");
// console.log(` `);

// const number = 1;

// if (number > 0) {
//   console.log("The number " + number + " is positive.");
// } else if (number === 0) {
//   console.log("The number " + number + " is zero.");
// } else {
//   console.log("The number " + number + " is negative.");
// }
// console.log("The 'if...else...if' statement is easy.");

//++++++++++++++++++++++++++++
// nested if...else Statement
//+++++++++++++++++++++++++++
console.log("<------nested if...else Statement------>");
console.log(` `);

const number = -10;

if (number >= 0) {
  if (number === 0) {
    console.log("The number " + number + " is zero.");
  } else {
    console.log("The number " + number + " is positive.");
  }
} else {
  console.log("The number " + number + " is negative.");
}
console.log("The 'if...else...if' statement is easy.");
