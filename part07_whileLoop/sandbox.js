/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript while and do...while Loop
////////////////////////////////////////

//+++++++++++++++++++++++++++++
// PROGRAMIZ Program Challenge
//++++++++++++++++++++++++++++

/* 
Use the while loop to print the multiplication table for a given user number.
But this time, print the multiplication table in reverse from 10 down to 1 or 0.
*/

// console.log("<------While Problem Set------>");
// console.log(` `);
// let number = parseInt(prompt("Enter a number: "));
// let count = 10;
// let product = number * count;

// while (count >= 0) {
//   product = number * count;
//   console.log(`${number} * ${count} = ${product}`);
//   --count;
// }
// console.log("--------\nEnd Of While countDown Loop\n--------");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(` `);
// console.log("<------Do-While Problem Set------>");
// console.log(` `);

// let number = parseInt(prompt("Enter a number: "));
// let count = 10;
// let product = number * count;

// do {
//   product = number * count;
//   console.log(`${number} * ${count} = ${product}`);
//   --count;
// } while (count >= 0);
// console.log("--------\nEnd Of Do-While countDown Loop\n--------");



let i = 15;
let n = 0;

do {
    console.log(n);
    n++;
} while (n <= i);
console.log(`----------\nEnd Of Do-Loop\n----------`);