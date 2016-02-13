$(document).ready(function(){
        $(".test").on("click",function(){
            $("li",this).slideToggle();
        });
})