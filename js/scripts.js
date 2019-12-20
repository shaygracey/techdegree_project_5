
$('#search').on('keyup', function(){
    const value = $('#search').val().toLowerCase();

    $('.photo-container a').each(function(index, element){
       const captionAttr = $(this).attr('data-caption').toLowerCase();

        if (captionAttr.indexOf(value) > -1){
            $(this).show();
        } else {
            $(this).hide();
        }
      
      })
    
    
})



   


