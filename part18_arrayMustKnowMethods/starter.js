/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
// JavaScript Array Methods You Must Know
////////////////////////////////////////

//+++++++++++++++++
// JS Array Methods
//++++++++++++++++

//------------------------
// push / unshift Methods
//-----------------------
// console.log(`----------push and unshift----------`);
// const fruits = ["apple", "orange", "banana", "mango"];
// console.log(fruits);

// fruits.push("pineapple");
// console.log(fruits);

// fruits.unshift("kiwi");
// console.log(fruits);

//------------------------
// pop / shift Methods
//-----------------------
// console.log(`----------pop and shift----------`);
// const fruits2 = ["kiwi", "apple", "orange", "banana", "mango", "pineapple"];
// console.log(fruits2);

// fruits2.pop();
// console.log(fruits2);

// fruits2.shift();
// console.log(fruits2);

//------------------------
// concat() Method
//-----------------------
// console.log(`----------concat array----------`);
// const array1 = ["Hello", "World"];
// const array2 = ["JavaScript", "Programming"];

// console.log(array1);
// console.log(array2);
// const concatResult = array1.concat(array2);
// console.log(concatResult);

//------------------------
// sort() Method
//-----------------------
// console.log(`----------array sort----------`);
// const sortFruits = ["apple", "kiwi", "banana", "papaya", "orange", "mango"];

// console.log(sortFruits);

// sortFruits.sort();
// console.log(sortFruits);

//------------------------
// slice() Method
//-----------------------
// console.log(`----------array slice----------`);
// const arrSlice = ["Hello", "World", "JavaScript", "Programming"];

// console.log(arrSlice);

// const newArrSlice = arrSlice.slice(0, 2);
// console.log(newArrSlice);

// const newArrLastSlice = arrSlice.slice(2, 4);
// console.log(newArrLastSlice);

// const newArrToEnd = arrSlice.slice(1);
// console.log(newArrToEnd);


//------------------------
// splice() Method
//-----------------------
console.log(`----------array splice----------`);
const carsArray = ["Honda", "Toyota", "Kia", "Hyundai", "Subaru"];

console.log(carsArray);
carsArray.splice(0, 3, "Jeep");
console.log(carsArray);


//------------------------
// include() Method
//-----------------------
console.log(`----------array include----------`);
const myCarsArray = ["Honda", "Toyota", "Kia", "Hyundai", "Subaru", "BMW"];

console.log(myCarsArray);

const carResult = myCarsArray.includes("BMW");
const carResult1 = myCarsArray.includes("Lotus");
console.log(carResult);
console.log(carResult1);


//------------------------
// find() Method
//-----------------------
console.log(`----------array find----------`);
const myNums = [2, 4, 7, 9, 16, 12];

const numResults = myNums.find((element) => element > 5);

console.log(numResults);













