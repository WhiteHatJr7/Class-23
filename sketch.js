const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var Box1,Box2;



function setup() {
  createCanvas(400,400);
myEngine=Engine.create();
myWorld=myEngine.world;
Box1 = new Box(200,300,50,50);
Box2 = new Box(240,100,50,100);
ground = new Ground(200,390,400,20);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  Box1.display();
  Box2.display();
  ground.display();

 
}