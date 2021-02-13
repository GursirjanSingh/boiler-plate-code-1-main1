var a,b;



function setup(){
createCanvas(800,600);
a = createSprite(150,300,90,10);
a.shapeColor = "red"
b = createSprite(200,300,90,10);
b.shapeColor = "blue"
}

function draw(){
  background(0);
a.x = mouseX;
a.y = mouseY;

if(a.x-b.x<a.width/2 + b.width/2 && b.x-a.x<b.width/2 + a.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<b.height/2+a.height/2){
  a.shapeColor = "blue";
  b.shapeColor = "red";

}
else{
  a.shapeColor = "red";
  b.shapeColor = "blue";

}
drawSprites()
}