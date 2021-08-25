status="";
function preload(){

 }

function setup(){
canvas=createCanvas(340,340);
canvas.position(200,150);
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status:detecting all objects............";
}

function modelloaded(){
console.log("Duh");
status=true;
objectDetector.detect(img,resultgotie);
}