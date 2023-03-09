/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Strings
////////////////////////////////////////

//+++++++++++++++
// JS strings
//+++++++++++++

// // ---Regular string expression
// const stringLiteral = "JavaScript is getting more fun";
// console.log(stringLiteral);
// console.log(typeof stringLiteral);

// console.log(`--------------------------------`);

// // ---Template string expression
// const templateString = `JavaScript is getting more fun`;
// console.log(templateString);
// console.log(typeof templateString);

// const templateAge = 52;
// const templateTextAge = `I am ${templateAge} years old`;
// console.log(templateTextAge);

//+++++++++++++++++++++++++
// Access String Characters
//++++++++++++++++++++++++
const helloText = "Hello";

console.log(helloText.length);
console.log(helloText[0]);
console.log(helloText[1]);
console.log(helloText[2]);
console.log(helloText[3]);
console.log(helloText[4]);

console.log(helloText.split(""));

//+++++++++++++++++++++++++
// charAt() method
//++++++++++++++++++++++++
const charAtText = "Hello";

console.log(charAtText.charAt(0));
console.log(charAtText.charAt(1));
console.log(charAtText.charAt(2));
console.log(charAtText.charAt(3));
console.log(charAtText.charAt(4));

console.log(charAtText.charAt());


//+++++++++++++++++++++++++
// string length method
//++++++++++++++++++++++++
const textLength = "Hello";
const result = textLength.length;

console.log(textLength.length);
console.log(result);


//+++++++++++++++++++++++++
// string length method
//++++++++++++++++++++++++
const str1 = "HELLO";
const str2 = "hello";
const str3 = 'HELLO';

console.log(str1 === str2);
console.log(str1 === str3);


//+++++++++++++++++++++++++
// multi-line string 
//++++++++++++++++++++++++
console.log(`-----------Long message-------------`);
const longMessage =
  "Hello everyone. Welcome to our JavaScript tutorial. In this tutorial, you will learn about JavaSCript in a fun and easy way.";

console.log(longMessage);

console.log(`---------Same Long message more readable---------------`);
const longReadableMessage =
  "Hello everyone. \
Welcome to our JavaScript tutorial. \
In this tutorial, you will learn about JavaSCript in a fun and easy way.";
console.log(longReadableMessage);

console.log(`----------Long message with line breaks--------------`);
const longCutupMessage =
  "Hello everyone. \nWelcome to our JavaScript tutorial. \nIn this tutorial, you will learn about JavaSCript in a fun and easy way.";

console.log(longCutupMessage);

