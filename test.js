$(document).ready(function(){
    $("button").on("click", function (){
        $(".blue").toggle(200)

    })
    $(".greenb").on("click", function (){
        $(".green").toggle(200)
    })
});
/*
 *$(".zoom-area").each(function(){
 var zoom = $(this).find(".zoom");
 var zoomon = $(this).find(".zoomon");
 var image = new Image();
 image.src = zoomon.attr("src");
 zoom.css({
 background : "url('"+$(this).find(".zoomon").attr("src")+"') no-repeat"
 });
 var offset = $(this).offset();
 $(this).onmousemove(function(e){
 var x = e.pageX - offset.left;
 var y = e.pageY - offset.top;
 if(x > 0 && x < $(this).width() && y > 0 && y >$(this).height()){
 zoom.fadeIn(300)
 }
 });
 });
 console.log("hello world")
 */