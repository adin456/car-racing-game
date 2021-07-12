class Form{
    constructor(){
        this.input=createInput("Name")
        this.button1=createButton("Play")
        this.button2=createButton("Reset")
        this.greeting=createElement("H1")
        this.title=createElement("H2")
    }
        display(){
            this.title.position(displayWidth/2-100,50)
            this.input.position(displayWidth/2-100,displayHeight/2)
            this.button1.position(displayWidth/2-100,displayHeight/2+100)
            this.title.html("Car Racing Game")
            this.button2.position(displayWidth-200,50)
            this.button1.mousePressed(()=>{
                this.input.hide();
                this.button1.hide();
                player.name=this.input.value();
                playerCount=playerCount+1;
                player.index=playerCount;
                player.update();
                player.updateCount(playerCount);
                this.greeting.html("welcome "+player.name);
                this.greeting.position(displayWidth/2-100,displayHeight/2);
                
            })
            this.button2.mousePressed(()=>{
game.update(0)
player.updateCount(0)
Player.UpdateCarsAtEnd(0)
database.ref('/').update({players:null})
            })
        }

        hide(){
            this.input.hide()
            this.button1.hide()
            this.greeting.hide()
this.title.hide()
        }
    }
