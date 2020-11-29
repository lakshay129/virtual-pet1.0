var dog,happydog,database;
var happydogi,dogi;
var foodS,foodStack;
var addFood,feed;
var fedTime,lastFed;
var foodObj;

function preload()
{
  dogi=loadImage("Dog.png");
  happydogi=loadImage("happydog.png");
}

function setup() {
  createCanvas(460, 800);
  
  dog=createSprite(250,400,4,5);
  dog.scale=0.5;
  dog.addImage(dogi)

//referring to firebase database 
  database=firebase.database();

 //referring foodStack to food node in database
  foodStack=database.ref('food')

 //On func. is used to read value of foodStack from readData  
  foodStack.on("value",readData);


}


function draw() {  
  background("blue");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogi);
    console.log("lakshay");
  }

  drawSprites();
  textSize(20)
  text ("PRESS UP_ARROW to Feed the dog",100,30);

}

//readData is a func. help in catching value from database
function readData(data){
  foodS=data.val();
}

// writeStock is a func. to write value in database
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



