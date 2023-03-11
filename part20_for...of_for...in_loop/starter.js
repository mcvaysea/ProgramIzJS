/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript for..of and for..in Loop
////////////////////////////////////////

//+++++++++++++++
// For...Of Loop
//+++++++++++++
// console.log(`------for...of loop through an array------`);
// const forArray = [16, 25, 36, 49, 64];

// for (const elements of forArray) {
//   console.log(elements);
// }

// console.log(`------for...of with a string------`);
// const stringName = "Programiz";

// for (let i of stringName) {
//   console.log(i);
// }

// console.log(`------for...of with an array------`);
// const nameArray = ["Programiz", "JavaScript", "Python"];

// for (let i of nameArray) {
//   console.log(i);
// }

//++++++++++++++++++++++++++++++++
// For...Of Loop iterate and concat
//+++++++++++++++++++++++++++++++
// console.log(" ");
// console.log(`------loop through and concat------`);
// const famMembers = ["Thomas", "John", "Sara", "Jack"];

// for (const names of famMembers) {
//   //   console.log(names + ' ' + 'Smith');
//   //console.log(`OR you can do---`);
//   let fullNames = `${names} Smith`;
//   console.log(fullNames);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++
// For...Of Loop iterate and concat with function
//++++++++++++++++++++++++++++++++++++++++++++++
// console.log(" ");
// console.log(`------loop through and concat with a function------`);

// const forNamesArr = ["Thomas", "John", "Sara", "Jack"];
// const moreNamesArr = ["Peter", "Michael", "Adam", "Mary"];

// function fullName(arrNames) {
//   for (const elements of arrNames) {
//     let fullNames = `${elements} Smith`;
//     console.log(fullNames);
//   }
// }

// fullName(forNamesArr);
// fullName(moreNamesArr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//+++++++++++++++
// For...In Loop
//+++++++++++++
console.log(`------student keys------`);
const students = {
  name: "Lester",
  grade: 8,
  age: 14,
};

for (const key in students) {
  console.log(key);
}

console.log(` `);
console.log(`------student key values------`);
const students1 = {
    name: "Lester",
    grade: 8,
    age: 14
};


for (const key in students1) {
    const value = students1[key];
    console.log(value);
};


console.log(` `);
console.log(`------student concat with key values------`);
const students2 = {
    name: "Lester",
    grade: 8,
    age: 14
};


for (const key in students2) {
    const value = students2[key];
    console.log(`Student ${key} => ${value}`);
};


//+++++++++++++++++++++++
// For...In Loop changes
//+++++++++++++++++++++

console.log(` `);
console.log(`------iterate and add a value------`);
const employee = {
  Jack: 24000,
  Paul: 34000,
  Monica: 55000,
};

for (const i in employee) {
  let salaryBonus = employee[i] + 5000;
  console.log(`${i}: ${salaryBonus}`);
}





