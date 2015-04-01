$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var random_Integer= Math.floor(Math.random()*100)
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var userGuess=parseInt $('input').val();
    
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (userGuess===random_Integer){
    
      //what happens if the guess is correct?
      confirm("Congratulations!You guessed correctly!");
    }
      
    //if the user guessed too high...
    else if (random_Integer<userGuess){
    
      //update the 'feedback' paragraph to tell them to guess lower
      console.log("Guess lower");
    }
      
    //otherwise, the user guessed too low...
    else if (random_Integer<userGuess){
    
    
    
      //update the 'feedback' paragraph to tell them to guess higher
    console.log("Guess higer");}
  });
});