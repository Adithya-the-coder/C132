img = "";

function preload(){
    img = loadImage('fruit.jpg');
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
    text("Bananas - 0.92 confidence", 45, 75);
    noFill();
    stroke("#000000");
    rect(30, 60, 330, 350);
    fill("#000000");
    text("Oranges - 0.67 confidence", 360, 100);
    noFill();
    stroke("#000000");
    rect(340, 80, 300, 320);
    fill("#000000");
    text("Pears - 0.72 confidence", 170, 170);
    noFill();
    stroke("#000000");
    rect(150, 150, 230, 250);
}