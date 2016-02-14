/**
 * Created by brahim on 05/02/2016.
 */

$(document).ready(function(){

    $("html").niceScroll();


    //start jquery
    $(".header").height($(window).height());
    //scroll jquery
    $(".header .arrow i").click(function(){
        $('html,body').animate({
            scrollTop: $(".our-work").offset().top
        },800);


    });
    //show more

    var righttArrow = $(".fa-chevron-right");
    var leftArrow = $(".fa-chevron-left");

    function testimonials(){
        if($(".clients:first").hasClass("active")){
            leftArrow.fadeOut(50);
        }else{
            leftArrow.fadeIn(50);
        };
        if($(".clients:last").hasClass("active")){
            righttArrow.fadeOut(50);
        }else{
            righttArrow.fadeIn(50);
        };
    };
    testimonials();
    $(".testimonials i").on("click",function(){
        if($(this).hasClass('fa-chevron-right')){
            $(".testimonials .active ").fadeOut(function (){
                $(this).removeClass("active").next(".clients").addClass("active").fadeIn(500);
                testimonials();
            })
        }else {
            $(".testimonials .active ").fadeOut(function (){
                $(this).removeClass("active").prev(".clients").addClass("active").fadeIn(500);
                testimonials();
            })
        }

    });
    $(document).on("scroll",(function() {

        if($(document).scrollTop() >= $(".our-work").offset().top -150 ){
            $(".our-work").animate({opacity:'1'},500)
        }
        if($(document).scrollTop() >= $(".testimonials").offset().top -150 ){
            $(".testimonials").animate({opacity:'1'},500)
        }
        if($(document).scrollTop() >= 150){
            $(".navbars").addClass("white");

        }
        if($(document).scrollTop() <= 150   ){
            $(".navbars").removeClass("white")
        }
    })
    );
    $(".show-more").on("click",function(){
        $(".our-work .hidden").fadeIn(800);
    });
    $(".test li").slideUp(0);
    $(".test").on("click",function(){
        $("li",this).slideToggle();
    });
    $(".allbuton").on("click", function () {
      $(".new").show(250);
    });
    $(".manbutton").on("click", function () {
        $(".kids , .woman").hide(250);
    });
    $(".kidsbutton").on("click", function () {
        $(".man , .woman").hide(250);
    });
    $(".womanbutton").on("click", function () {
        $(".kids , .man").hide(250);
    });
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }

});