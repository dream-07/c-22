const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8,
    
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball2 =Bodies.circle(200,80,12,ball_options);
  World.add(world,ball2);
  
  ball3 = Bodies.circle(300,50,10,ball_options);
  World.add(world,ball3);

  ball4 =Bodies.circle(300,80,12,ball_options);
  World.add(world,ball4);

  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      
  con2 = Matter.Constraint.create({
  bodyA:ball ,
  bodyB:ball2,
  length:113,
  stiffness:0.1,
  });

  World.add(world,con2);

  con3 = Matter.Constraint.create({
    bodyA:ball3 ,
    bodyB:ball4,
    length:113,
    stiffness:1.0,
    });
  
    World.add(world,con3);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,12);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,12);
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  line(ball3.position.x,ball3.position.y,ball4.position.x,ball4.position.y);
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.05,y:0});
    }
}

