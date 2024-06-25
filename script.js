let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let img = document.querySelector("img")

const CANVAS_WIDTH = canvas.width = 384;
const CANVAS_HEIGHT = canvas.height = 384;


const spriteWidth = 82;
const spriteHeight = 114;

let gameFrame = 0;
let stagger = 0;
let staggerFrame = 13;

function animate() {
    if(stagger == staggerFrame){
        if(gameFrame < 4){
            ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            let frameX = spriteWidth * gameFrame;
            let frameY = spriteHeight * 0;
            ctx.drawImage(img, frameX, frameY, spriteWidth ,spriteHeight, 0, 0, 384, 384);
                gameFrame++;
        }else{
            gameFrame = 0;
        }
        stagger = 0
    }   

    stagger++;
    


    requestAnimationFrame(animate)
}



animate();

