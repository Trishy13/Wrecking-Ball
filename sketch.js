const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld, myEngine;



function setup(){
createCanvas(1200,600);

myEngine = Engine.create();
myWorld = myEngine.world;

ground = new Ground(600,500,1000,20);

ball = new Ball(500,300);
sling = new Slingshot(ball.body,{x:500,y:100});

box1 = new Box(680,455);
box2 = new Box(680,375);
box3 = new Box(680,305);
box4 = new Box(680,235);
box5 = new Box(680,165);
box6 = new Box(680,90);

box11 = new Box(765,455);
box22 = new Box(765,375);
box33 = new Box(765,305);
box44 = new Box(765,235);
box55 = new Box(765,165);
box66 = new Box(765,90);

box01 = new Box(850,455);
box02 = new Box(850,375);
box03 = new Box(850,305);
box04 = new Box(850,235);
box05 = new Box(850,165);
box06 = new Box(850,90);



}

function draw(){
    Engine.update(myEngine);
    background("blue");

    ground.display();
    ball.display();
    sling.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box11.display();
    box22.display();
    box33.display();
    box44.display();
    box55.display();
    box66.display();
    
    box01.display();
    box02.display();
    box03.display();
    box04.display();
    box05.display();
    box06.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY});
}

function keyPressed(){

    if(keyCode === 32 && ball.body.speed <3){
  Matter.Body.setPosition(ball.body,{x : 200, y: 70})
    }
}
