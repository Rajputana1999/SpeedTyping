let errors = 0, text;
$(document).ready(function(){
    text = $('#text').text(); //Text to be typed
    let input = $('#inputText');
    input.val('');
    console.log(text);
    let index,lastkey=' ',key;
    let $itext = input.keypress(function(){
        console.log(event.which);
        index = input.val().length;  /// entered key is not present in input.val() at this moment
        key=String.fromCharCode(event.which);
        if(lastkey==' ' && key===' '){
            input.val(`${input.val().slice(0,-1)}`);
        }
        else if(key===text[index]){
            $('#errorText').empty();
        }
        else{
            $('#errorText').html("<span style='color:tomato'>You mistyped</span>");
            errors++;
            console.log('mistyped');
        }
        lastkey=key;
        if(index == text.length-1){
            $('#errorText').html(`<span style='color:blue'>Completed</span><span style='color:tomato'> Errors : ${errors}</span>` );
            $(this).off();
            $('#end').click();
        }
    });

    //end button clicked
    $('#end').click(function(){
     $itext.off();   
    });
});