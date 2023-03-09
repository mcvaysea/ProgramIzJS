/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Arrow Functions
////////////////////////////////////////

//+++++++++++++++++
// Arrow Functions
//+++++++++++++++++

// ----Regular function for greeting
// function greet() {
//   console.log("Good Morning");
// }
// greet();

// // ----Arrow function for same greeting
// const freet = () => console.log("Good Afternoon");
// freet();

// // ----Arrow function with multiple code lines
// const dreet = () => {
//   console.log(`----------------`);
//   console.log("Good Evening");
//   console.log("How was your today?");
// };
// dreet();

//++++++++++++++++++++++++++++++
// Arrow Functions w/Parameters
//+++++++++++++++++++++++++++++

// const addNums = (a, b) => {
//   console.log(a + b);
// };

// addNums(5, 9);
// console.log("The sum is " + addNums(5, 9)); // <--THIS DOESN'T WORK BECAUSE THE FUNCTION ISN'T RETURNING ANYTHING BUT A CONSOLE LOG

// result = addNums(5, 10);
// console.log("The sum is " + result); // <--EVEN IF YOU ASSIGN IT TO A VARIABLE

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const add2Nums = (a, b) => {
//   return a + b;                 // <----THE RESULT IS RETURNED FROM THE FUNCTION
// };

// console.log(`The sum is ${add2Nums(5, 9)}`);  // <---NOW IT CAN BE USED IN SOMETHING LIKE A CONSOLE LOG

// const square = (a) => console.log(a ** 2);
// square(5);

//++++++++++++++++++++++++++++++
// Arrow Functions with a RETURN
//+++++++++++++++++++++++++++++

// const addNumbers = (a, b) => {
//   const result = a + b;
//   return result;
// };

// console.log(addNumbers(5, 9));

// let output = addNumbers(5, 9);
// console.log(`The output is ${output}`);
