$(document).ready(function(){
    $('#wpm').text(`Speed : ${Number(sessionStorage.wpm)}wpm`);
    $('#acc').text(`Accuracy : ${Number(sessionStorage.accuracy)}%`);
});