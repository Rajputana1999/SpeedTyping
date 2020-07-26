$(document).ready(function(){
    let ele = $("#box")[0];
    ele.scrollTop=0;
    $("#inputText").scroll(function(){
        console.log(this.scrollTop);
        ele.scrollTop=this.scrollTop;
    });
});