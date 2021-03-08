//This is a JavaScript file
// The user inputs what metric of temperature and the degree they'd like to convert and the metric they'd like to convert it to.
// The program then outputs the temperature they input and the conversion to the temperature they said they'd like to convert it to.  

let intemp=prompt(`What metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin`);
 // user enters metric of temperature they'd like to convert
intemp= intemp.toUpperCase(); //toUpperCase is used so k and K are the same
let degree=Number(prompt(`Please input number of ${intemp} you would like to convert.`)); // user enters the number of the temperature they'd like to convert
let outtemp=prompt(`What metric would you like to convert the temperature to?
C- Celsius
F- Fahrenheit
K- Kelvin`); 
// user enters what temperature they are converting to
outtemp= outtemp.toUpperCase();// toUpperCase is used so k and K are the same

    
    if (intemp === outtemp && outtemp === "C"){
        console.log(`${degree}°C is ${degree}°C.`) //if the input temperature == output temperature and the output is C, the program will print "#C is #C."
    }
    else if (intemp === "C" && outtemp === "F"){
        console.log(`${degree}°C is ${Math.round(100 * ((degree * 9 / 5) + 32)) / 100}°F.`) //if the input temperature is C and output temperature is F, the program will print is "#C is #F." 
    }
    else if (intemp === "C" && outtemp === "K"){
        console.log(`${degree}°C is ${Math.round(100 * (degree + 273.15)) / 100}K.`) //if the input temperature is C and output temperature is K, the program will print is "#C is #K."
    }
    else if (intemp === outtemp && outtemp === "F"){
        console.log(`${degree}°F is ${degree}°F.`) //if the input temperature == output temperature and the output is F, the program will print "#F is #F."
    }
    else if (intemp === "F" && outtemp === "C"){
        console.log(`${degree}°F is ${Math.round(100 * ((degree - 32) * 5 / 9)) / 100}°C.`) //if the input temperature is F and output temperature is C, the program will print is "#F is #C."
    }
    else if (intemp === "F" && outtemp === "K"){
        console.log(`${degree}°F is ${Math.round(100 * ((degree + 459.67) * 5 / 9)) / 100}K.`) //if the input temperature is F and output temperature is K, the program will print is "#F is #K."
    }
    else if (intemp === outtemp && outtemp === "K"){
        console.log(`${degree}K is ${degree}K.`) //if the input temperature == output temperature and the output is K, the program will print "#K is #K."
    }
    else if (intemp === "K" && outtemp === "F"){
        console.log(`${degree}K is ${Math.round(100 * ((degree * 9 / 5) - 459.67)) / 100}°F.`) //if the input temperature is K and output temperature is F, the program will print is "#K is #F."
    }
    else if (intemp === "K" && outtemp === "C"){
        console.log(`${degree}K is ${Math.round(100 * (degree - 273.15)) / 100}°C.`) //if the input temperature is K and output temperature is C, the program will print is "#K is #C." 
    } 
    else {
        console.log(`You did not properly input what you wanted to convert. Please try again.`) // if anything is input incorrectly this message will print
    }

/*Note I change the formula for C=K and K=C slightly. The exact formula is C= K - 273.15 or K=C+273.15. Although it is acceptable to use 273, 273.15 is what Google uses so I used that*/ 
//Note that in task PDF packet that there are no the instructions to create an HTML. I thought it odd but that is why I didn't submit one the first time.
// There will be an Â before the degree sign. I don't know how to get ride of it. I tried to replace it with an empty string but it broke my code.
// Please let me know how to replace it in the comments. While doing research I found it could be due to the html file, but don't know how to fix.
//Also spoke to another student on discord about my problem. His mentor told him not to worry about it.