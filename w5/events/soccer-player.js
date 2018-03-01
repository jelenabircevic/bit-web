var field = document.querySelector('#field');
var player = document.querySelector('#player');
var stop = document.querySelector('#stop');
var tiredPlayer = true;
field.addEventListener('click', move);
stop.onclick = tired;

function move(e) {
    player.style.left = e.clientX - 50 + 'px';
    player.style.top = e.clientY - 50 + 'px';

}

function tired() {
    if (tiredPlayer) {
        field.removeEventListener('click', move);
        tiredPlayer = false;
        stop.value = 'Start moving again';
    } else {
        field.addEventListener('click', move);
        tiredPlayer = true;
        stop.value = 'Stop moving';
    }
}