$(document).ready(function(){
  $("#start-button").click(function(){
var number = 20;
  	alert("Start Game!");
    $("#start-button").on("click", start);   
    $("#submit").on("click", finish);  
    $("#restart").on("click", restart);
    function timer(){
      number-- 
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); 
      }
    }
function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".game");
    	showMe(".ai");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#pla yagain");
	    hideMe("#show");
    }
    
function stop(){
    	clearInterval(counter); 
    	$("#show").show();
    	$("#playagain").show();
		$(".game").hide();
		$(".ai").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; 
    	clearInterval(counter); 
    	timer();
    }

    function restart(){
    	number = 20;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }



    start(); 
});










