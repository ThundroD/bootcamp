let number=prompt("Please enter a number."); // computer prompts user to enter a number as the variable
if ((number % 7 === 0) && (number % 11 === 0)){
    console.log(`${number} is divisible by both 7 and 11.`) // will result if the remaining value of the number by 7 is 0 and the remaining value by the number and 11 is 0 making it divisible.
}
else if ((number % 11 === 0) && (number % 7 !== 0)){
    console.log(`${number} is divisible by 11 but not by 7.`); // will result if remaining value of the number and 11 is 0 making it the number divisible by 11 and the remaining value of the number and 7 is not 0 making it not divisible by 7.
}
else if ((number % 7 === 0) && (number % 11 !== 0)){
    console.log(`${number} is divisible by 7 but not by 11.`) // will result if remaining value of the number and 7 is 0 making it the number divisible by 7 and the remaining value of the number and 11 is not 0 making it not divisible by 11.
}
else {
    console.log(`${number} is not divisible by 7 or 11.`); // if none of the above is found to be true then the number is not divisible by 7 or 11
}
/* In this task the number must be divisible meaning divided without having a remaining value
So we can't use the / as that can be done to almost any number and would have remaining values.
We would have to use the % which can find remaining values for us.
So if we are trying to find if something that is  divisible and % finds the remaining values
then the remaining value would need to be 0. As shown above number % 7 or 11 === 0 meaning there is no
remaining value making it divisible.

!== operators let us find that something does not equal 0 which does not make it divisible. This allows
use to find out when something is not divisible. We can then show when number is divisible while also showing
when something isn't divisible by putting the two together with && in the condition. */