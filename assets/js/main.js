$(document).ready(function() {
var input = document.querySelector('.form');
    var para = document.querySelector('p');

$("#enviar").click(function(){
	var b = document.getElementById("message");
    
    if($("#message").val() == ""){
      $("#message").val("");
      return false;
    } else{
      var valuemessage = $("#message").val();
      $("#message").val("");
     
     console.log(valuemessage)
    }
      
  });
});