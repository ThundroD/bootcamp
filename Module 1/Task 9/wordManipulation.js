let word = prompt('Please enter a word.'); //prompt user to enter a word

//this set of code will output the users word but with every other letter replaced with a !
function replace(str){
    newWord = ""; //create an empty string to be filled
    for (i=0; i < str.length; i++){ //for loop iterates indexes the word
        if (i % 2 == 0){ // if even the newWord index will be equal to the old word index
            newWord +=  str[i];
        }
        else if (i % 2 !== 0){ //when odd newWord will be filled with !
            newWord += "!";
        }
    }
    return newWord; //this will replace every other letter in a given word with !
}
console.log(`${word} with every second character replaced with ! is ${replace(word)}`) 

// This set of code will output the users word in reverse
function reverseString(str) {
    let split= str.split(""); //splits string into an array
    let reversesplit= split.reverse(); //reverse the array using reverse()- can only use reverse() if an array not a string.
    let joinsplit= reversesplit.join("");// join the array back into a string
    return joinsplit; //reversed word
}
console.log(`${word} reversed is ${reverseString(word)}`)

// This set of code will output the users word with every 6th letter UpperCase
function UpperCase(str){
let newWord = ""; //empty string to be filled
let counter= 0; // counter to count every 6th later on
    for (i=0; i < str.length; i++){ //index string
    counter++; //counter adds by 1 each time
    if (counter % 6 == 0){
        newWord += str.charAt(i).toUpperCase(); // if the counter % 6 = 0 change i to upper case
    }
    else if (counter % 6 !== 0){ //if counter % 6 not 0 change keep i the same
        newWord += str[i];
    }
    }
return newWord; //combined is a word with every 6th letter uppercase
}
console.log(`${word} with every 6th character upper case is ${UpperCase(word)}`)

// This function will turn the word into ASCII numbers
function AsciiValues(str){
let newStr = ""; // create blank string to be filled
    for (i=0; i < str.length; i++){ //index string
        newStr += str.charCodeAt(i); //the str.charCodeAt(i) conversts the values at i into ASCII code
    }
    return newStr.split(); // take the newStr with ASCII code and split it to become an array.
}
console.log(`${word} displayed as an array of ASCII numbers is ${AsciiValues(word)}`)


