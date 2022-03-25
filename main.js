noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(1190, 150);

    poseNetModel = ml5.poseNet(video, modelLoaded);
    poseNetModel.on('pose', gotResults);
}

function modelLoaded() {
    console.log('PoseNet is ready!');
}

function gotResults(results) {
   if(results.length > 0) {
      console.log(results);

      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      rightWristX = results[0].pose.rightWrist.x;
      leftWristX = results[0].pose.leftWrist.x;

      difference = Math.floor(leftWristX - rightWristX);
   }
}

function draw() {
    background('#abcaff');
    fill("pink");
    stroke("black");
    square(noseX, noseY, difference);

    document.getElementById("width_and_height").innerHTML = "Width and Height of the square will be = " + difference + "px"; 
}