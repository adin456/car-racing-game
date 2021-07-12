class Player{
    constructor(){
this.name=null;
this.rank=0;
this.distance=0;
this.index=0;
    
    }
getCount(){
    var playerCountref=database.ref('playerCount')
    playerCountref.on('value',(data)=>{
        playerCount=data.val()
    })
}
updateCount(count){
    var playerCountref=database.ref('/')
    playerCountref.update({
        playerCount:count
    })
}
update(){
    var playerIndex = "players/player" + this.index;
    database.ref (playerIndex).set({
        name:this.name,
        distance:this.distance,
        rank:this.rank
    })
}

static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on('value',(data)=>{
        allPlayers= data.val()
    })
}
static UpdateCarsAtEnd (rank){
    database.ref('/').update({
        CarsAtEnd:rank  
    })
}
GetCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
        this.rank=data.val()
    })
}
}