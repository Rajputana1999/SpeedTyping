$(document).ready(function(){
    let input = $('#inputText');
    let wpm = $('#wpm');
    wpm.text(`0`);
    let setWpm;
    input.one('keypress',function(){
        setWpm = setInterval(showWpm,1000);
    });
    function showWpm(){
        wpm.text(`${Math.floor((input.val().length/(5*((Ttime-time)/60))+0.5))}`);
    }

    // calculating final WPM
    let finalErrors=0;
    for(let i=0; i<input.val().length; i++){
        if(input.val()[i]!=text[i])finalErrors++;
    }
    $('#end').click(function(){
        clearInterval(setWpm);
        sessionStorage.wpm=Math.floor(0.5+(input.val().length-finalErrors)/(5*((Ttime-time)/60)));
    });
});