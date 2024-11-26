$(document).ready(function() {

    var i = 4; // slide number

    // image slide
    setInterval(function() {
        i--;

        // if (i === 3) $("article img").css("right", "0");
        // $("article img").eq(i).animate({"right": "1200px"}, 500);

        if (i === 3) $("article img").css("display", "block");
        $("article img").eq(i).fadeOut(500);

        if (i <= 1) i = 4;
    }, 2000);

    // $(".menu").hover(function() {
    //     $(".submenu").stop().slideDown();
    // }, function() {
    //     $(".submenu").stop().slideUp();
    // });

    // menu
    $(".menu li").hover(function() {
        $(this).find(".submenu li").stop().slideDown();
    }, function() {
        $(this).find(".submenu li").stop().slideUp();
    });

});