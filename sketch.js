var wall,car
var speed,weight
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(0)
  wall = createSprite(1400, 200, 40,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  deformation = weight*speed*speed/45000;
}

function draw() {
  background(225,225,255);
  car.collide(wall);
  car.velocityX = speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
  if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor =color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}

