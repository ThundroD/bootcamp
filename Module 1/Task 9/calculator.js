let first = Number(prompt('Please enter a number.'));
let second = Number(prompt('Please enter another number'));
let operator = prompt(`How would you like to calculate these numbers? Please choose only one:
add
subtract
multiply
divide`);
operator = operator.toLowerCase();


function addition (a, b){
    return a + b
} 


function subtraction (a, b){
    return a - b
}

function multiplication(a, b){
    return a * b
}

function division(a, b){
    return a / b
}


if (operator === 'add'){
    console.log(`${first} + ${second} = ${addition(first, second)}`)
}

else if (operator === 'subtract'){
    console.log(`${first} - ${second} = ${subtraction(first, second)}`)
}

else if (operator === 'multiply'){
    console.log(`${first} x ${second} = ${multiplication(first, second)}`)
}

else if (operator === 'divide'){
    console.log(`${first} / ${second} = ${division(first, second)}`)
}

else{
    console.log("Error: Input not recieved.")
}


