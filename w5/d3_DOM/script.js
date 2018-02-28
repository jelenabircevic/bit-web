function borderswitch (gal, img) {
    var node;
    var target;
    node = document.querySelector(".selected");
    node.className = "";
    target = document.querySelector("div:nth-of-type("+gal+")>img:nth-of-type("+img+")");
    target.className = "selected";
}