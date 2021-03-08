//This is a JavaScript file
//The user inputs a word
// The program will output if that word is a palindrome or not

let word = prompt('Enter a word.'); 
word= word.toLowerCase();
let reverse= "";         // creates another variable that is an empty string.
let i = word.length - 1; // i equals last character in the word.

while (i >= 0){          
        reverse += word[i];
        i--;  
    } /*The while loop is used to reverse the word starting from the end of the word the word. We start from the back of the word (i=word.lenght-1) then using i-- it reads the word from the last character to the first character.*/
    if (word==reverse){
        console.log(`${word} is a palindrome.`) //if they are equal it's a palindrome.
    }
    else{
    console.log(`${word} is not a palindrome.`) //if they are not equal it is not a palindrome.
    }
    