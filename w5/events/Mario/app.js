var mario = document.querySelector('#mario');
var runner = document.querySelector('#running');
var ground = document.querySelector('.container');
var timer;
var run = false;
ground.style.backgroundPositionX = '100px';
document.addEventListener('keydown', startRunning);
document.addEventListener('keyup', stopRunning);
function runMarioRun() {
    mario.style.display = 'none';
    runner.style.display = 'block';
}
function freeze() {
    mario.style.display = 'block';
    runner.style.display = 'none';
}
function startRunning(e) {
    if (e.keyCode == 39 && !run) {
        runMarioRun();
        timer = setInterval(groundMove, 50);
        run = true;
    } else {
        return;
    }
}
function stopRunning(e) {
    if (e.keyCode == 39) {
        freeze();
        clearInterval(timer);
        run = false;
    }
}
/* onkeydown = function(e) {
    if (e.keyCode == 39) {
        runMarioRun();
        timer = setInterval(groundMove(), 50);
    }
}
onkeyup = function(e) {
    if (e.keyCode == 39) {
        freeze();
        clearInterval(timer);
    }
} */
function groundMove() {
    ground.style.backgroundPositionX = (parseInt(ground.style.backgroundPositionX) - 10) + 'px';
}