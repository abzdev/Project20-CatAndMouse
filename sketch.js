var tom, jerry, bg, bgImg;
var tomAnimation, jerryAnimation;
var tomImg1, tomImg2, tomImg3, tomImg4;
var jerryImg1, jerryImg2, jerryImg3, jerryImg4;

function preload() {
    tomImg1 = loadImage('images/tomOne.png');
    tomImg2 = loadImage( 'images/tomTwo.png');
    tomImg3 = loadImage('images/tomThree.png');
    tomImg4 = loadImage('images/tomFour.png');

    tomAnimation = loadAnimation(tomImg2,tomImg3);

    jerryImg1 = loadImage('images/jerryOne.png');
    jerryImg2 = loadImage('images/jerryTwo.png');
    jerryImg3 = loadImage('images/jerryThree.png');
    jerryImg4 = loadImage('images/jerryFour.png');

    jerryAnimation = loadAnimation(jerryImg2,jerryImg3);

    bgImg = loadImage('images/garden.png');
}

function setup(){
    createCanvas(600,600);
    
    bg = createSprite(300,300,10,10);
    bg.addImage(bgImg);
    
    tom = createSprite(400,500,10,10);
    tom.addAnimation('runningTom',tomAnimation);
    tom.addImage('sleepingTom',tomImg1);
    tom.addImage('sittingTom',tomImg4);
    tom.changeImage('sleepingTom');
    tom.scale = 0.15;

    jerry = createSprite(100,500,10,10);
    jerry.addAnimation('tauntingJerry',jerryAnimation);
    jerry.addImage('eatingJerry',jerryImg1);
    jerry.addImage('investigatorJerry',jerryImg4);
    jerry.changeImage('eatingJerry');
    jerry.scale = 0.1;

    //tom.debug = true;
    tom.setCollider('rectangle',0,0,1100,900,0);
    
    //jerry.debug = true;
    jerry.setCollider('rectangle',0,0,600,900,0);
}

function draw() {
    background(0);

    if(tom.isTouching(jerry)) {
        tom.changeImage('sittingTom');
        jerry.changeImage('investigatorJerry');
        tom.velocityX = 0;
        tom.scale = 0.17;
    }

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.changeAnimation('runningTom',tomAnimation);
        tom.scale = 0.17;
        jerry.changeAnimation('tauntingJerry',jerryAnimation);
    }
}
