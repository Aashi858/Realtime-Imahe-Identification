function preload(){}
function setup(){
    canvas = createCanvas(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5OsJ4SkcO/model.json",model_loaded);
}
function draw(){
     image(video,0,0,250,250);
     classifier.classify(video,getResult);
    
}
function model_loaded(){
    console.log("Model is loaded");
}
function getResult(error,results){
    if(error){
        console.error("error");
    }
    if(results){
       document.getElementById("object").innerHTML = results[0].label;
       document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}