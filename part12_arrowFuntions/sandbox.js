/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Arrow Functions
////////////////////////////////////////

//+++++++++++++++
// TOPIC HEADING
//+++++++++++++

/* 
Create a program using an arrow function to check if the number entered by the user is a prime number or not. 
This function should compute the result and return them to the function call. 
And, the results should be printed from outside the function.
*/

console.log("<------Problem Set------>");
console.log(` `);

let findPrime = (number) => {
  let result = true;
  for (let i = 2; i <= number; i++) {
    if (number % 2 === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const userValue = parseInt(prompt("Enter a number: "));
let checkResult = findPrime(userValue);
if(checkResult) {
    console.log("The number is prime.");
} else {
    console.log("The number is not prime.");
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(` `);
// console.log("<------Walkthru------>");
// console.log(` `);
