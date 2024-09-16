var x = document.querySelector(':root');
var y = document.querySelector(':root');

var xvalue = 0;
var yvalue = 0;
/*
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
*/
window.addEventListener(
    "keydown",
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
  
        switch (event.key) {
            case "ArrowDown":

                // Do something for "down arrow" key press.
                var dchange = 20;
                yvalue += dchange;
                y.style.setProperty('--distance-y', yvalue + "px");
                console.log("ball move down");
                break;
            case "ArrowUp":
                // Do something for "up arrow" key press.
                var uchange = -20;
                yvalue += uchange;
                y.style.setProperty('--distance-y', yvalue + "px");
                console.log("ball move up");
                break;
            case "ArrowLeft":
                // Do something for "left arrow" key press.
                var lchange = -20;
                xvalue += lchange;
                x.style.setProperty('--distance-x', xvalue + "px");
                console.log("ball move left");
                break;
            case "ArrowRight":
                // Do something for "right arrow" key press.
                var rchange = 20;
                xvalue += rchange;
                x.style.setProperty('--distance-x', xvalue + "px");
                console.log("ball move right");
                break;
            case "Enter":
            // Do something for "enter" or "return" key press.
            break;
            case " ":
            // Do something for "space" key press.
            break;
            case "Escape":
            // Do something for "esc" key press.
            break;
            default:
            return; // Quit when this doesn't handle the key event.
        }
    
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    },
    true,
  );
  