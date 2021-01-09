
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3,ball,ground

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	bin1 = new Bin(700,600,120,150);
	
	ball=new Ball(250,250,20)
	
	ground=new Ground(width/2,height,1000,30)
	   
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  bin1.display()
  
  ball.display()
  ground.display()
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:30})
	}
}


