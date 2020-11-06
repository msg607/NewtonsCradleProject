
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;
  bobDiameter=40;
	bob1 = new Bob(500,550,40,40);
	bob2 = new Bob(550,550,40,40);
	bob3 = new Bob(600,550,40,40);
	bob4 = new Bob(650,550,40,40);
	bob5 = new Bob(700,550,40,40);
  roof1 = new Roof(650,250,2000,20);
	
//	ground1 = new Roof(400,650,900,20);

  rope1= new Rope(bob1.body, roof1.body, -bobDiameter*4, 0);
  rope2= new Rope(bob2.body, roof1.body, -bobDiameter*2, 0 );
  rope3= new Rope(bob3.body, roof1.body, 0, 0)
  rope4= new Rope(bob4.body, roof1.body, bobDiameter*2, 0);
  rope5= new Rope(bob5.body, roof1.body, bobDiameter*4, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  //ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32)
  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-400,y:400});
}


