//Create database objects,gamestate and playercount ,form,reading and writing gamestate and playercount
var database;
var gameState, playerCount;
var form,game,player;
var plr1,plr2, players;
var allPlrs;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game
  game.readGameState()
  game.start()
}

function draw(){

  if( playerCount === 2){
    game.updateGameState(1)
  }
  if (gameState === 1){
    game.play()
  }
}


