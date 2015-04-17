$(document).ready(function(){
var click_count=0;
 var first_guess=0;
 var second_guess=0;
 var first_card=0;//all these allow for the game to restart
 var card_array = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10"]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var shuffled_array = shuffle(card_array);
  for(i in shuffled_array){
    $('#card_holder').append('<div class="card"><p>'+shuffled_array[i]+'</p></div>');
  }//this part shuffles the cards to randomize the values of the cards
var clicked = 'first';
  $('.card').on('click', function(){
    if(clicked == 'first'){//checks if we are on the first card
      $(this).find('p').css('opacity', 1).addClass('selected');//this adds the card to a group to 
      first_guess=$(this).find('p').html();
      clicked = 'second';
    }
    else{
       $(this).find('p').css('opacity',1).addClass('selected');
       clicked='first';
       second_guess=$(this).find('p').html();
       if (first_guess==second_guess){
        $('.selected').css('color', 'red').removeClass('selected');
       }//this compares the cards, and if they are equal, they change to the color red. then it removes it from the group
       else{
        setTimeout(function(){$('.selected').css('opacity',0).removeClass('selected');}, 500);
       }//this waits for half a second to reveal the card before flipping over.
    }
});
});
