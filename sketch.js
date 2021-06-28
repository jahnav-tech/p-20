var bg,sleep,astronaut

function preload(){

bg=loadImage('iss.png')
sleep=loadAnimation('sleep.png')
brush=loadAnimation('brush.png')
gym=loadAnimation('gym1.png','gym2.png','gym11.png','gym12.png')
eat=loadAnimation('eat1.png','eat2.png')
bath=loadAnimation('bath1.png','bath2.png')
move=loadAnimation('move.png','move1.png')
}
function setup() {
  createCanvas(600,500);
  astronaut=createSprite(300, 230);
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1

}

function draw() {
  background(bg);  
  drawSprites();
textSize(20)
fill('white')
text('instuctions',20,30)
text('Up Arrow= Brushing',20,50 )
text('Down Arrow= Gymming',20,80 )
text('left Arrow= eating',20,110 )
text('Right Arrow= Bathing',20,140 )
text('M key= Moving',20,170 )

if(keyDown('up')){

astronaut.addAnimation('brushing',brush)
astronaut.changeAnimation('brushing')
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
}

if(keyDown('down')){

  astronaut.addAnimation('gymming',gym)
  astronaut.changeAnimation('gymming')
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }

  if(keyDown('left')){

    astronaut.addAnimation('eating',eat)
    astronaut.changeAnimation('eating')
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
    if(keyDown('right')){

      astronaut.addAnimation('bathing',bath)
      astronaut.changeAnimation('bathing')
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }

      if(keyDown('m')){

        astronaut.addAnimation('moving1',move)
        astronaut.changeAnimation('moving1')
        astronaut.y=350;
        //astronaut.velocityX=1;
      // astronaut.velocityY=1;
        }

}