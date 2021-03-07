class Player{
    constructor(){
this.index=null
this.answer = null
this.name=null

    }
    getCount(){
        var playerCountref=database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            playerCount=data.val();
        })
        

    }
    update(){
        var playerIndex ="players/player"+playerCount
database.ref(playerIndex).set({
    name:this.name,
    answer:this.answer
    
})
} 
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })

}
static getPlayerInfo(){
    var playerInfoRef=database.ref('players')
    playerInfoRef.on('value',(data)=>{
        allContstans=data.val();
    })
}
}