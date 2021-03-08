//Create variable for button
const button = document.querySelector(".btn");

//Add click event listener on button
button.addEventListener("click", function(e){
    e.preventDefault(); //prevent e defualt so it does not submit to itself
    const titleInput = document.querySelector("#title"); //create variables
    const authorInput = document.querySelector("#author");
    const genreInput = document.querySelector("#genre");
    const reviewInput = document.querySelector("#review");
    const bookList = document.querySelector("#book-list");

    if( //if there is no input in any feild give an alert to put at least one input in
        titleInput.value == "" &&
        authorInput.value == "" &&
        genreInput.value == "" &&
        reviewInput.value == ""
    ){ 
        alert("Enter any input");
    }
    else{// if there is an input in a feild do the following
    //create a booklist row for where the books info should be placed
   const bookListRow = document.createElement("tr");
   bookListRow.className="classBook";
    //create a title table data element, take the title input value and append it into the new book row
   const newTitle = document.createElement("td");
   newTitle.innerHTML = titleInput.value; 
   bookListRow.appendChild(newTitle);
     //create an author table data element, take the author input value and append it into the new book row
   const newAuthor = document.createElement("td");
   newAuthor.innerHTML = authorInput.value;
   bookListRow.appendChild(newAuthor);
     //create a genre table data element, take the genre input value and append it into the new book row
   const newGenre = document.createElement("td");
   newGenre.innerHTML = genreInput.value;
   bookListRow.appendChild(newGenre);
    //create a review table data element, take the review input value and append it into the new book row
   const newReview = document.createElement("td");
   newReview.innerHTML = reviewInput.value;
   bookListRow.appendChild(newReview);
    //create a delete button
   const dltBtn= document.createElement("button");
   dltBtn.contentEditable="false" //make content editable false
   const dltBtnTxt= document.createTextNode("\u00D7"); //create an X as the text node of the delte button
   dltBtnTxt.contentEditable="false" //make the delete button text content editable false
   dltBtn.append(dltBtnTxt); //append text to delete button
   dltBtn.className="btn btn-danger bt-small"; //give the delte button a class 
   dltBtn.addEventListener('click', deleteBook); //add an event listener to the delte button
    //append delte button to book list row, and append book list row to the book list
   bookListRow.appendChild(dltBtn);
   bookList.appendChild(bookListRow); 
    //make value of the title, author, genre, and review = "" to have inputs spots blank after entering values and inputing them into the row 
   document.getElementById("title").value = "";
   document.getElementById("author").value = "";
   document.getElementById("genre").value = "";
   document.getElementById("review").value = "";

   
    //nested delete book function
   function deleteBook(){
       bookListRow.remove(); //book list row will be removed when clicked

   }

    }
   
});
