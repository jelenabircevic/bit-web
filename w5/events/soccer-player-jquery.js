$('#field').css('height', $(window).height());

$("#field").on("click", function (event) {
    if (counter > 0) {
        $("#player").animate({
            top: event.pageY - 50,
            left: event.pageX - 50
        }, 1000);
        counter--;
        $('#counter').text(counter);
    } else {
        $('#field').off();
    }
    
    if (counter == 0) {
        $('#player').fadeOut(500);
    }


});

$('#stop').on("click", function (event) {

    $('#field').off();

});

var xCenter = $(window).width() / 2 - 50;
var yCenter = $(window).height() / 2 - 50;
var counter = 10;

$(function () {
    $('#player').css({
        'top': yCenter,
        'left': xCenter
    })
});