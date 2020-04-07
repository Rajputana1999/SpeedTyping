$(document).ready(function(){
    let text = $('#text').text(); //Text to be typed
    $('#inputText').val('');
    let index = 0, errors = 0;
    console.log(text);
    
    let $itext = $('#inputText').keypress(function(){
        index = $('#inputText').val().length;
        if(String.fromCharCode(event.which) === text[index]){
            $('#errorText').empty();
        }
        else{
            $('#errorText').html("<span style='color:tomato'>You mistyped</span>");
            errors++;
            console.log('mistyped');
        }
        if(index == text.length){
            $('#errorText').html(`<span style='color:blue'>Completed</span><span style='color:tomato'> Errors : ${errors}</span>` );
            $(this).off();
        }
    });

    //end button clicked
    $('#end').click(function(){
     $itext.off();   
    });
});