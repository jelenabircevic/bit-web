$(function() {
    console.log("Hello!");
    console.log($('p'));
    console.log(document.querySelectorAll('p'));
});
console.log("Before loading.");
console.log($('p'));
console.log(document.querySelector('p'));