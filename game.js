var canvas = document.getElementById("gamescreen");
var ctx = canvas.getContext("2d");
var x = 20;
var y = 10;
var dir = 1
var gameOver = false;
var snakePathx = [];
var snakePathy = [];

ctx.beginPath();
ctx.rect(0,0, 100, 100);
ctx.fillStyle = "#FFFF00";
ctx.fill();
ctx.closePath();

window.addEventListener('keydown', function(event) { //checks input and changes dir
    switch (event.keyCode) {
        case 37: // Left
            dir = 1;
        break;
        case 38: // Up
            dir = 2;
        break;
        case 39: // Right
            dir = 3;
        break;
        case 40: // Down
            dir = 4;
        break;
    }
}, false);

let timeout = 1000;
setTimeout(gameLoop, timeout); //runs the loop on a delay

function gameLoop() {
    draw(x,y);
    if(x>40||x<0) { //gameover has not been made yet
        gameOver = true;
    }
    if(y>20||y<0) {
        gameOver = true;
    }
    switch(dir) { // moves the character
            case 1:
                x+=1;
            break;
            case 2:
                y+=1;
            break;
            case 3:
                y-=1;
            break;
            case 4:
                x-=1;
            break;
    }
    if (!gameOver) {
        setTimeout(gameLoop, timeout); //runs the loop on a delay
    }
}

function draw(cordx,cordy) {
    ctx.beginPath();
    ctx.rect(cordx*40, cordy*40, 40, 40);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
