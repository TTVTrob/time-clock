const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var getBackgroundImg;

var bg = "sunrise1.png"

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,850);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
        background(backgroundImg);    
    Engine.update(engine);

    // write code to display time in correct format here
    

}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=0700){
        bg = "sunrise1.png";
    }
    if(hour>=0700 && hour<=0800){
        bg = "sunrise2.png";
    }
    if(hour>=0800 && hour<=0900){
        bg = "sunrise3.png";
    }
    if(hour>=0900 && hour<=1000){
        bg = "sunrise4.png";
    }
    if(hour>=1000 && hour<=1100){
        bg = "sunrise5.png";
    }
    if(hour>=1100 && hour<=1200){
        bg = "sunrise6.png";
    }
    if(hour>=1700 && hour<=1800){
        bg = "sunset7.png";
    }
    if(hour>=1800 && hour<=1900){
        bg = "sunset8.png";
    }
    if(hour>=1900 && hour<=2000){
        bg = "sunset9.png";
    }
    if(hour>=2000 && hour<=2100){
        bg = "sunset10.png";
    }
    if(hour>=2200 && hour<=2300){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

