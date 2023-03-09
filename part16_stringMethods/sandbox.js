/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// String Methods You Must know
////////////////////////////////////////

//+++++++++++++++
// TOPIC HEADING
//+++++++++++++

/* 
Create a string "I love Java". 
Convert the string to lowercase and check if the string contains 'java'
Replace 'java' with 'JavaScript'
*/

console.log("<------Problem Set 1------>");

let javaStr = "I Love JAVA";

const lowerResult = javaStr.toLowerCase();
const replaceResult = lowerResult.replace("java", "JavaScript");

console.log(javaStr.toLowerCase());
console.log(lowerResult);

console.log(lowerResult.replace("java", "JavaScript."));
console.log(replaceResult);

console.log(lowerResult.replace("java", "JavaScript. ").repeat(4));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(` `);
console.log("<------PROGRAMIZ Question------>");

const message = "JavaScript is fun";
const result = message.split(" ");

console.log(result);

const value = result[0].charAt(2);

console.log(value);
