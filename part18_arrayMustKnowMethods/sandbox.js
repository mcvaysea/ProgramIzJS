/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// JavaScript Array Methods You Must Know
////////////////////////////////////////

//++++++++++++++++++++++++++++
// PROGRAMIZ Programming Task
//+++++++++++++++++++++++++++

/* 
Create an array containing: 
    ['I', 'Love', 'JavaScript']
        - Add the new value 'Programming' to the array.
        - Check if the array contains the text 'JavaScript' and return the statement 
            'You are doing great.  Keep Learning'
*/

// console.log("<------Problem Set 1------>");
// console.log(` `);

// const myArr1 = ["I", "Love", "JavaScript"];
// console.log(myArr1);

// myArr1.push("Programming");
// console.log(myArr1);

// let findMyArr1 = myArr1.includes("Love");
// console.log(findMyArr1);

// function findInArr(findIt) {
//   if (findIt === true) {
//     console.log("You are doing great, keep learning");
//   } else {
//     console.log("We didn't find your word but keep learning and you will succeed!");
//   }
// }

// findInArr(findMyArr1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//+++++++++++++++++
// PROGRAMIZ Quiz
//++++++++++++++++

// console.log(` `);
console.log("<------Walkthru------>");
console.log(` `);
const myMessage = ["JavaScript", "is", "really", "fun"];
console.log(myMessage);

myMessage.sort();
console.log(myMessage);

const myMessageResult = myMessage.slice(0, 1);
console.log(myMessageResult);
