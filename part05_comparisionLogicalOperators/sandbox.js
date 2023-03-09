/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// Comparison and Logical Operators
////////////////////////////////////////

//++++++++++++++++++++++
// Comparison Operators
//+++++++++++++++++++++

/* 
Operator	Description	Example
==	Equal to: true if the operands are equal	5==5; //true
!=	Not equal to: true if the operands are not equal	5!=5; //false
===	Strict equal to: true if the operands are equal and of the same type	5==='5'; //false
!==	Strict not equal to: true if the operands are equal but of different type or not equal at all	5!=='5'; //true
>	Greater than: true if the left operand is greater than the right operand	3>2; //true
>=	Greater than or equal to: true if the left operand is greater than or equal to the right operand	3>=3; //true
<	Less than: true if the left operand is less than the right operand	3<2; //false
<=	Less than or equal to: true if the left operand is less than or equal to the right operand	2<=2; //true
*/

// console.log("<------Equal to Operator------>");
// const a = 5, b = 2, c = 'hello';

// console.log(a == 5);
// console.log(b == '2');
// console.log(c == 'Hello');

// console.log(` `);

// console.log("<------Not Equal to Operator------>");
// const a2 = 3, b2 = 'hello';

// console.log(a2 != 2);
// console.log(b2 != 'Hello');

// console.log(` `);

// console.log("<------Strict Equal to Operator------>");
// const strictA = 2;

// console.log(strictA === 2);
// console.log(strictA === '2');

// console.log(` `);

// console.log("<------Strict Equal to Operator------>");
// const a = 2, b = 'hello';

// console.log(a !== 2);
// console.log(a !== '2');
// console.log(b !== 'Hello');

// console.log(` `);

// console.log("<------Strict Equal to Operator------>");
// const a = true,
//   b = false;
// const c = 4;

// console.log(a && a);
// console.log(a && b);
// console.log(c > 2 && c < 2);
// console.log(c > 2 && b < 2);

// console.log(` `);

// console.log(` `);

console.log("<------Ternary Operator------>");
const age = 13;

age >= 18 ? console.log("Can vote") : console.log("Cannot vote");

let result = age >= 18 ? true : false;

console.log(result);

if (result == true) {
  console.log("Yippee");
} else {
  console.log("booo hisss");
}

if (age >= 18) {
  console.log("Wahooo");
} else {
  console.log("yuck...");
}

console.log(`<------Ternary Operator------>`);
let number = 0;

number >= 0
  ? console.log("Number is positive.")
  : console.log("Number is negative.");

// console.log(` `);

// console.log(` `);

// console.log(` `);

// console.log(` `);

// console.log(` `);
