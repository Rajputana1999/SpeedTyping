$(document).ready(function(){
    let input = $('#inputText');
    let wpm = $('#wpm');
    wpm.text(`0`);
    let setWpm;
    input.on('keydown',function(){
        setWpm = setInterval(showWpm,1000);
        $(this).off('keydown');
    });
    function showWpm(){
        wpm.text(`${Math.floor(input.val().length/(5*((Ttime-time)/60)))}`);
    }
    $('#end').click(function(){
        clearInterval(setWpm);
    });
});