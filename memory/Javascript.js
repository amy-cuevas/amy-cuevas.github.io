$(document).ready(function(){
  for(i=1; i<21; i++){
    $('#card_holder').append('<div class="card"><p>'+i+'</p></div>');
  }
  $("div.card").click(function(){
    var mynum=0;
    $(this).find('p').css("opacity","1");
});
});
