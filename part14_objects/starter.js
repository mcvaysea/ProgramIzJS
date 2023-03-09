/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Objects
////////////////////////////////////////

//+++++++++++++++
// JS Objects
//+++++++++++++

const onePerson = {
  name: "John",
  age: 20,
};

// console.log(person);
// console.log(typeof person);

// DOT NOTATION
console.log(`-----dot notation-----`);
console.log(onePerson.name);
console.log(onePerson.age);

// change object value
onePerson.age = 29;
console.log(onePerson.age);

// BRACKET NOTATION
console.log(`-----bracket notation-----`);
console.log(onePerson["name"]);
console.log(onePerson["age"]);

//++++++++++++++++++++
// JS Objects Methods
//+++++++++++++++++++
console.log(`------------------`);
console.log(`object method example`);
const personFunc = {
  name: "John",
  age: 20,
  greet: function () {
    console.log("Hello");
  },
};

personFunc.greet();
