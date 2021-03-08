//This is a javascript file
// The program will ask if penguins are in the water. 
//If yes, a group of penguins is called a raft. If no, a group of penguins is called a waddle.
//See the errors in the code and how to fix the errors to make the code work and outcome to be correct.


let animals= "penguins"
let raft= "waddle" //logical error; see line 15
let waddle= "waddle"

water =prompt(`Are the ${penguins} in the water? yes / no`) // runtime (reference error)- refering to variable penguins that doesn't exist. Should be ${animals}
water= water.toLowerCase();

if (water === 'yes'){
    console.log(`A group of ${animals} is called a ${raft}.`); //logical error; code runs but if in the water a output should be A group of penguins is called a raft. Easy fix, change variable raft= "raft"
}
else if (water === 'no'){ 
    console.log(`A group of ${animals} is called a ${waddle}.`); //syntax error; console.logg should be console.log
}
else {
    console.log(`You're answer was not yes or no.`); 
// syntax error; unexpected end of input- should be enclosed in }

