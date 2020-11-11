var rect1;
var rect2;
var object3,object4,object5,object6;

function setup() {
  createCanvas(600,600);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(200,300,20,40);
  rect1.debug=(true);
  rect2.debug=(true);
  rect1.shapeColor="red";
  rect2.shapeColor="red";

  object3=createSprite(100,100,10,50);
  object5=createSprite(100,200,10,50);
  object4=createSprite(200,100,10,50);
  object6=createSprite(250,100,10,50);
  object3.shapeColor="green";
  object4.shapeColor="yellow";
  object5.shapeColor="orange";
  object6.shapeColor="brown";
}

function draw() {
  background(0,235,0); 
  rect2.x=mouseX;
  rect2.y=mouseY; 
 /* console.log(rect2.x);
  console.log(rect1.x);
  console.log(rect1.width/2);
  console.log(rect2.width/2);*/
  if(isTouching(object6, rect2)){
    object6.shapeColor="blue";
    rect2.shapeColor="blue";
  }else{
    object6.shapeColor="brown";
    rect2.shapeColor="red";
  }

  

  
  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<=obj2.width/2+obj1.width/2
    && obj2.x-obj1.x<=obj2.width/2+obj1.width/2
    && obj1.y-obj2.y<=obj2.height/2+obj1.height/2
    && obj2.y-obj1.y<=rect1.height/2+obj1.height/2
    ){
    return true
  }else{
   
    return false
  }
}