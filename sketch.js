//gamestates
var PLAY=1;
var END=0;
var gameState=1;
//score
var score=0;
//sword
  var sword;  
//fruits and enemies
var fruit; 
var enemy;
//images
var simg; 
var fimg1;
var fimg2;
var fimg3;
var fimg4;
var aimg1;
var aimg2;
var go
var gos

function preload(){
  //sword
  simg = loadImage("sword.png");
  //fruits
  fimg1 = loadImage("fruit1.png");
  fimg2 = loadImage("fruit2.png");
  fimg3 = loadImage("fruit3.png");
  fimg4 = loadImage("fruit4.png");
  //aliens
  aimg1 = loadImage("alien1.png");
  aimg2 = loadImage("alien2.png");
  //gameover
  go = loadImage ("gameover.png")
  gos = loadSound ("gameover.mp3")
}
function setup(){
 createCanvas(500,500);
  
  sword = createSprite(40,200,20,20);
sword.addImage(simg);
  sword.scale=0.7; 
  
  fgroup= new Group ();
  egroup= new Group (); 
}
  
function fruitfnc() {
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    fruit.velocityX=-10;
    r=Math.round(random(1,4));
  if(r == 1) {
    fruit.addImage(fimg1);
  } else if(r == 2) {
    fruit.addImage(fimg2);
  } else if(r == 3) {
    fruit.addImage(fimg3);
  } else {
    fruit.addImage(fimg4);
  }
   
    fruit.y = Math.round(random(50,340));
  fgroup.add(fruit);
  }
}
function enemy() {
 if(World.frameCount%200 === 0) {
    alien = createSprite(400,200,20,20)
  
   alien.addImage(aimg1);
   
   alien.y = Math.round(random(100,300));
   
  alien.velocityX = -8;
  
   alien.setLifetime = 50;
   
   alien.scale = 1;
    
    
    egroup.add(alien);
  }
}

function draw(){
  background("cyan");
  
  if (gameState === PLAY){
fruitfnc();
enemy();
      
    sword.addImage(simg);
    
    sword.x=mouseX
    sword.y=mouseY

text("score:"+score,400,55);
 
      if(egroup.isTouching(sword)) {
   egroup.destroyEach();
   sword.x=200;
   sword.y=200;
        gameState = END;
       gos.play();
 }
    
        if(fgroup.isTouching(sword)) {
   fgroup.destroyEach();
   score = score+2;
 }
  
                         }
  
  if (gameState === END) {
    
    fruit . lifetime=0.01;
    sword.x=200;
    sword.y=200;
    sword.addImage(go);
   
  }
  
  
  
  
  
    
 
                         
  
  
   
 

  
  drawSprites();
}

