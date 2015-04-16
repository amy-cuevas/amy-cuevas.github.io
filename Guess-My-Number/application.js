$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var guessNum=0;
  var random_Integer= Math.floor(Math.random()*100);
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var userGuess=parseInt($('input').val());
    guessNum=guessNum+1;
    
    var element= document.getElementById ("guess_counter");
    element.innerHTML=" "+ guessNum + " guesses so far";
    
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (userGuess===random_Integer){
    
      //what happens if the guess is correct?
      confirm("Congratulations!You guessed correctly!");
    }
      
    //if the user guessed too high...
    else if (userGuess>random_Integer){
    
      //update the 'feedback' paragraph to tell them to guess lower
      confirm("Guess lower");
    }
      
    //otherwise, the user guessed too low...
    else{
    
    
    
      //update the 'feedback' paragraph to tell them to guess higher
    confirm("Guess higher");}
  });
});
