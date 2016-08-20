

$(function(){
    $('.button').on('Enter', function(eventObject){
      eventObject.preventDefault();
      $.ajax({
        url: 'http://localhost:3000/update',
        method: 'post',
        data: $(this).serialize(),
        dataType: 'json'
      }).done(function(responseData){
        $('.small-8 columns').prepend(responseData);
        });
    });
});
