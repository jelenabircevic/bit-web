var ana = localStorage;
var milovan = sessionStorage;
(function () {
    console.log('Hello from the other side!');
    console.log('Platform on which this .js is running is '+ window.navigator.platform);
    console.log('Browser version on which this .js is running is '+ window.navigator.appVersion);
    console.log('Company that made the unknown browser: '+navigator.vendor);
    console.log('Current browser width: '+screen.availWidth + ', height: '+screen.availHeight);
    console.log('Max browser width: '+screen.width+ ', height: '+screen.height);
})();
(function isOnline() {
    if (navigator.onLine) {
        console.log('Online!');
    } else {
        console.log('Offline!');
    }
})();
(function(){
    console.log('Full URL: '+location.href);
    console.log('Domain name: '+location.hostname);
    console.log('Used protocol: '+location.protocol);
    console.log('URL parameters: '+location.search);
})();
(function (){
    location.reload();
});
(function () {
    location.href="http://bgit.rs";

});
var host = function () {

    location.href='https://www.b92.net';
    location.reload();
};
var new_data = function(key, value){
    ana.setItem(key, value);
    milovan.setItem(key, value+1);
}
var dataPrint = function(key) {
    if (!ana.getItem(key)) {
        console.log('There is no data!');
    } else {
        console.log(ana.getItem(key));
    }
}