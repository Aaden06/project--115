function preload(){
     
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(725,300);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', getposes);
}
function getposes(results){
    console.log(results);
}
function modelLoaded(){
    console.log("postNet is enabled");
}
function draw(){
    image(video, 0, 0, 600, 500);

}
function download(){
    save('myPhoto.png');
}