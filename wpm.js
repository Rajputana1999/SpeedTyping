$(document).ready(function(){
    let input = $('#inputText');
    let wpm = $('#wpm');
    wpm.text(`0`);
    let setWpm;
    input.keydown(function(){
        setWpm = setInterval(showWpm,1000);
        $(this).off('keydown');
    });
    function showWpm(){
        wpm.text(`${Math.floor((input.val().length/(5*((Ttime-time)/60))+0.5))}`);
    }
    $('#end').click(function(){
        clearInterval(setWpm);
    });
}); //// use session storage for result page...