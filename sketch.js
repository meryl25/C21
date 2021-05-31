var fixedrect, movingrect;
var fixed1, fixed2, fixed3


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(400,100,30,50)
  fixed1= createSprite(600, 200, 50, 50);
  fixed2= createSprite(400, 300, 50, 50);
  fixed3= createSprite(600, 100, 50, 50);
  fixed1.velocityY=-2
  fixed3.velocityY=3
  fixedrect.shapeColor= "white"
  movingrect.shapeColor= "white"
  fixed1.shapeColor= "white"
  fixed2.shapeColor= "white"
  fixed3.shapeColor= "white"


 
}

function draw() {
  background("black");
  movingrect.y = mouseY  
  movingrect.x = mouseX
  
  BounceOff(fixed1,fixed3)

  console.log(movingrect.x-fixedrect.x)

 if( isTouching(movingrect,fixed1)){
  movingrect.shapeColor= "purple"
  fixed1.shapeColor= "blue"
 }
 else{
  movingrect.shapeColor= "white"
  fixed1.shapeColor= "white"
 }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x < object2.width/2+ object1.width/2 && object2.x-object1.x<object2.width/2+ object1.width/2 && 
    object1.y-object2.y < object2.height/2+ object1.height/2 && object2.y-object1.y<object2.height/2+ object1.height/2 ){
      return (true)
   // object2.velocityY= object2.velocityY*-1
    //object1.velocityY= object1.velocityY*-1
  }
  else{
    return(false)

  }
}

function BounceOff(object1,object2){
  if(object1.x-object2.x < object2.width/2+ object1.width/2 && object2.x-object1.x<object2.width/2+ object1.width/2 && 
    object1.y-object2.y < object2.height/2+ object1.height/2 && object2.y-object1.y<object2.height/2+ object1.height/2 ){
     //return (true)
   object2.velocityY= object2.velocityY*-1
   object1.velocityY= object1.velocityY*-1
  }
  
}




