
$('#search').on('keyup', function(){
    const value = $('#search').val().toLowerCase();
    console.log(value);

    $('a').each(function(index, element){
       const captionAttr = $(element).attr('data-title').toLowerCase();
       const contain = captionAttr.parentElement;

        if (captionAttr.indexOf(value) > -1){
            $('contain').style.display = "flex";
        } else {
            contain.style.display = 'none';
        }
      
      })
    
    
})



   


