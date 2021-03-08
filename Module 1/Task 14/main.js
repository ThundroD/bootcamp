//This is a JavaScript file
//This file will add list items in to a ul in the HTML shopping list
//It will also change the CSS on two li to have the crossed out, to indicate those items have been bought

// Adding list items to the HTML Document
let items= [
    'lobster',
    'caviar ',
    'baguette',
    'butter',
    'foie gras',
    'steak',
    'champagne'
];// set an array of list items

let itemList = document.querySelector("#itemList"); //creates a new variable ItemList that has the properties of #itemList in 

function updateList() { //create function with name
    items.forEach(function (item){// use the forEach function to disassemble the array into seperate items
        let li = document.createElement('li'); //we then create an new element il, and give a new variable il the same value
        li.textContent = item; //we then set the text content of the li to each item
    return itemList.appendChild(li); // add each il to  the ul by using the appendChild() funcition
    });
}

let list= updateList(); //create variable with function to add to HTML


//Add CSS styling to 2 of the list items to indicate they have been bought
document.querySelector("li:first-child").style.textDecorationLine= "line-through"; 
document.querySelector("li:nth-child(6)").style.textDecorationLine= "line-through";
//first, select the li with querySelector() and detail the li you want to select. In this case the first and the 6th
//the to style the li .style.property = "new style". In this case we want to indicate that this item has been bought
//Use line-through to indicate that it has been bought as most people cross out items they've bought on their list at a grocery store.


