let errors = 0, keystrokes = 0, text;
$(document).ready(function(){
    text = $('#text').text(); //Text to be typed
    let input = $('#inputText');
    input.val('');
    console.log(text);
    let index,lastKey=' ',key;
    let $inputResponse = input.keypress(function(){
        index = input.val().length;  /// entered key is not present in input.val() at this moment
        key=String.fromCharCode(event.which);
        if(index!=0)lastKey=input.val()[index-1];
        if(lastKey==' ' && key===' '){
            input.val(`${input.val().slice(0,-1)}`);
        }
        else if(key===text[index]){
            $('#errorText').empty();
            keystrokes++;
        }
        else{
            $('#errorText').html("<span style='color:tomato'>You mistyped</span>");
            errors++;
            keystrokes++;
            console.log(`err & keys : ${errors}, ${keystrokes}`);
        }
        lastKey=key;
        if(index == text.length-1){
            $('#errorText').html(`<span style='color:blue'>Completed</span><span style='color:tomato'> Errors : ${errors}</span>` );
            $('#end').click();
        }
    });
    //end button clicked
    $('#end').click(function(){
        $inputResponse.off();
    });
});