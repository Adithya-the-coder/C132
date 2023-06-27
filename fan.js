img = "";

function preload(){
    img = loadImage('fan.jpg');
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
    fill("#000000");
    text("Fan - 0.76 confidence", 30, 30);
    noFill();
    stroke("#000000");
    rect(20, 20, 600, 400);
}