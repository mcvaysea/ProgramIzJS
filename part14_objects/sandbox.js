/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Objects
////////////////////////////////////////

//+++++++++++++++
// TOPIC HEADING
//+++++++++++++

/* 
Create an object named student with keys of name, rollNo, totalMarks.  Give any value you desire and create 2 functions:
    - first function needs to print out the information about the student
    - second function needs to check if the student passed the exam or not
        *if the totalMarks score is greater than 40 print "You passed", else print "You failed."
*/

console.log("<------Problem Set 1------>");

const student = {
  name: "Joseph",
  rollNo: 73,
  totalMarks: 73,
};

const student2 = {
  name: "Franklin",
  rollNo: 53,
  totalMarks: 39,
};

console.log(student);
console.log(student2);

function listObjects(object) {
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
  }
  if (object.totalMarks > 40) {
    console.log("You passed.");
  } else {
    console.log("You did not pass.");
  }
}
console.log(`-----------first student---------`);
listObjects(student);
console.log(`-----------second student---------`);
listObjects(student2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(` `);
// console.log("<------PROGRAMIZ Question------>");

// const student4 = {
//   name: "Sarah",
//   class: 10,
// };

// console.log("the students name: " + student4.name);

// console.log(student4["name"]);

