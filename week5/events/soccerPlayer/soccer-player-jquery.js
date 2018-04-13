$('#field').css('height', $(window).height());

function move(event) {
    if (counter > 0 && moving) {
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
}

$("#field").on("click", move);

$('#stop').on("click", function (event) {
    if (moving) {
        event.target.value = 'Start moving again';
        $('#field').off();
        moving = !moving;    
    } else {
        event.target.value = 'Stop moving';
        $('#field').on('click', move);
        moving = !moving;
    }

});

var xCenter = $(window).width() / 2 - 50;
var yCenter = $('#field').height() / 2 - 50;
var counter = 10;
var moving = true;

$(function () {
    $('#player').css({
        'top': yCenter,
        'left': xCenter
    })
});