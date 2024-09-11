var x = document.querySelector(':root');
var y = document.querySelector(':root');

var xvalue = 0;
var yvalue = 0;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        var lchange = -20;
        xvalue += lchange;
        x.style.setProperty('--distance-x', xvalue + "px");
        console.log("ball move left");
    }
    else if(event.keyCode == 38) {
        var uchange = -20;
        yvalue += uchange;
        y.style.setProperty('--distance-y', yvalue + "px");
        console.log("ball move up");
    }
    else if(event.keyCode == 40) {
        var dchange = 20;
        yvalue += dchange;
        y.style.setProperty('--distance-y', yvalue + "px");
        console.log("ball move down");
    }
    else if(event.keyCode == 39) {
        var rchange = 20;
        xvalue += rchange;
        x.style.setProperty('--distance-x', xvalue + "px");
        console.log("ball move right");
    }
});