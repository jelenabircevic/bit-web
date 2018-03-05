$(function(){
    $('li:eq(0)').addClass('bottom-border');
// $('li').addClass('upper');
var currVal = $('li:eq(3)').text();
console.log(currVal);
currVal = currVal.toLowerCase();
$('li:eq(3)').text($('li:eq(3)').text().toUpperCase());
$('li.active').addClass('whatever');
var middle = parseInt($('li').length/2);
console.log(middle);
$('li:eq('+middle+')').addClass('background');
})