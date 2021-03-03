function setup() {
  createCanvas(800,400);
  boil=createSprite(400, 200, 50, 50);
  plate=createSprite(400,200,30,30);
  boil.shapeColor="yellow"
  plate.shapeColor="orange"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  boil.x=mouseX;
  boil.y=mouseY;
  if(boil.x-plate.x < plate.width/2+boil.width/2
    &&plate.x-boil.x < plate.width/2+boil.width/2
    &&boil.y-plate.y < plate.width/2+boil.width/2
    &&plate.y-boil.y < plate.width/2+boil.width/2){
      boil.shapeColor="blue"
      plate.shapeColor="lavender"
    } else {
boil.shapeColor="yellow"
plate.shapeColor="orange"
}
}