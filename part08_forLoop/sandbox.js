/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript for loop
////////////////////////////////////////

//++++++++++++++++++++++++++
// PROGRAMIZ Code Challenge
//+++++++++++++++++++++++++

/* 
Use a for loop to pring all the even numbers between 1 and 100.
*/

// console.log("<------Problem Set 1------>");
// console.log(` `);

// let number = 100;

// for (count = 1; count <= number; count++) {
//   if (count % 2 == 0) {
//     console.log(count);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//++++++++++++++++++++++++++
// for...of Loops
//+++++++++++++++++++++++++
console.log("<------for...of with Arrays------>");
console.log(` `);

const students = ["john", "sara", "jack"];

for (let items of students) {
    console.log((items[0]).toUpperCase());
    console.log(items);
}

console.log(` `);
console.log("<------for...of with Strings------>");
console.log(` `);

const string = 'this is string code';

for (let i of string) {
    console.log(i);
}