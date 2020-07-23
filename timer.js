let Ttime = 60; //time should be in seconds
let time = Ttime;
$(document).ready(function(){
    let timer = $('#timer');
    let t=`${Math.floor(time/60)}:`;
    if(time%60<10)t+=`0`;
    t+=`${time%60}`;
    timer.text(t);
    let setTime;
    $('#inputText').one('keypress', function(){
        setTime = setInterval(decTime,1000);
    });
    function decTime(){
        if(--time < 0){
            timer.text(`  Time over !!!`);
            $('#end').click();
        }
        else{
            t=`${Math.floor(time/60)}:`;
            if(time%60<10)t+=`0`;
            t+=`${time%60}`;
            timer.text(t);
        }
    }
    //End button
    $('#end').click(function(){
        clearInterval(setTime);
    });

    // Ttime = Total Time ,  time = remaining time , Ttime - time = elapsed time
});