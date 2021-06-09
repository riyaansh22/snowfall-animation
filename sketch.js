const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var snow1;
var snowArray =[];

function preload(){
  backgroundImage = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  drawSprites();

  if(frameCount%40===0){
    snow1=new Snow(random(10,width-10),random(10,50),60)
    console.log(snow1)
    snowArray.push(snow1)
    
    }
    for(var i=0;i<snowArray.length;i++){
    snowArray[i].display()
    }
}