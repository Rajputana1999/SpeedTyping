let errors = 0, keystrokes = 0;
$(document).ready(function(){
    text = boxText; //Text to be typed
    $("#box").text(boxText);
    let input = $('#inputText');
    input.val('');
    // console.log(text);
    let index,lastKey=' ',key;
    let $inputResponse = input.keypress(function(){
        index = input.val().length;  /// entered key is not present in input.val() at this moment
        key=String.fromCharCode(event.which);
        keystrokes++;
        if(index!=0)lastKey=input.val()[index-1];
        if(lastKey===' ' && key===' '){
            input.val(`${input.val().slice(0,-1)}`);
            keystrokes--;
        }
        else if(key===text[index]){
            $('#errorText').empty();
        }
        else{
            errors++;
            // console.log(`err & keys : ${errors}, ${keystrokes}`);
        }
        lastKey=key;
        if(index == text.length-1){
            $('#end').click();
        }
    });
    //end button clicked
    $('#end').click(function(){
        $inputResponse.off();
    });
});