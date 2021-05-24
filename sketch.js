var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events
var Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var particle

var count = 0;

var gameState = "PLAY";

var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

  border_left = new Border(0, 400, 10, 800);
  border_down = new Border(400, 800, 800, 10);
  border_right = new Border(800, 400, 10, 800);
  border_up = new Border(400, 0, 800, 10)


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


  for (var a = 50; a <=width; a=a+50) {
    
       plinkos.push(new Plinko(a,75, 10));
    }

  for (var b = 25; b <=width-10; b=b+50) {
    
       plinkos.push(new Plinko(b,175,10));
  }

  for (var c = 50; c <=width; c=c+50) {
    
       plinkos.push(new Plinko(c,275,10));
  }

  for (var d = 25; d <=width-10; d=d+50){
    
       plinkos.push(new Plinko(d,375,10));
  }
  
}
 


function draw() {
  if(gameState = "PLAY"){
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); 
   }
   
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 550 && particle.body.position.x < 166 || particle.body.position.y > 550 && particle.body.position.x > 640){
       score = score + 500;
       count = count+1
       particle = null;
     }
   }

   if(particle!= null){
     particle.display();
     if(particle.body.position.y > 550 && particle.body.position.x > 166 && particle.body.position.x < 330 || particle.body.position.y > 540 && particle.body.position.x > 490 && particle.body.position.x < 650){
       score = score + 200;
       count = count + 1;
       particle = null;
     }
   }

   if(particle!= null){
     particle.display();
     if(particle.body.position.y > 550 && particle.body.position.x > 330 && particle.body.position.x < 490){
       score = score + 100;
       count = count + 1
       particle = null;
     }
   }

   
   

   

   text("Score : " + score, 40, 40);
   text("Count : " + count, 180, 40)
   fill("white");
   text(mouseX + "," + mouseY, mouseX, mouseY);
   textSize(30)
   text("500", 15, 540);
   text("500", 95, 540);
   text("200", 175, 540);
   text("200", 255, 540);
   text("100", 335, 540);
   text("100", 415, 540);
   text("200", 495, 540);
   text("200", 575, 540);
   text("500", 655, 540);
   text("500", 735, 540);

   fill("brown")

   border_left.display();
   border_down.display();
   border_right.display();
   border_up.display(); 

   if(count >= 5) gameState = "END"
  }
  if(gameState === "END"){
    background("black");
    fill("white");
    text("Congrats. You scored " + score, 200, 300);
    text("Press the 'Refresh' Button to try again", 150, 400);    
  }
}

// function particle(){
//   if(frameCount%60===0){
//     particles.push(new Particle(random(width/2-200, width/2+200), 10,10));
//     // score = score + 1;
//   }
// }

function mousePressed(){
      particle = new Particle(mouseX, 10, 10, 10);
       // particles.push(new Particle(mouseX, 10, 10, 10));  
  }

