rd = Math.floor(Math.random()*255)+1;
geen = Math.floor(Math.random()*255)+1;
bue = Math.floor(Math.random()*255)+1;

function preload(){}

function setup(){
canvas = createCanvas(300,300,0,0,360);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,300,300)
}

function takeSnapshot(){
    save('image_name.png');
}