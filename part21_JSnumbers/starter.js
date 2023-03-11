
/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Number
////////////////////////////////////////


//++++++++++++++++++++++++
// JS Number as an object
//+++++++++++++++++++++++

// console.log(`------Numbers as an object------`);
// const a = 3;
// const b = 3.13;

// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);


// console.log(` `);
// console.log(`------number() function------`);
// const str1 = "23";
// console.log(str1);
// console.log(typeof str1);

// const num1 = Number(str1);
// console.log(num1);
// console.log(typeof num1);


// console.log(` `);
// console.log(`------number() function on boolean value TRUE------`);
// const bool1 = true;
// console.log(bool1);
// console.log(typeof bool1);

// const result1 = Number(bool1);
// console.log(result1);
// console.log(typeof result1);

// console.log(` `);
// console.log(`------number() function on boolean value FALSE------`);
// const bool2 = false;
// console.log(bool2);
// console.log(typeof bool2);

// const result2 = Number(bool2);
// console.log(result2);
// console.log(typeof result2);


////////////////////////////////////////////////////////////////////////////////

//++++++++++++++++++++++++
// isInteger() method
//+++++++++++++++++++++++

// const numIs = 32;
// const resultIsInt = Number.isInteger(numIs);
// console.log(resultIsInt);


// const numIs1 = 32.3;
// const resultIsInt1 = Number.isInteger(numIs1);
// console.log(resultIsInt1);

////////////////////////////////////////////////////////////////////////////////

//++++++++++++++++++++++++++++++++++++
// parseInt() and parseFloat() method
//+++++++++++++++++++++++++++++++++++

// console.log(`------parseInt example------`);
// const numParseInt = "23";
// console.log(numParseInt);
// console.log(typeof numParseInt);

// const resultParseInt = Number.parseInt(numParseInt);
// console.log(resultParseInt);
// console.log(typeof resultParseInt);

// console.log(`------parseFloat example------`);
// const floatNum = "5.20392938";
// console.log(floatNum);
// console.log(typeof floatNum);

// const resultFloat = Number.parseFloat(floatNum);
// console.log(resultFloat);
// console.log(typeof resultFloat);

////////////////////////////////////////////////////////////////////////////////

//++++++++++++++++++++
// toFixed() method
//+++++++++++++++++++

console.log(`------toFixed() to limit decimal places------`);

const longFloatNum = 5.89530248;
console.log(longFloatNum);

const fixedNum0 = longFloatNum.toFixed(2);
console.log(fixedNum0);
const fixedNum1 = longFloatNum.toFixed(3);
console.log(fixedNum1);









