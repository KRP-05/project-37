class Game{
    constructor(){

    }
    gamestate(){
        var gamestateref=database.ref('gamestate');
        gamestateref.on("value",function(data){
            gamestate=data.val();
        })
        

    }
    update(state){
database.ref('/').update({
    gamestate:state
})
    }
    async start() {
        if(gamestate===0){
            player=new Player();
            var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount();
            }
            
            form=new Form()
            form.display()
        }
    }

play(){ 
    form.hide()
    textSize(30)
    fill("black")
    background("yellow")
    text("Results Of Quiz Are",230,50)
    Player.getPlayerInfo()
        if(allContstans!==undefined){
            var displayPosition=250
            for(var plr in allContstans){
                var corectAns ="4"
                if(corectAns===allContstans[plr].answer)
                fill("green")
                else
                fill("red")
                displayPosition+=20
                textSize(15)
                text(allContstans[plr].name+":"+allContstans[plr].answer,400,displayPosition)
            }
}
}
}