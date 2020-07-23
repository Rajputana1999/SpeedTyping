$(document).ready(function(){
    let input = $('#inputText');
    let acc = $('#accuracy');
    acc.text(`0`);
    let setAcc;
    input.keydown(function(){
        setAcc = setInterval(showAcc,1000);
        $(this).off('keydown');
    });
    function showAcc(){
        acc.text(`${Math.floor((1-errors/keystrokes)*100 +0.5)}`);
    }
    $('#end').click(function(){
        clearInterval(setAcc);
    });
});