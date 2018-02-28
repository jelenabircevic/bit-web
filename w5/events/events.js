function changeBackground() {
    var body = document.querySelector("body");
    body.classList.toggle("dark");
    body.classList.toggle("light");
}

var auto = false;
var timer;
var toggleAuto = document.querySelector('.auto')
function automaticToggle() {

    if (auto == false) {
        timer = setInterval(changeBackground, 1000);
        auto = true;
        toggleAuto.value = "Turn off automatic toggle";
    } else {
        clearInterval(timer);
        auto = false;
        toggleAuto.value = "Turn on";
    }
}