/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript if...else Statement
////////////////////////////////////////

//++++++++++++++++
// if Statement
//+++++++++++++++

/*
IF STATEMENT SYNTAX

if (test_condition) {
    // if statement body;
}
*/

// const score = parseInt(prompt("Enter your grades: "));

// if (score >= 50) {
//     console.log("You have passed the exam.");
//     console.log("Congratulations");
// }

// if (score < 50) {
//     console.log("Sorry, you failed your exam.");
// }

//+++++++++++++++++++++
// if...else Statement
//++++++++++++++++++++

/*
IF...ELSE STATEMENT SYNTAX

if (test_condition) {
    // run code inside this if block;
}
else {
    // run code inside this else block
}
*/

// const score = 50;

// if (score >= 50) {
//     console.log("You have passed the exam.");
//     console.log("Congratulations");
// }
// else {
//     console.log("Sorry, you failed your exam.");
// }

//+++++++++++++++++++++++++++++++
// if...else if...else Statement
//++++++++++++++++++++++++++++++

/*
IF...ELSE IF...ELSE STATEMENT SYNTAX

if (test_condition) {
    // run code inside this if block;
}
else if (other_test_condition) {
    //run code inside this if..else block;
}
else if (other_test_condition2 -- if needed) {
    //run code inside this if...else block;
}
else {
    // run code inside this else block
}
*/

// const score = 100;

// if (score > 100) {
//     console.log("The grade entered is greater than 100.");
// }
// else if (score < 0) {
//     console.log("That is not a valid grade entry.");
// }
// else if (score >= 50) {
//     console.log("You have passed the exam.");
//     console.log("Congratulations");
// }
// else {
//     console.log("Sorry, you failed your exam.");
// }

const score = 110;

if (score > 100 || score < 0) {
  console.log("That is not a valid grade entry.");
} else if (score >= 50) {
  console.log("You have passed the exam.");
  console.log("Congratulations");
} else {
  console.log("Sorry, you failed your exam.");
}
