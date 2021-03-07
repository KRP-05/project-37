class Form{
    constructor(){
         this.input1=createInput("name")
         this.input2=createInput("answer")
         this.button=createButton('Submit');
         this.title=createElement('h2')
         
    }
    hide(){
        this.input1.hide();
            this.button.hide();
            this.input2.hide();
            this.title.hide();
            
    }
    display(){
       
        this.title.html("Quiz Game")
        this.title.position(400,0)

        
        
        this.input1.position(200,260)
        this.button.position(400,300)
        this.input2.position(500,260)
        this.button.mousePressed(()=>{
            this.input1.hide();
            this.button.hide();
            this.input2.hide()
            player.name=this.input1.value();
            player.answer = this.input2.value();
            playerCount+=1;
            player.index=playerCount
            player.update()
          player.updateCount(playerCount)
            textSize(25)
            
            
        });
    }

}