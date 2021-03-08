$( document ).ready(function() {
    console.log( "ready!" );
  //Click buttons to show and hide table
  $("table").css("display", "none"); //hides the table

  $("#hideTable").click(function(){ //hides when clicked
    $(".table").hide();
  });

  $("#showTable").click(function(){ //Shows when clicked
    $(".table").show();
  });


//alter message if someone clicks to like button
  $(".like").click(function(e){
    e.preventDefault();
    $("#likeit").css("background-color", "#428bca");
    alert("Thanks for liking");
  });


//Take Survey Function

  $("#survey-form").hide(); //hides survey form
  $("#take").click(function(){ //slides down
    $("#survey-form").slideDown(1000);
  })
  $("#hide-survey").click(function(){ //slides up
    $("#survey-form").slideUp(1000);
  })

//Survey Clear

  document.querySelector('#survey-form').addEventListener('submit', function (e) { //clears input values after submitting
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.lastname.value = '';
    e.target.elements.email.value = '';
    e.target.elements.comment.value = '';
  });

//Drop Down menu 
  $("#menu-drop").css("display", "none"); //hides drop down
  $("#dropdown-toggle").click(function(){
    $("#menu-drop").slideToggle("slow"); //toggles up and down when clicked
  });

//Save Article

  $("#savep").click(function(){
    let text = $('#article p').text();
    localStorage.setItem("para", text);
    let n = localStorage.getItem('counter');
    if (n === null) {
        n = 1;
    } else {
        n++;
    }
    localStorage.setItem("counter", n);
    alert(`You have saved ${n} articles`)   

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