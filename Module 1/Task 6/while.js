//This is a javascript file
// The algorithm will have a user enter a number
// It will continue to ask the user to enter a number until the user enters -1
// It will then output the average of all the numbers entered besides the input of -1 

let count = 0;
let sum = 0;

    while(true){
        input = parseFloat(prompt("Enter a number")); // sets boolean to true and give statement to have user enter a number
        if(input !== -1){
            count++;
            sum = sum + input;
            sum = parseFloat(sum);
        } // If the number is not -1 the the counter will + 1 and sum will add to what the input is (this will continue)
        else break; //if the input is -1 than the loop will end and output
    }
average = parseFloat(sum/count); //average is calculated but won't include the input of -1
console.log("Average of all numbers entered  is " + average); //output is given