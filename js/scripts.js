
$('#search').on('keyup', function(){
    const value = $('#search').val().toLowerCase();
    console.log(value);

    $('a').each(function(index, element){
       const captionAttr = $(element).attr('data-title').toLowerCase();

        if (captionAttr.indexOf(value) > -1){
$('img').style.display = "";
        } else {
            $('img').style.display = 'none';
        }
      
      })
    
    
})



   


