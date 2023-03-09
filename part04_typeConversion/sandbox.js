/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/* 
This page is a sandbox to practice, succeed and fail at writing code.  
The more you practice, the more you will be build your skills.
The more you build your skills the more condident you will become.
*/

/////////////////////////////////////////
// JavaScript Implicit Conversion
////////////////////////////////////////

//+++++++++++++++++++++++++++++++
// Implicit Conversion to String
//++++++++++++++++++++++++++++++

// console.log("<------Implicit Conversion to String------>");
// console.log(` `);

// let result;
// console.log(result);
// console.log(typeof result);
// console.log(` `);

// let result0 = "3" + 2;
// console.log(result0);
// console.log(typeof(result0));
// console.log(` `);

// let result1 = '3' + true;
// console.log(result1);
// console.log(typeof(result1));
// console.log(` `);

// let result2 = '3' + undefined;
// console.log(result2);
// console.log(typeof (result2));
// console.log(' ');

// let result3 = '3' + null;
// console.log(result3);
// console.log(typeof (result3));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("<------Implicit Conversion to Number------>");
// console.log(` `);

// let result0 = '4' - '2';
// console.log(result0);
// console.log(typeof(result0));
// console.log(" ");

// let result1 = '4' - 2;
// console.log(result1);
// console.log(typeof(result1));
// console.log(' ');

// let result2 = '4' * 2;
// console.log(result2);
// console.log(typeof(result2));
// console.log(' ');

// let result3 = '4' / 2;
// console.log(result3);
// console.log(typeof(result3));

// console.log("<------Non-numeric String Results to NaN------>");
// console.log(` `);

// let result = 'hello' - 'world';
// console.log(result);
// console.log(typeof(result));
// console.log(' ');

// let result1 = '4' - 'hello';
// console.log(result1);
// console.log(typeof(result1));
// console.log(' ');

// console.log("<------Implicit Boolean Conversion to Number------>");
// console.log(` `);

// if boolean is used, true is 1, false is 0

// let result = "4" - true;
// console.log(result);
// console.log(typeof result);
// console.log(" ");

// let result1 = 4 + true;
// console.log(result1);
// console.log(typeof result1);
// console.log(" ");

// let result2 = 4 + false;
// console.log(result2);
// console.log(typeof result2);
// console.log(" ");


/* 
const array1 = [23, 4, 12, 48, 10];
// console.log(array1);
// console.log(typeof array1);



function listArray(arr1) {
  let i = 0;
  while (i < arr1.length) {
    //console.log(arr1[i].toString());
    i++;
    return arr1[i].toString();
  }
}

//listArray(array1);

// let resultArr = listArray(array1);
// array2 = array2.push(resultArr);

//console.log(resultArr);

let array2 = new Array((array1).toString());
console.log(array2);
console.log(typeof(array2));
 */



console.log(
  "<------numbers from strings using parseInt(),parseFloat()------>");
console.log(` `);

let result0 = parseInt("20.01");
console.log(result0);
console.log(typeof(result0));
console.log(" ");

let result1 = parseFloat("20.01");
console.log(result1);
console.log(typeof(result1));
console.log(' ');

let result2 = +"20.01";
console.log(result2);
console.log(typeof(result2));
console.log(" ");

let result3 = Math.floor("20.02");
console.log(result3);
console.log(typeof(result3));

















