var mustachex=0;
var mustachey=0;

function preload()
{
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet Is Initialized");
}

function gotPoses(results)
{
 if(results.length>0){
     console.log(results);
     mustachex= results[0].pose.mustache.x-10;
     mustachey = results[0].pose.mustache.y-10;
     console.log("mustachex = "+results[0].pose.mustache.x);
     console.log("mustachey = "+results[0].pose.mustache.y);
 }
}

function draw()
{
image(video, 0, 0, 300, 300);
image(mustache, mustachex, mustachex, 25, 25);
}

function take_snapshot()
{
    save('My Mustache.png');
}