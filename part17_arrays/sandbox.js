/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Arrays
////////////////////////////////////////

//++++++++++++++++++++++++++++
// PROGRAMIZ Programming Task
//+++++++++++++++++++++++++++

/* 
Create an array named greet with values 'hello' and 'hi'.
    - Find the length of the array.
    - Add the element 'welcome' to the array.
    - Find the new length of the array.
*/

// console.log("<------Programming Task------>");
// console.log(` `);

// const greet = ['hello', 'hi'];

// console.log(greet);
// console.log(greet.length);

// greet.push('welcome');
// console.log(greet);
// console.log(greet.length);

//++++++++++++++++++++++++++++
// PROGRAMIZ Question
//+++++++++++++++++++++++++++
let routine = ["eat", "sleep"];
console.log(routine);

routine.push("exercise");
console.log(routine);

routine[4] = "work";
console.log(routine);

console.log(routine[3]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(` `);
// console.log("<------JS Arrays Sandbox------>");

// console.log(`-----------create array------------`);
// const carArray = ["Saab", "Volvo", "BMW"];
// console.log(carArray);

// console.log(`-----------change array element------------`);
// carArray[0] = "Lotus";
// console.log(carArray);

// console.log(`-----------add array element------------`);
// carArray.push("Audi");
// console.log(carArray);

// console.log(`-----------redeclare array using VAR------------`);
/*
    You can redeclare Arrays using VAR keyword but you cannot with CONST
    This is because const is BLOCK scoped.  
    Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed.
    Redeclaring an array with const, in another scope, or in another block, is allowed.
*/
// var carArr1 = ["Volvo", "BMW"];
// console.log(carArr1);

// var carArr1 = ["Toyota", "BMW"];
// console.log(carArr1);

// carArr1 = ["Mercedes", "Audi"];
// console.log(carArr1);


/* 
let carsArray = [
  {
    color: "purple",
    type: "minivan",
    registration: "DMV11",
    capacity: "7",
  },
  {
    color: "red",
    type: "minivan",
    registration: "DMV211",
    capacity: "6",
  },
  {
    color: "blue",
    type: "sedan",
    registration: "DMV12",
    capacity: "5",
  },
  {
    color: "orange",
    type: "coupe",
    registration: "DMV43",
    capacity: "2",
  },
  {
    color: "red",
    type: "suv",
    registration: "DMV452",
    capacity: "6",
  },
  {
    color: "yellow",
    type: "coupe",
    registration: "DMV423",
    capacity: "2",
  },
  {
    color: "brown",
    type: "minivan",
    registration: "DMV223",
    capacity: "9",
  },
];

console.log(carsArray);


let cabrio = {
  color: "red",
  type: "cabrio",
  registration: "DMV52",
  capacity: "4",
};

let bluSuv =   {
    color: "blue",
    type: "suv",
    registration: "DMV621",
    capacity: "7"
  }

  let purpSedan =   {
    color: "purple",
    type: "sedan",
    registration: "DMV123",
    capacity: "4"
  }

carsArray.unshift(cabrio);
carsArray.push(bluSuv);
carsArray.splice(4, 0 , purpSedan);
console.log(carsArray);

console.log(`----------find 1st instance of a red car----------`);
let redCars = carsArray.find(carsArray => carsArray.color === 'red');
console.log(redCars);

console.log(`----------find a red suv----------`);
let redSuv = carsArray.find(carsArray => carsArray.type === 'suv' && carsArray.color === 'red');
console.log(redSuv);

console.log(`----------filter all instances of minivans----------`);
let miniVans = carsArray.filter(carsArray => carsArray.type === 'minivan');
console.log(miniVans); 
*/