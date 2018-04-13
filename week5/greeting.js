function greeting(){
    console.log("I'm in!");
    alert('Hello, my friend!');
    var answer = prompt('What will you do today at six o\'clock?');
    var yorn = confirm('We will tell to Marko Arsic that you are going to '+ answer.toLowerCase());
    if (yorn) {
        alert ('Marko is not pleased!');
    }
};

console.log("script...");
greeting();