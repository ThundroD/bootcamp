//This is a javascript file
// The user answers the question a,b,c, or d.
// If the incorrect the program will ask if they would like to try again
// If the user says yes the program will prompt them again with the question and they'll try to answer again. 
// This will continue until the user either answers correctly or decides to not contine with the program.

let input = ''; // set input and yn to emptry strings in the global scope so the do function can can give them value
let yn = '';
do {
  input = prompt(`Which rapper has the highest net worth?
  a. Jay-Z
  b. Kendrick Lamar
  c. Dr. Dre
  d. Kanye West
  Enter a, b, c, or d.`);
  input = input.toLowerCase(); // input asks the question to the user
  
  if (input === 'd'){ //if the input the correct answer and is of same value the output will be correct
    console.log(`Correct! Kanye West has a net worth of $3.2 billion.`);
  } 
  else if (input !== 'd') {
    yn = prompt(`Incorrect! Would you like to try again? Yes / No.`); //if they are not correct they will be asked if they'd like to try again
    yn = yn.toLowerCase();
    console.log(yn);
  }
} while ((input !== 'd' && yn === 'yes')); // The loop will exit if the user correctly answers or if they wish not to continue. 