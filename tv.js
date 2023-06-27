img = "";

function preload(){
    img = loadImage('tv.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}



function modelLoaded(){
    console.log("model loaded!");
    stat = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FFFFFF");
    text("Television - 0.93 confidence", 45, 75);
    noFill();
    stroke("#000000");
    rect(30, 60, 600, 350);
}