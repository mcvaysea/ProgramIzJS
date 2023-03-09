/////////////////////////////////////////////////////////////////////////
//////////////PROGRAMIZ JavaScript for Beginners Course/////////////////
///////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
// String Methods You Must know
////////////////////////////////////////

//++++++++++++++++++++++
// toUpperCase() method
//+++++++++++++++++++++

const upperText = "I like javascript";
const resultUpper = upperText.toUpperCase();

console.log(resultUpper);



//++++++++++++++++++++++
// toLowerCase() method
//+++++++++++++++++++++

const lowerText = "I AM LEARNING JAVASCRIPT";
const resultLower = lowerText.toLowerCase();

console.log(resultLower);


//++++++++++++++++++++
// concate() method
//+++++++++++++++++++

const str1 = "JavaScript";
const str2 = "Programming";

const resultConCat = str1.concat(' ' + str2);
console.log(resultConCat);


//++++++++++++++++++++
// replace() method
//+++++++++++++++++++

const replaceText = "Hello, my name is Sean";
const replaceResult = replaceText.replace("Hello", "Hi there");

console.log(replaceResult);


//++++++++++++++++++++
// split() method
//+++++++++++++++++++

const textSplit = "Hello my name is Sean Fitumi";
const splitResult = textSplit.split(" ");

const wordSplit = "javascript";
const wordResult = wordSplit.split("");

console.log(splitResult);
console.log(wordResult);


//++++++++++++++++++++
// slice() method
//+++++++++++++++++++

const textSlice = "javascript";
const sliceResult = textSlice.slice(0, 4);

console.log(sliceResult);


//++++++++++++++++++++
// trim() method
//+++++++++++++++++++

const trimText = "   javascript   ";
const trimResult = trimText.trim();

console.log(trimText);
console.log(trimResult);



//++++++++++++++++++++
// search() method
//+++++++++++++++++++

const textSearch = "JaveScript is fun";
const searchResult = textSearch.search("fun");
const searchResult1 = textSearch.search("funny");

console.log(searchResult);  //<--- returns the index where the found string starts
console.log(searchResult1); //<--- returns -1 if there is no string match




