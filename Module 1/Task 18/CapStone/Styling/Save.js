$( document ).ready(function() {

    document.getElementById("saResult").innerHTML = localStorage.getItem("para");
    document.getElementById("mexResult").innerHTML = localStorage.getItem("Mexpara");
    document.getElementById("chinaResult").innerHTML = localStorage.getItem("chinaPara");
    
    console.log(localStorage);
});