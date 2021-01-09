
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3;
var ball,dustbinA,dustbinimg;
function preload(){
	dustbinimg=loadImage("DUSTBIN.png");
}

function setup() {
	createCanvas(1000,700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground=new Ground(500,650);
	dustbin1=new Dustbin(800,630,150,20,);
	dustbin2=new Dustbin(715,550,20,180,);
	dustbin3=new Dustbin(885,550,20,180,);
	ball=new paperBall(100,400,50);
}
function draw() {
 background("blue");
 rectMode(CENTER);
 background(0);
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ball.display();
 dustbinA=createSprite(800,525,100,75);
dustbinA.addImage(dustbinimg);
dustbinA.scale=0.55;
 pushBall();
 textSize(15)
 text("let the ball rest then press space",200,200);
 drawSprites();
}
function pushBall(){
	if (keyDown("space"))(
       Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-65})
	)
	}