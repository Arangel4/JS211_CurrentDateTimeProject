// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  
  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
const num = 13;

const convertToString = () => {
  num.toString()
  
  document.getElementById("display-elementTwo").innerHTML = num;
};





// Write a JavaScript program to convert a string to the number.
const value = "6";

const convertToInt = () => {
  Number(value);

  document.getElementById("display-elementThree").innerHTML = value;
}



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

console.log(theBool);

const checkingFunc = () => {
  typeof(theBool);
  document.getElementById("display-elementFour").innerHTML = typeof(theBool);
};



  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNums = () => {
  const sum = (9 + 5);

  document.getElementById("display-elementFive").innerHTML = sum;
};



// Write a JavaScript program that runs only when 2 things are true.
const varOne = 4;
const varTwo = 4;
const varThree = 10;

const boolFunc = () =>
{
  if (varOne === varTwo && varTwo < varThree) {
    console.log(true)
    document.getElementById("display-elementSix").innerHTML = true;
  }
};





// Write a JavaScript program that runs when 1 of 2 things are true.
const orVarOne = 9;
const orVarTwo = 44;
const orVarThree = 9;

const orFunc = () =>
{
  if (orVarOne === orVarThree || orVarTwo === orVarThree) {
  console.log(true)
  document.getElementById("display-elementSeven").innerHTML = true;
  }
};






// Write a JavaScript program that runs when both things are not true.  
const wrongVarOne = 0;
const wrongVarTwo = "9";
const wrongVarThree = 6;

const notFunc = () => {
  if (wrongVarOne !== wrongVarTwo && wrongVarTwo !== wrongVarThree) {
    console.log(true)
    document.getElementById("display-elementEight").innerHTML = true;
  }
};



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

