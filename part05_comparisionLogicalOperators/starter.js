
/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////
// JavaScript Comparison and Logical Operators
//////////////////////////////////////////////


//++++++++++++++++++++++
// Comparison Operators
//+++++++++++++++++++++

// let value1 = true;
// let value2 = false;

// console.log(value1);
// console.log(value2);

// console.log(typeof(value1));
// console.log(typeof(value2));

// console.log(" ");

// let value3 = 'true';
// let value4 = "false";

// console.log(value3);
// console.log(value4);

// console.log(typeof value3);
// console.log(typeof value4);


// console.log(8 > 5);
// console.log(3 > 5);

// console.log(3 < 5);
// console.log(5 < 5);

// console.log(5 <= 5);
// console.log(3 >= 4);


// console.log(5 == 5);
// console.log(3 == 4);
// console.log(6 !== 5);
// console.log(6 !== 6);
// console.log('5' == 5);
// console.log('5' === 5);


// const num1 = 5;
// const num2 = 9;


// const result0 = num1 < num2;
// console.log(result0);

// const result1 = num1 < 9;
// console.log(result1);



//+++++++++++++++++++++++++++++
// Logical Operators &&, ||, ! 
//++++++++++++++++++++++++++++

/*
&& And Operator (true if both operands are true)
|| Or Operator (true if either operands are true)
! Not Operator (true if the operand is false)
*/

const age = 18;
const height = 5.5;

console.log(`----&& result0----`);
let result0 = age >= 18 && height > 5 ;
console.log(result0);

console.log(`----&& result1----`);
let result1 = age >= 18 && height < 5;
console.log(result1);
console.log(" ");

console.log(`----|| result2----`);
let result2 = age >= 18 || height > 5;
console.log(result2);

console.log(`----|| result3----`);
let result3 = age >= 18 || height < 5;
console.log(result3);

console.log(`----|| result4----`);
let result4 = age < 18 || height < 5;
console.log(result4);
console.log(' ');

console.log(`----! result5----`);
let result5 = height > 5 ;
console.log(!result5);

console.log(`----! result6----`);
let result6 = height < 5;
console.log(!result6);
console.log(" ");

console.log(6 != 7);