/*Ok this one was a bit tricky due to the fact that I had a ' instead of
a ` in front my console.log when I was originally coming up with a solution. So I create an long drawn out solution in 
which I created let sentences to add the text. After a copy and past into a new browser I found the the ' was not a `
which allowed me to easily be able to do the solution you see below.

Any way I thought I'd share my thought process and how I came of with two solutions. */


let mother= prompt ("What is your mother's madien name?"); //prompts user to enter mother's madien name
let street= prompt ("What street did you grow up on?"); //propts user to enter street name
let color= prompt ("What was your favorite color as a child?"); //prompts user to enter color
let age= prompt ("How old are you?"); // prompts user to enter age
let number= prompt ("Pick a number between 1 and 10."); //prompts user to enter number between 1 and 10
console.log(`In ${age} years time you are going to meet your best friend named ${mother} ${street}. 
You will also get married in ${Math.round (age/number)} years and have ${age%number} children. 
In ${age - number} years time you are going to dye your hair ${color}.`); 

/*out put will be put prompts values within the string sentence, sometimes manipuating the data with math sucha as
, Math.round, /, -, and % similar to a madlib to produce the users "fortune". Math.round is used to round off the divison
in Math.round (age/number) */
