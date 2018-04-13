function validateForm(form) {
    var inputLabel = form.firstChild;
    var x;
    for (i=0; i<form.children.length; i++) {
        inputLabel = inputLabel.nextElementSibling;
        x = inputLabel.firstElementChild
        if(x.hasAttribute('required') && x.value=='') {
           x.classList.add("red_border")
        } else {
            if (x.classList.contains("red_border")) {
                x.classList.remove("red_border");
            }
        }
    }
}