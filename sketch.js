
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1
 var Roof1
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	Roof1 = new Roof(550,10,300,70)
bob1 = new Bob(640,580);
bob2= new Bob(600,580);
bob3= new Bob(560,580);
bob4= new Bob(520,580);
bob5= new Bob(480,580);
rope1 = new Ropes(bob1,Roof1,-bobDiameter*2,0);
	
  
}


function draw() {
  rectMode(CENTER);
	background(220);
	if(up_arrow())
     bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 Roof1.display();
 rope1.display();
 }
 function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10})
	}
 }


