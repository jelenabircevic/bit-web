function text (order){   
    var li;
    var message;
    li = document.querySelector(".navigation>li:nth-of-type("+order+")");
    li.className = "selected";
    message = li.textContent;
    alert(message);
}

function replaceText(newText, order) {
    var li;
    li = document.querySelector(".navigation>li:nth-of-type("+order+")");
    li.textContent = newText;
}


