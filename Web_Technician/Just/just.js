$(document).ready(function() {

    $(".main").hover(function() {
        $(".submenu").stop().slideDown();
    }, function() {
        $(".submenu").stop().slideUp();
    });

    var i = 4;

    setInterval(function() {

        i--;
        if (i === 3) $(".slider div").css("right", "0");
        $(".slider div").eq(i).animate({"right": "1200px"}, 500);
        if (i <= 1) i = 4;

    }, 2000);

});