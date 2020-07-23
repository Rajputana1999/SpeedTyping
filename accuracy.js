$(document).ready(function(){
    let input = $('#inputText');
    let acc = $('#accuracy');
    acc.text(`0`);
    let setAcc;
    input.one('keypress',function(){
        setAcc = setInterval(showAcc,1000);
    });
    function showAcc(){
        if(keystrokes!=0)acc.text(`${Math.floor((1-errors/keystrokes)*100 +0.5)}`);
        else acc.text(`0`);
    }
    $('#end').click(function(){
        clearInterval(setAcc);
        if(keystrokes!=0)sessionStorage.accuracy=Math.floor((1-errors/keystrokes)*100 +0.5);
        else sessionStorage.accuracy=0;
    });
});