$(document).ready(function(){
    let spd = Number(sessionStorage.wpm);
    let acc = Number(sessionStorage.accuracy);
    if(isNaN(spd))spd = 0;
    if(isNaN(acc))acc = 0;
    $('#wpm').text(`Speed : ${spd} words per minute`);
    $('#acc').text(`Accuracy : ${acc}%`);
});