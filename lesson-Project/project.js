var playing = false;
var score ;
var action;
var timeRemaining;
var correctAnswer;
var wrongAnswer;
//if we click on the start/reset
document.getElementById('start').onclick = function(){
   if(playing == true){
       location.reload();//reloading
   }else{
       playing = true;
      score = 0;
      document.getElementById('score-value').innerHTML = score;     
      show('time');
      timeRemaining = 60;
      document.getElementById('time-value').innerHTML = timeRemaining;
      hide('gameover');
      document.getElementById('start').innerHTML = 'Reset Game';

     function startCountdown(){
         action = setInterval(function(){
             timeRemaining -=1;
            document.getElementById('time-value').innerHTML = timeRemaining;
            if(timeRemaining == 0){
               
                stopCountdown();
                show('gameover');
                document.getElementById('gameover').style.display = 'block';
                document.getElementById('gameover').innerHTML = '<p>Game over!</p> <p>Your score is' + score + "</p>";
              
                hide('time');
                hide('correct');
                hide('wrong');
                playing = false;
                document.getElementById('start').innerHTML = 'Start Game';
               
            }
        }, 1000)
     }
     startCountdown();
     function stopCountdown(){
        clearInterval(action);
     }
     function hide(id){
         document.getElementById(id).style.display = 'none';

     }
     function show(id){
         document.getElementById(id).style.display = "block";
     }
     generateQA();
   } 
   function generateQA(){
         var x = 1+ Math.round(9*Math.random());
         var y = 1+ Math.round(9* Math.random());
        correctAnswer = x * y;
        document.getElementById('question').innerHTML = x + 'x' + y;
        var correctPosition = 1+ Math.round(3*Math.random());
        document.getElementById('box'+ correctPosition).innerHTML = correctAnswer;
                       
       var answers =[correctAnswer]; 

        for(var i = 1; i<5; i++){
            if(i != correctPosition){
             var wrongAnswer;
            do{
               
                    var wrongAnswer = ( 1+ Math.round(Math.random()*9))*( 1+ Math.round( Math.random()*9));
                
            } 
            while(answers.indexOf(wrongAnswer) > -1)
               document.getElementById('box' + i).innerHTML = wrongAnswer;
               answers.push(wrongAnswer);
            }
        }
   }
  // generateQA();
}

//clicking correct answer box
for(var i = 1; i<5; i++){
    document.getElementById('box' + i).onclick = function(){
     
        if(playing == true){
            if(this.innerHTML == correctAnswer){
              
                //correct answer
                score++;
                document.getElementById('score-value').innerHTML = score;
                //variable
                 document.getElementById('wrong');
                 document.getElementById('correct');
                //hide wrong box and showing correct box
               // hide('wrong');
                document.getElementById('wrong').style.display = 'none';
                
                //show('correct');
                document.getElementById('correct').style.display = 'block';
               
                setTimeout(function(){
                   // hide('correct')
                    document.getElementById('correct').style.display = 'none';
                }, 1000);
    
                //generating new question
              // generateQA();

            }else{
               // wrong answer
              // hide('correct');
                  document.getElementById('correct').style.display = 'none';
                //show('wrong');
                document.getElementById('wrong').style.display = 'block';
                setTimeout(function(){
                  //  hide('wrong')
                    document.getElementById('wrong').style.display = 'none';
                }, 1000);
            
            }
        } 
    }
}