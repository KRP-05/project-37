var canvas;
var gamestate=0,playerCount=null,allContstans ;
var database,form,player,game;
function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  game =new Game()
  game.gamestate();
  game.start()
}


function draw(){
  background("pink");
  textSize(20)
  fill("black")
  text("QUESTION: What starts with letter 'E', but has only one letter??",10,100)
  text("1. Everyone",20,150)
  text("2. Example",20,170)
  text("3. Estimate",20,190)
  text("4. Envelope",20,210)
  if(playerCount===4){
    game.update(1)
  }
  if(gamestate===1){
    clear()
    game.play()
  }
  text("Question")
}
