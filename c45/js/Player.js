class Player {

constructor(){
this.name = null;
this.index = null;
}

  updatePlayerCount(player){
    database.ref('playerCount').set({
      playerCount:player
    });
  }


  readPlayerCount(){
  var playerRef = database.ref('playerCount')
  playerRef.on("value",function(data){
    playerCount = data.val();
  });
}

updatePlayerDetails(){
  var plrIndex = "players"+ this.index
  database.ref(plrIndex).set({
    name: this.name
  });
}

static getPlayerInfo(){
  var plrInfo = database.ref('players')
  plrInfo.on("value",function(data){
    allPlrs = data.val();
  })
}
}

