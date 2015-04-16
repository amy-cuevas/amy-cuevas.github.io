$(document).ready(function(){
  $('#add').on('click',function()){
    var item=$('input').val();
    $("div").append('<p>'+item+'</p>')
  });
$('#remove').on('click',function()){
    var item=$('input').val();
    $('div').empty();
})
}
}

