//Create variables here
var dog,happyDog;
var database;
var foodStock,foodS;

function preload()
{
  //load images here
  dogImg = loadImage("images/dog.png");
  happyDog = loadImage("images/happyDog.png");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  console
  .log(database);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  
  dog = createSprite(200,200,10,10)
  dog.addImage("dog",dogImg)
  dog.addImage("happyDog",happyDog)
  dog.scale = 0.2;
  
}


function draw() { 
  background(46,139,87);
  drawSprites();
  //add styles here

  if(keyIsDown(UP_ARROW)){
    //console.log(foodS)
    writeStock(foodS)
    dog.changeImage("happyDog",happyDog)
  }
  fill("red")
textSize(20)
text("press up arrow key to feed drago", 200,50)

  

}

function writeStock(f){
  if(f<=0){
    f=0
  }
  else{
    f = f-1
  }
  database.ref('/').set({
    
     food:f,
     
  })
}

function readStock(data){
foodS = data.val();
console.log(foodS)
}



  





