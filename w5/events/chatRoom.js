var messageBoard = document.querySelector('.message_board');
var textInput = document.querySelector('input');
var sendButton = document.querySelector('#send');
sendButton.onclick = sendMessage;
onkeydown = function(e) {
    if (e.keyCode == 13) {
        sendMessage();
    }
}
function sendMessage() {
    var mess = textInput.value.split(" ");
    for (var i = mess.length-1; i >= 0; i--) {
        if (mess[i] == '') {
            mess.splice(i, 1);
        }
    }
    mess = mess.join(' ');
    textInput.value = mess;
    console.log(mess);
    if (mess != '') {
        var message = document.createTextNode(mess);
        var newP = document.createElement('p');
        newP.appendChild(message);
        messageBoard.appendChild(newP);
        textInput.value = "";
        messageBoard.scrollTop = messageBoard.scrollHeight;
    }
}