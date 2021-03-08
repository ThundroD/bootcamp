$( document ).ready(function() {
    console.log( "ready!" );
    //slide up and down the quote with a chain function
  $(".lead").slideUp(2000).slideDown(2000).animate({height: '200px', opacity: '0.3', fontSize: '60px'}, "slow");

//Email
  document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); //clears input values once submitted
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
    });

//Drop Down menu 

  $("#menu-drop").css("display", "none"); //list is hidden

  $("#dropdown-toggle").click(function(){
  $("#menu-drop").slideToggle("slow"); //toggle click up and down to create a drop down menu
  });
});



