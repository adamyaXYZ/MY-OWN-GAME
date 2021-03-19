var  PC,npcGroup;
var npcImg,PCanimation;
var weapon;
function preload() {
  npcImg = loadImage("NPC.png")
}
function setup() {
  createCanvas(800,400);
  PC= createSprite(400,200,10,10)
  PC.shapeColor = "red";
  PC.addAnimation(PCanimation)
  weapon = createSprite(PC.x,PC.y,10,100)
  weapon.depth = PC.depth-10;
  npcGroup = new Group()
}

function draw() {
  weapon.x= PC.x;
  weapon.y = PC.y
  background(255);
  edege = createEdgeSprites()
  PC.collide(edege)
  if(keyDown(UP_ARROW)){
    PC.velocityY = -2
  }
  else if(keyDown(RIGHT_ARROW)){
    PC.velocityX = 2
  }
  else if(keyDown(LEFT_ARROW)){
    PC.velocityX = -2
  }
  else{
    PC.velocityX = 0;
  }
  if(keyDown(65)){
    weapon.rotation--
  }
  if(keyDown(68)){
    weapon.rotation++
  }
  
  PC.velocityY = PC.velocityY+0.8
  enemySpawn()
  drawSprites();
  
  
  
  
  
  
  
  
  
  
  
}
function enemySpawn() {
  if(frameCount%10 === 0){
    npc = createSprite(random(10,800),0,20,20)
    npc.velocityY = 3
    npc.lifetime = 267;
    npc.addImage(npcImg)
    npc.scale = 0.1
    npcGroup.add(npc)
    npc.debug = true;
    npc.setCollider("circle",100,10,150)
      
    console.log(npcGroup.isTouching(PC))
    if(npcGroup.collide(PC)){
      fill("blue")
      textSize(10)
      text("you lose",400,200) 
      console.log("youdnid")
      PC.remove()
    }
    if(npcGroup.isTouching(weapon)){
      npc.remove()
    }

  }
}