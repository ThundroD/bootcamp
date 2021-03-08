//This is a javascript file
//There were errors in this file, the errors have been fixed and documented.

console.log("Welcome to the error program"); //syntax error; no ( ) around string
    console.log("\n");  //syntax error; no ( ) around string

    let ageStr = "24 years old"; //syntax error; unexpected token == 
    let age = parseInt(ageStr); // runtime (reference error); integer is not defined- change to parse Int
    console.log(`I'm ${age} years old.`); //sytax error; I'm24years old was the outcome. Fix with a template literal
    let three = 3; //syntax error; spacing and 3 is a string when it should be a number.

    let answerYears = (age + three); //syntax error; no () around age and three

console.log(`The total number of years: ${answerYears}`); //syntax error; no () around string console log, no () around variable switch to template literal
answerMonths = (answerYears * 12) + 6; /*runtime (reference error); answer not defined should be answerYears. syntax error; no () around answer * 12 and no ; at end making answerMonths not defined. 
logical error; if kept the same you'll console log 324 month when it should be 330. Fixed when (answerYears*12) + 6 */ 
console.log("In 3 years and 6 months, I'll be " + answerMonths + " months old"); //syntax error; no () around string

//330 months is the correct answer