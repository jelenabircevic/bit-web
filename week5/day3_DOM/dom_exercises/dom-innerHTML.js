// u konzoli nalazimo node-ove i prosledjujemo f-ji kao drugi argument (someNode)
// var firstDiv = document.querrySelector('div.first');
// poziv f-je: createDropdown([neki stringovi], firstDiv)
// firstDiv ==> someNode

function createDropdown(stringArr, someNode) {
    var newEl = document.createElement('select');
    for (var i = 0; i<stringArr.length; i++) {
        var newOpt = document.createElement('option');
        var content = document.createTextNode(stringArr[i]);
        newOpt.appendChild(content);
        newEl.appendChild(newOpt);
    }
    someNode.appendChild(newEl);
}

function innerHTMLDropdown(stringArr, someNode) {
    var s = '<select>\n';
    for (var i =0; i<stringArr.length; i++) {
        s += '<option>'+stringArr[i]+'</option>\n';
    }
    s += '</select>'
    s = someNode.innerHTML + s;
    someNode.innerHTML = s;
    console.log(s);
}

// Dodavanje <option> postojecem <select>-u
// u konzoli nalazimo zeljeni <select> kojem hocemo da dodamo nove <option>

function updateDropdown(stringArr, dropdown) {
    for (var i = 0; i<stringArr.length; i++) {
        var newOpt = document.createElement('option');
        var content = document.createTextNode(stringArr[i]);
        newOpt.appendChild(content);
        dropdown.appendChild(newOpt);
    }
}