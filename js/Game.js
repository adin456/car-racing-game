class Game{
    constructor(){

    }  
    getState(){
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",(data)=>{
            gameState=data.val()
        })
    }
    update(state){
        var gameStateref=database.ref('/')
        gameStateref.update({
            gameState:state
        })
    }
    async start(){
        if(gameState==0){
            player=new Player()
            var playerCountref=await database.ref('playerCount').once('value');
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            form=new Form()
            form.display()
                
            
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
        car1.addImage(c1)
        car2.addImage(c2)
        car3.addImage(c3)
        car4.addImage(c4)
    }

        play(){
            form.hide()
            Player.getPlayerInfo()
          player.GetCarsAtEnd()  

            if(allPlayers!= undefined){
                background(ground)
                image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
                var index=0
                var x=175
                var y

                for (var plr in allPlayers){
                    index=index+1
                    x=x+200
                    y=displayHeight-allPlayers[plr].distance
cars[index-1].x=x
cars[index-1].y=y
if(index===player.index){
    fill("red")
    ellipse(x,y,60,60)
    camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y
}
                }
            }
            if(keyDown(UP_ARROW)&&player.index!=null){
                player.distance=player.distance+10
                player.update()
                    console.log(player.distance)
                
            }
            if(player.distance===3630){
                gameState=2
                player.rank=player.rank+1
                Player.UpdateCarsAtEnd(player.rank)
            }
            if(player.distance>3630){
                fill(0)
                textSize(30)
                text("Your Rank Is" + player.rank,displayWidth/2,y-150)
            }
            drawSprites()
        }
    end(){
        game.update(2)
    }
}
