/////////////////////////////////////////////////////////////
//////////////PROGRAMIZJavaScript Data Types/////////////////
///////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Data Types
////////////////////////////////////////

//+++++++++++++++++++
// JavaScript String
//+++++++++++++++++

/* 
In this tutorial, you will learn about the various data types available in JavaScript with the help of examples.

There are eight basic data types in JavaScript. They are:

Data Types	Description	Example
String	represents textual data	'hello', "hello world!" etc
Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.
BigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.
Boolean	Any of two values: true or false	true and false
undefined	a data type whose variable is not initialized	let a;
null	denotes a null value	let a = null;
Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');
Object	key-value pairs of collection of data	let student = { };

*/

// console.log("<------JavaScript String------>");
// console.log(` `);

// const name = 'ram';
// const name1 = "hari";
// const result = `The names are ${name} and ${name1}`;
// console.log(result);

//------------------------------------------------------------------------------

// console.log("<------JavaScript Number------>");
// console.log(` `);

// const number1 = 3;
// const number2 = 3.433;
// const number3 = 3e5;
// console.log(number1, number2, number3);

//------------------------------------------------------------------------------

// console.log("<------JavaScript Boolean------>");
// console.log(` `);

// const dataChecked = true;
// const valueCounted = false;
// console.log(dataChecked);
// console.log(valueCounted);

//------------------------------------------------------------------------------

// console.log("<------JavaScript Symbol------>");
// console.log(` `);

// const value1 = Symbol("hello");
// const value2 = Symbol('hello');

// console.log(value1);
// console.log(value2);

//------------------------------------------------------------------------------

// console.log("<------JavaScript Object------>");
// console.log(` `);

// const student1 = {
//     firstName: 'ram',
//     lastName: 'vishan',
//     class: 10
// };

// console.log(student1);
// console.log(student1.class.toString());

//------------------------------------------------------------------------------

console.log("<------JavaScript Type------>");
console.log(` `);

const name = 'ram';
console.log(`${name} is typeof ${typeof(name)}`);

const number1 = 5;
console.log(`${number1} is typeof ${typeof(number1)}`);

const valueChecked = true;
console.log(`${valueChecked} is typeof ${typeof(valueChecked)}`);

//------------------------------------------------------------------------------








