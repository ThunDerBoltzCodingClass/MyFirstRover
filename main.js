canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

background_img= "mars.jpg";
rover_img= "rover.png";
rover_x= 10;
rover_y= 10;
rover_height= 90;
rover_width= 100;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadbackground;
    background_imgTag.src= background_img;

    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src= rover_img;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(){

    keyPressed=e.keyCode;
    if(keyPressed=='37'){
left();
console.log("left")
    }
    if(keyPressed=='39'){
        right();
        console.log("right")
            }

if(keyPressed=='38'){
    up();
    console.log("up")
        }

        if(keyPressed=='40'){
            down();
            console.log("down")
                }
    }