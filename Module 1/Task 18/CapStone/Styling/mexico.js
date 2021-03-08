$( document ).ready(function() {
    console.log( "ready!" );
    //Dropdown Function
  $("#menu-drop").css("display", "none");
  $("#dropdown-toggle").click(function(){
    $("#menu-drop").slideToggle("slow");
  });

//alter message if someone clicks to like button
  $(".like").click(function(e){
    e.preventDefault();
    $("#likeit").css("background-color", "#428bca");
    alert("Thanks for liking");
  });


//Click buttons to show and hide table
  $("table").css("display", "none"); //hides table

  $("#hideTable").click(function(){ //click to hide table
    $(".table").hide();
  });

  $("#showTable").click(function(){ //click to show table
    $(".table").show();
  });

  //Take Survey Function

  $("#survey-form").hide(); //hides survey form
  $("#take").click(function(){ //slides down when clicked
    $("#survey-form").slideDown(1000);
  })
  $("#hide-survey").click(function(){ //sides up when clicked
    $("#survey-form").slideUp(1000);
  })

//Survey Clear

  document.querySelector('#survey-form').addEventListener('submit', function (e) { //clears input values once submitted
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.lastname.value = '';
    e.target.elements.email.value = '';
    e.target.elements.comment.value = '';
  });

//Save Paragraph

  $("#savep").click(function(){
    let text = $('#article p').text();
    localStorage.setItem("Mexpara", text);
    let n = localStorage.getItem('counter');
    if (n === null) {
      n = 1;
    } else {
      n++;
    }
    
    localStorage.setItem("counter", n);
  
    alert(`You've save ${n} articles`);
  });
  
  });

//Comment function
function getUserComment() {
  nametext = namecomm.value;//Getting the value of text 
  document.getElementById("namecomm").value = "" //create empty string
  text = comment.value;//Getting the value of text 
  document.getElementById("incomment").innerHTML += '<p>' + nametext + ' said ' + '"' + text + '"' //Adding text from to innertext/Webpage once clicked on button
  document.getElementById("comment").value = ""//Create empty string
}
