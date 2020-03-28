// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  
  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const num = 13;
num.toString();

// Write a JavaScript program to convert a string to the number.
Number(num);


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const theString = "Hello World";
const theInt = 23;
const theBool = false;
const theNull = null;
const theUnknown = NaN;
const theEmpty = undefined;


const checkingFunc = (variable) => {
  return typeof(variable);
}

console.log(checkingFunc(theEmpty));

  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNums = (numOne, numTwo) => {
  return (numOne + numTwo);
}

console.log(addTwoNums(7, 3));


// Write a JavaScript program that runs only when 2 things are true.
const varOne = 4;
const varTwo = "4";
const varThree = "4";
const varFour = 4;

const boolFunc = (varOne, varTwo, varThree, varFour) =>
{
  if (varOne === varFour && varTwo === varThree) {
  return "Good Job"
  } else {
  return "Bad Job"
  }
}

console.log(boolFunc(varOne, varTwo, varThree, varFour));


// Write a JavaScript program that runs when 1 of 2 things are true.
const varOne = 4;
const varTwo = "4";
const varThree = "4";
const varFour = 9;

const boolFunc = (varOne, varTwo, varThree, varFour) =>
{
  if (varOne === varFour || varTwo === varThree) {
  return "Good Job"
  } else {
  return "Bad Job"
  }
}

console.log(boolFunc(varOne, varTwo, varThree, varFour));


// Write a JavaScript program that runs when both things are not true.  
const varOne = 4;
const varTwo = "4";
const varThree = "0";
const varFour = 9;

const boolFunc = (varOne, varTwo, varThree, varFour) =>
{
  if (varOne !== varFour && varTwo !== varThree) {
  return "Good Job"
  } else {
  return "Bad Job"
  }
}

console.log(boolFunc(varOne, varTwo, varThree, varFour));


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
