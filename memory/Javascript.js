$(document).ready(function(){
  ["1","2","3","4","5","6","7","8","9","10","1","2","3","4","5","6","7","8","9","10"]
  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  $("div.card").click(function(){
    var mynum=0;
    $(this).find('p').css("opacity","1");
});
});
