let numbers = []; // number is our array which is empty will be filled during do/while
let counter= 0; //counter set at 0, will go increase by 1 throough do/while loop

do {
numbers.push(Number(prompt(`Please enter a number. 
The program will ask you to enter a total of 10.
You have entered ${counter} numbers so far.`)));
    counter++;
}while(counter !== 10) //do/while loop which asks a user to input numbers until they input 10 filling the empty arry numbers[]



function add (a, b){
    return a + b 
} //we create a function called add and that function simply adds the numbers
let TotalSum = numbers.reduce(add) //we use reduce(add) on numbers to acculate the values added on to the current value

console.log(`The sum of the total numbers entered is ${TotalSum}`)

function indexOfMax(numbers){
    let max = numbers[0];
    let maxIndex = 0;

    for(i = 1; i < numbers.length; i++){
        if (numbers[i] > max){
            maxIndex = i;
            max = numbers[i]; 
        }
    }
    return maxIndex;
} // to find the index that has the greatest value, we compare each value with the first going through, using a for loop, until we find the index that holds the greatest value. We start comparing index 0 and 1

console.log(`The index of the maxium number you input is ${indexOfMax(numbers)}`)

function indexOfMin(numbers){
    let smallest = 0;
    for(i = 1; i < numbers.length; i ++){
        if (numbers[i] < numbers[smallest]) smallest= i;
    }
    return smallest;
} //to find the index of the smallest variable you first have to declare that the first is the index is the smallest and use the for loop to compare if one another is smaller that is compared and so on until the smallest is found.
console.log(`The index of the minium number you inut is ${indexOfMin(numbers)}`)

function averageNum(numbers){
    let average= 0;
    for(i = 0; i < numbers.length; i++){
        average += numbers[i]  
    } //using a for loop inside a function to get the sum of the array. 
    return (average / 10).toFixed(2);
} //to find the average is simply adding the numbers together than dividing by the amount of inputs. We know the user entered 10 times but we could also divide by number.length and get the same outcome. We .toFix(2) to round to nearest 2nd decimal.

console.log(`The average of the numbers you input rounded to the nearest 2 decimal is ${averageNum(numbers)}`)



function median(numbers){
    numbers.sort(function(a, b){return a - b}); //sorts numbers then arranges them by value
    let i = numbers.length / 2; // test array to see if it has odd or even values. In this case i=5 making it even
    return i % 1 === 0 ? (numbers[i-1] + numbers[i]) / 2 : numbers[Math.floor(i)]; /* return is then a conditional or (ternary) it is assigned it's value upon the condition of i % 1 === 0 (making it a whole number)
    if it is a whole number it will return the value after calculating the average of the two numbers on the opposite sides of the median or if it is not a whole number it takes the middle value*/
}

console.log(`The median value of the numbers you entered is ${median(numbers)}`)