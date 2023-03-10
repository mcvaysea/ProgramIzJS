/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript map, filter, reduce
////////////////////////////////////////

// console.log(`----------array refresher----------`);

// const myNumbers = [1, 2, 3, 4, 5];

// let squareArr = [];
// for (let i = 0; i < myNumbers.length; i++) {
//   squareArr.push(myNumbers[i] * myNumbers[i]);
// }

// console.log(myNumbers);
// console.log(squareArr);

//+++++++++++++++
// map() method
//+++++++++++++

// console.log(` `);
// console.log(`----------array map method----------`);

// const sqrReturn = myNumbers.map(function (myNumber) {
//   return myNumber * myNumber;
// });

// console.log(myNumbers);
// console.log(sqrReturn);
//////////////////////////////////////////////////////////////////////////////////
// console.log(` `);
// console.log(`----------map method to fullName----------`);

// const namesArr = ["James", "Marie", "Rose", "Emma"];

// console.log(namesArr);

// const fullNames = namesArr.map(function (elements) {
//   return elements + " Parker-Bowles";
// });

// console.log(fullNames);

//+++++++++++++++++
// filter() method
//+++++++++++++++

// console.log(` `);
// console.log(`----------array for-loop filter method----------`);

// const numsArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numsArrResult = [];

// for (let i = 0; i < numsArray1.length; i++) {
//   const lessThan3Arr = numsArray1[i];

//   if (lessThan3Arr < 6) {
//     numsArrResult.push(lessThan3Arr);
//   }
// }

// console.log(numsArrResult);

//////////////////////////////////////////////////////////////////////////////////

// console.log(` `);
// console.log(`----------array filter() method----------`);

// const lessThan3Club = numsArray1.filter(function (element) {
//   if (element < 7) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(lessThan3Club);

//////////////////////////////////////////////////////////////////////////////////

// console.log(` `);
// console.log(`----------array filter() arrow function----------`);

// const lessThan3Arrow = numsArray1.filter((element) => element < 3);
// console.log(lessThan3Arrow);

// console.log(` `);
// console.log(`------array filter() arrow function return even numbers------`);

// const lessThanEven = numsArray1.filter(function even(element) {
//   return element % 2 === 0;
// });
// console.log(lessThanEven);

// console.log(` `);
// console.log(`------array filter() arrow function return odd numbers------`);
// const lessThanOdd = numsArray1.filter(function even(element) {
//   return element % 2 !== 0;
// });

// console.log(lessThanOdd);


//+++++++++++++++++
// reduce() method
//+++++++++++++++

console.log(`------sum the elements in an array------`);
console.log(`------with for-loop------`);
const reduceForLoop = [1, 2, 3, 4, 5];

let sumOfNumbers = 0;
for (let i = 0; i < reduceForLoop.length; i++) {
  sumOfNumbers = sumOfNumbers + reduceForLoop[i];
}

console.log(sumOfNumbers);

console.log(` `);
console.log(`------with reduce() method------`);
const reduceArr = [4, 5, 6, 7, 8];

const sumOfArrNumbers = reduceArr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sumOfArrNumbers);

console.log(` `);
console.log(`------square the elements in an array------`);
console.log(`------with for-loop------`);
const reduceArr1 = [4, 5, 6, 7, 8];

let squares = [];
for (let i = 0; i < reduceArr1.length; i++) {
  squares.push(reduceArr1[i] * reduceArr1[i]);
}

console.log(squares);

console.log(` `);
console.log(`------with reduce() method------`);
const squares1 = reduceArr1.reduce(function (accumulator, currentValue) {
  accumulator.push(currentValue * currentValue);
  return accumulator;
}, []);

console.log(squares1);