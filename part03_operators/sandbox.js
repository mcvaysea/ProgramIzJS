/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// Practical Examples
////////////////////////////////////////

//++++++++++++++++++
// Percent Discount
//+++++++++++++++++

/* 
Suppose you are a university student and you need to pay $4535 tuition for the next semester.
The college is giving a discount of 10% on early payment of tuition.
You decide it's a good offer and want to pay, how much is the tuition if you pay with the early discount?
*/

// console.log("<------Problem Set 1------>");

// const initialFee = 4535;
// const discountPercent = 10;

// const discountAmount = discountPercent/100 * initialFee;

// const finalFee = initialFee - discountAmount;

// console.log(`Your discounted price is $${finalFee.toFixed(2)}`);

// //////////////////////////////////////////////////////////////////

/* 
You go on a run every other day.  You cover about 5 kilometers per day.
Now you want to conver that distance from kilometers to miles.
How many miles have you covered?
*/

// console.log(` `);
// console.log("<------Kilometers to Miles Conversion------>");
// console.log(` `);

// const kmDistance = 5;
// const convertRatio = 0.621371;

// const milesDistance = kmDistance * convertRatio;

// console.log(`You covered ${4 * milesDistance.toFixed(2)} miles over 4 days`);

/* 
How would you create a formula to convert celsius to fahrenheit?
*/

// console.log("<------Celcius to Fahrenheit Conversion------>");
// console.log(` `);

// // let celsiusDegree = 32;
// // const celsiusToFahrenheit = ((celsiusDegree * 1.8) + 32);

// // console.log(celsiusToFahrenheit);

// function celsiusToFahrenheit(celsiusDegree) {
//   console.log(
//     `${celsiusDegree} degrees celsius is ${(celsiusDegree * 1.8 + 32).toFixed(
//       1
//     )} degrees Fahrenheit`
//   );
// }

// celsiusToFahrenheit(32);
// celsiusToFahrenheit(44);
// celsiusToFahrenheit(4);

//------------------------------------
// Arithmetic operators in JavaScript
//-----------------------------------
// let x = 5;
// let y = 3;

// console.log(`x + y = ${x + y}`);
// console.log(`x - y = ${x - y}`);
// console.log(`x * y = ${x * y}`);
// console.log(`x / y = ${(x / y).toFixed(2)}`);
// console.log(`x % y = ${x % y}`);
// console.log(`x as ++x is ${++x}`);
// console.log(`x as x++ is ${x++} but is really 7`);
// console.log(`See? x is now ${x}`);
// console.log(`y --y is ${--y}`);
// console.log(`y y-- is ${y--} but it's really 1`);
// console.log(`See? y is now ${y}`);

//------------------------------------
// JavaScript Comparison Operators
//-----------------------------------

const a = 3,
  b = 2;
// console.log(a > b);
// console.log(a < b);
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a <= b);
// console.log(a >= b);

console.log(`<------------------>`);

// console.log(2 == 2);
// console.log(2 == '2');
// console.log(2 === '2');

// console.log(3 != 2);
// console.log('hello' != 'hello');
// console.log('Hello' != 'hello');
// console.log(2 !== '2');

console.log(`<------------------>`);

// const x = 5,
//   y = 3;

// console.log((x < 6) && (y > 2));
// console.log((x < 6) || (y > 2));
// console.log((x < 6) && (y > 22));
// console.log((x < 6) || (y > 22));


console.log(`<------------------>`);

// concatenation operator
console.log('hello' + ' ' + 'world');

let varA = 'JavaScript';

varA += ' tutorial';
console.log(varA);










