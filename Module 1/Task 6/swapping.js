//This is a java script file
// This program will have a user enter a number
// The program will then output the number and their number with the 2nd and 3rd digit switch.

let num1 = prompt("Please enter a number with a minimum of 3 digits: "); //user inputs their number
let newNum = ""; //new variable creating a blank string

for (i=0; i < num1.length ; i++) { //creates a for loop. It says the control variable i starts at 0, will continue to loop until up until num1 length, the variable i will increase by one each loop.
    if (i==1){
      newNum+=num1[num1.length-1] // if i is equal to 1 (the second digit) the newNum will add the second digit of num1 to the end of newNum's string
    }
    else if (i==num1.length-1){ // if i is equal to num1 length - 1 then the newNum will add the last digit of num1 to the 1 in it's new string. 1 being the second digit in the string.
    newNum+=num1[1];
    }
    else {
      newNum+=num1[i]; // if none of the above happen the numbers in num1 will be added to NewNum in the same place they are in num1
    }
}
console.log(num1)
console.log(newNum) //outputs the two numbers.