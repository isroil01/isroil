var playing = false;
var score;
var trialsLeft;
var action; //set interval action
var step;
var fruits = ['water', 'banana', 'cherry', 'peach', 'mango', 'greps', 'pine apple'];
$(function(){
    //click on start reset button
$("#start").click(function(){
  //we are playing
  if(playing == true){
   location.reload();   
  }else{
      //we are not playing
      playing = false;

      //set to 0
      score = 0; //set score to 0
      $('#score-value').html(score);

      //show trial left
      $("#trialleft").show();
      trialsLeft = 3;
     addHearts();

     //hide game over box
     $("#gameover").hide();

     //change buttyon text to reset game
     $("#start").html('Reset Game');

     //start action
     startAction();
  }
});
 
//slice fruits
$("#fruit1").mouseover(function () { 
    score++;
    $("#score-value").html(score); //update score
    $('#slicesound')[0].play();
    clearInterval(action);

    //hide fruit
    $("#fruit1").hide('explode', 500);


  setTimeout(startAction, 1000);

});

function addHearts(){
    $("#trialleft").empty();
    for(i = 0; i < trialsLeft; i++){
        $("#trialleft").append( " <img src = 'img/heart.png' class='life'>");
    }
}
//start sending fruits

function startAction(){
 $('#fruit1').show();
 chooseFruit(); //choose a random fruit
 $("#fruit1").css({'left': Math.round( 550* Math.random()), 'top': -50});


 //generate a random
   step = 1+ Math.round(5 * Math.random()); //changing the step

   //move fruit
   action = setInterval(function(){
  $("#fruit1").css('top', $("#fruit1").position().top + step);

  //check if the fruit too low
  if($("#fruit1").position().top > $("#fruitcontainer").height()){
   //check if we have trial left
   if(trialsLeft > 1){
    $('#fruit1').show();
  
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left': Math.round( 550* Math.random()), 'top': -50});  
    //generate a random
      step = 1+ Math.round(5 * Math.random()); //changing the step

  //reduce trial
  trialsLeft--;

    //populate trial left
      addHearts();
    }else{
       //game over
        playing =false;
        //we are not playing
        $("#start").html('Start Game');
        //change button to start game
        $("#gameover").show();
        $("#gameover").html('<p>Game Over !</p> <p>Your score is '+ score +'</p>');
        $("#trialleft").hide();
        stopAction();
   }
  };
   }, 10);
};

//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src', 'img/' + fruits[Math.round(7 * Math.random())] + '.png');
}

//stop droping fruits
 function stopAction(){
     clearInterval(action);
     $("#fruit1").hide();
 }
});