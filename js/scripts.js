
$('#search').on('keyup', function(){
    const value = $('#search').val().toLowerCase();
    console.log(value);

    $('a').each(function(index, element){
       const captionAttr = $(element).attr('data-title').toLowerCase();

        if (captionAttr.includes(value)){
            $('img').show();
        } else {
            $('img').hide();
        }
      
      })
    
    
})



   


