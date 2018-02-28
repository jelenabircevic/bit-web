var field = document.querySelector('#field');
var player = document.querySelector('#player');
var stop = document.querySelector('#stop');
stop.onclick = tired;
field.addEventListener('click', move);

function move(e) {
    player.style.left = e.clientX - 50 + 'px';
    player.style.top = e.clientY - 50 + 'px';

}

function tired() {
    field.removeEventListener('click', move);
}