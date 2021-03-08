let value= prompt("Enter a uppercase letter, lower case letter, or number."); // prompts user
if (Number.isInteger(parseInt(value))){
    console.log (`${value} is a number.`); // if the value is a number, parse the number in a string if found it is a number
}
else if (value == value.toLowerCase() && value.toLowerCase() != value.toUpperCase()){ 
    console.log(`${value} is a lower case letter.`); // the value is lowercase when the value is lowercase and lower case is not uppercase
}
else if (value == value.toUpperCase() && value.toLowerCase() != value.toUpperCase()){
    console.log(`${value} is an upper case letter`); // the value is uppercase when the value is uppercase and upper case is not equal to lowercase
}
else {
    console.log (`${value} is not a number or a letter.`); //if none of the above are found it is not a number or a letter
}

/* So this was a bit tricky and took a lot of time to finally to
come up with something that worked. 
Initially, I was stuck because I kept trying to get outputs from code 
like the one below.

let value= prompt("Enter a uppercase letter, lower case letter, or number.");
if (value === value.toUpperCase()){
    console.log(`${value} is an upper case letter`);
}
else if (value === value.toLowerCase()){
    console.log(`${value} is a lower case letter.`);
}
else if (value == isNaN(value)){
    console.log (`${value} not a number or a letter.`);
}
else {
    console.log (`${value} is a number.`);
}

However, I was not able to get numbers nor special
characters as it kept on giving me uppercase for numbers. So figured
it was probably due because the computer was not reading it in 
numerical values as the input was most likely a string.

So for the computer to understand that the numbers aren't a string
but a numerical value the (parseInt(value)) identifies a number in
a string if it is present it "parses" it out to let the compueter
know it holds a numerical value. Also the great thing is that it
will skip over it if it doesn't find a number, which makes it perfect to 
start the if conditional statment. 

Now the other problem was the special characters. I wasn't
getting the output I wanted. That was because a special character
like a ? is both lowercase and uppercase, they could hold both
values so I needed to negate the case structure so that the computer
could determine a special character is what it is as it holds both
lowercase and uppercase values.
*/
