// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "lion"; //syntax error; Lion should be a string so should be in "" and also be lower case to fit the string below in fullSpec also ending ; is needed
let animalType = "cub"; //syntax error; indentation is off should be next to other variables.
let numberOfTeeth = 16;
let numberOfLegs = 4; //syntax error; 4 should be a number not a string, remove ""

fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth.` /*logical error/ runtime (reference error); variables are wrong number_of_teeth should be numberOfTeeth, animal_type should be animalType. 
Also switch animalType and numberOfTeeth to make logical sense in string. syntax error; should switch to template literal to format string correctly */

if (numberOfLegs == 4) { //syntax error; numberOfLegs = 3 will always log as the if statement should be == 3. runtime/reference error; the console will not log because number of legs should == 4
console.log(fullSpec); //syntax error; console.log should have () runtime/reference error; full_spec should be fullSpec
}
