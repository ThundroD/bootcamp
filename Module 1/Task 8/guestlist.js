//This is a JavaScript File
// The program will prompt the user add names to add to their guest list for a dinner party
// The user can only invite 10 people. If attempt to add an 11 guest they will be told they have already added 10 people.
// The user will then be asked if they would like to replace someone on the list with this person
// If they answer yes, the program will output the current list, then ask who they would like to replace
// They will then type in who they would like to replace
// The program will then output them with a new guest list with their new guest - the one they chose to replace.

let guests = [];
let guests_add = "";
let counter= 0;
let addPpl= "";
let replacePpl= "";
let replacewho= ""; //counter set to 0 and everything else left blank to be filled in.


do{
    guests.push(prompt(`Who would you like to invite to your dinner party?`)); //the do in the do/while loop will continue to ask who to invite to the party
    counter++; //the counter will go up by 1 every time a new guest is entered.

    
} while(counter !== 10); //the while loop will stop the loop once the guest number reaches 10
guest_add= prompt(`Who would you like to invite to your dinner party?`); //the program the asks if they who they would like to invite (this is saved as a seperate variable outside the array)
replacePpl= prompt(`You have already added 10 guests.
Would you like to replace someone on your list with this person? Yes / No`); //They will then be prompted that they have already invited 10, would they like to replace someone with the last input.
replacePpl.toLowerCase();
if (replacePpl === 'yes'){
    console.log(`Your current guest list is: ${guests.join(', ')}`); 
    replacewho= prompt(`Who would you like to replace?`)
    guests.splice(guests.indexOf(replacewho), 1, guest_add);
    console.log(`Your updated guest list is: ${guests.join(', ')}`); /* if yes, the output is the current guest list. Then the program asks who would they like to replace. 
    The program will then output the new guest list with the new guest taking the place of the replaced guest. */
    }
else {console.log(`Your guest list is: ${guests.join(', ')}`);
    } // if the person decideds not to replace the progra will output their original guest list.