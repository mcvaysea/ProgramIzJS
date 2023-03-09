
/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// JavaScript Variable Scope
////////////////////////////////////////


//++++++++++++++++++++++++++++
// local and global variables
//+++++++++++++++++++++++++++

// function addNums(n1, n2) {
//   let result = n1 + n2;         //<---THIS RESULT IS LOCAL SCOPED AND NOT AVAILABLE OUTSIDE THE FUNCTION
//   console.log(result);
// }

// let result = 123;       //<---THIS RESULT VARIABLE IS OUTSIDE THE FUNCTION AND IS GLOBALLY AVAILABLE
// addNums(4, 9);          //<---THIS RETURNS THE 'RESULT' FROM INSIDE THE FUNCITON (LOCAL SCOPE)
// console.log(result);    //<---THIS IS RETURNING THE RESULT FROM THE LET VARIABLE ABOVE (GLOBAL SCOPE)


//++++++++++++++++++++++++++++++++++++++++++++++++++
// to make a local variables globally accessable
//+++++++++++++++++++++++++++++++++++++++++++++++++
// let resultGlobal;               //<--GLOBAL INSTANCE OF resultGlobal

// function add2Nums(n1, n2) {
//   resultGlobal = n1 + n2;       //<---THERE IS NO LOCAL INSTANCE OF resultGlobal SO WE LOOK GLOBALLY AND TAKE THAT INSTANCE
//   console.log(resultGlobal);
// }

// add2Nums(4, 9);
// console.log(resultGlobal);      //<---NOW resultGlobal IS AVAILABLE OUTSIDE THE LOCAL SCOPE OF THE FUNCTION BECAUSE IT STARTED AS GLOBAL


//+++++++++++++++++++
// why this changes
//++++++++++++++++++
// let message = "Hello";          //<---INITIALLY SET TO 'Hello'

// function changeGreet() {
//   message = "How are you?";     //<---THIS FUNCTION CHANGES THE GLOBAL VARIABLE MESSAGE TO 'How are you?'
// }

// console.log(message);           //<---STILL 'Hello' BECAUSE THE FUNTION HASN'T BEEN CALLED YET
// changeGreet();                  //<---FUNCTION IS CALLED SO NOW THE message VARIABLE IS CHANGED TO 'How are you?'
// console.log(message);           //<---message VARIABLE IS NOT CHANGED FROM THE FUNCTION TO 'How are you?'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//++++++++++++++++++++++++++++
// block scoped variables
//+++++++++++++++++++++++++++

// const addNumbers2 = (n1, n2) => {
//   let result = n1 + n2;
//   console.log(result);

//   if (result > 10) {
//     let result1 = "Positive";
//     console.log(result1);
//   }
//   //console.log(result1);             //<---THIS WILL FAIL BECAUSE result1 IS NOT ACCESSIBLE OUTSIDE THE CODE BLOCK
// };                                  //<---THIS IS BECAUSE LET IS BLOCK SCOPED, IF YOU CHANGE LET TO VAR INSIDE THE BLOCK
//                                     //<---VAR IS NOT BLOCK SCOPE SO IT WILL BE AVAILABLE OUTISDE THE CODE BLOCK
// addNumbers2(4, 9);



// const addNumbers3 = (n1, n2) => {
//   let result = n1 + n2;
//   console.log(result);

//   if (result > 10) {
//     var result1 = "Positive";
//     console.log(result1);
//   }
//   console.log(result1 + " from outside the block scope");         //<---THIS DID NOT FAIL BECAUSE result1 IS NO LONGER BLOCK SCOPED;
// };                                                              //<---VAR IS NOT BLOCK SCOPE SO IT WILL BE AVAILABLE OUTISDE THE CODE BLOCK
// addNumbers3(4, 9);

