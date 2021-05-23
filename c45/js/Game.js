class Game {
  
  constructor(){}


updateGameState(state){
  database.ref('gameState').set({
    gameState:state
  });
}

readGameState(){
  var gameStateRef = database.ref('gameState')
  gameStateRef.on("value",function(data){
    gameState = data.val();
  })
}

async start(){
 
  player = new Player()
 
  var playerCountRef = await database.ref('playerCount').once("value"); 
  if(playerCountRef.exists()){
     playerCount = playerCountRef.val(); 
    player.readPlayerCount(); 
  }
  form = new Form()
    form.display();
  
  plr1 = createSprite(200,200)
  plr2 = createSprite(200,300)
  players = [plr1,plr2]
}

play(){
  form.hide()
  Player.getPlayerInfo();
  if (allPlrs != undefined){
    var index = 0;
    for (var p in allPlrs){
      index += 1;
      if (index === player.index){
        fill("blue")
      }else fill("white")
      
    }
  }
}

}