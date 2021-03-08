$( document ).ready(function() {
    console.log( "ready!" );
    //Dropdown Function
    $("#menu-drop").css("display", "none");
    $("#dropdown-toggle").click(function(){
        $("#menu-drop").slideToggle("slow");
    });

//alert message if someone clicks to like button
    $(".like").click(function(e){
        e.preventDefault();
        $("#likeit").css("background-color", "#428bca");
        alert("Thanks for liking");
    });

//Click buttons to show and hide table
    $("table").css("display", "none"); //set table display to none

    $("#hideTable").click(function(){
        $(".table").hide(); //click to hide
    });

    $("#showTable").click(function(){
        $(".table").show(); //click to show
    });

//Take Survey Function

    $("#survey-form").hide(); //set survey form to hide
    $("#take").click(function(){
        $("#survey-form").slideDown(1000); //click function to slide down
    });

    $("#hide-survey").click(function(){
        $("#survey-form").slideUp(1000); //click function to slide up
    });
  
//Survey Clear
  
    document.querySelector('#survey-form').addEventListener('submit', function (e) { //this clears all input values after submitting
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.lastname.value = '';
        e.target.elements.email.value = '';
        e.target.elements.comment.value = '';
    });

//Save Paragraph

    $("#save").click(function(){
        let text = $('#article p').text();
        localStorage.setItem("chinaPara", text);
        let n = localStorage.getItem('counter');
        if (n === null) {
            n = 1;
        } else {
        n++;
    }
    
    localStorage.setItem("counter", n);
    alert(`You've save ${n} articles`)
    });
    console.log(localStorage);
    });

//Comment function
function getUserComment() {
    nametext = namecomm.value;//Getting the value of text 
    document.getElementById("namecomm").value = "" //create empty string
    text = comment.value;//Getting the value of text 
    document.getElementById("incomment").innerHTML += '<p>' + nametext + ' said ' + '"' + text + '"' //Adding text from to innertext/Webpage once clicked on button
    document.getElementById("comment").value = ""//Create empty string
  }