
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;
var block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35;
var block36,block37,block38,block39,block40;
var block41,block42,block43,block44,block45;
var block46,block47,block48,block49,block50;
var block51,block52,block53,block54,block55;
var block56,block57,block58,block59,block60;
var block61,block62,block63,block64,block65;
var block66,block67,block68,block69,block70;

var Snakes1,Snakes2,Snakes3,Snakes4,Snakes5;

var block1Img,block2Img,block3Img,block4Img,block5Img;
var block6Img,block7Img,block8Img,block9Img,block10Img;
var block11Img,block12Img,block13Img,block14Img,block15Img;
var block16Img,block17Img,block18Img,block19Img,block20Img;
var block21Img,block22Img,block23Img,block24Img,block25Img;
var block26Img,block27Img,block28Img,block29Img,block30Img;
var block31Img,block32Img,block33Img,block34Img,block35Img;
var block36Img,block37Img,block38Img,block39Img,block40Img;
var block41Img,block42Img,block43Img,block44Img,block45Img;
var block46Img,block47Img,block48Img,block49Img,block50Img;
var block51Img,block52Img,block53Img,block54Img,block55Img;
var block56Img,block57Img,block58Img,block59Img,block60Img;
var block61Img,block62Img,block63Img,block64Img,block65Img;
var block66Img,block67Img,block68Img,block69Img,block70Img;

var Snakes1Img,Snakes2Img,Snakes3Img;

var ladder, ladderImg,ladder2,ladder3,ladder4,ladder5;

var player1,player1Img,player2,player2Img,player3,player3Img,player4,player4Img;
var dice1,dice1Img,dice2Img,dice3Img,dice4Img,dice5Img,dice6Img;

function preload(){

  block1Img = loadImage("Images/block1.jpg");
  block2Img = loadImage("Images/block2.jpg");
  block3Img = loadImage("Images/block3.jpg");
  block4Img = loadImage("Images/block4.jpg");
  block5Img = loadImage("Images/block5.jpg");

  block6Img = loadImage("Images/block6.jpg");
  block7Img = loadImage("Images/block7.jpg");
  block8Img = loadImage("Images/block8.jpg");
  block9Img = loadImage("Images/block9.jpg");
  block10Img = loadImage("Images/block10.jpg");

  block11Img = loadImage("Images/block11.jpg");
  block12Img = loadImage("Images/block12.jpg");
  block13Img = loadImage("Images/block13.jpg");
  block14Img = loadImage("Images/block14.jpg");
  block15Img = loadImage("Images/block15.jpg");

  block16Img = loadImage("Images/block16.jpg");
  block17Img = loadImage("Images/block17.jpg");
  block18Img = loadImage("Images/block18.jpg");
  block19Img = loadImage("Images/block19.jpg");
  block20Img = loadImage("Images/block20.jpg");

  block21Img = loadImage("Images/block21.jpg");
  block22Img = loadImage("Images/block22.jpg");
  block23Img = loadImage("Images/block23.jpg");
  block24Img = loadImage("Images/block24.jpg");
  block25Img = loadImage("Images/block25.jpg");

  block26Img = loadImage("Images/block26.jpg");
  block27Img = loadImage("Images/block27.jpg");
  block28Img = loadImage("Images/block28.jpg");
  block29Img = loadImage("Images/block29.jpg");
  block30Img = loadImage("Images/block30.jpg");

  block31Img = loadImage("Images/block31.jpg");
  block32Img = loadImage("Images/block32.jpg");
  block33Img = loadImage("Images/block33.jpg");
  block34Img = loadImage("Images/block34.jpg");
  block35Img = loadImage("Images/block35.jpg");

  block36Img = loadImage("Images/block36.jpg");
  block37Img = loadImage("Images/block37.jpg");
  block38Img = loadImage("Images/block38.jpg");
  block39Img = loadImage("Images/block39.jpg");
  block40Img = loadImage("Images/block40.jpg");
  
  block41Img = loadImage("Images/block41.jpg");
  block42Img = loadImage("Images/block42.jpg");
  block43Img = loadImage("Images/block43.jpg");
  block44Img = loadImage("Images/block44.jpg");
  block45Img = loadImage("Images/block45.jpg");
  
  block46Img = loadImage("Images/block46.jpg");
  block47Img = loadImage("Images/block47.jpg");
  block48Img = loadImage("Images/block48.jpg");
  block49Img = loadImage("Images/block49.jpg")
  block50Img = loadImage("Images/block50.jpg");
  
  block51Img = loadImage("Images/block51.jpg");
  block52Img = loadImage("Images/block52.jpg");
  block53Img = loadImage("Images/block53.jpg");
  block54Img = loadImage("Images/block54.jpg");
  block55Img = loadImage("Images/block55.jpg");
  
  block56Img = loadImage("Images/block56.jpg");
  block57Img = loadImage("Images/block57.jpg");
  block58Img = loadImage("Images/block58.jpg");
  block59Img = loadImage("Images/block59.jpg");
  block60Img = loadImage("Images/block60.jpg");
  
  block61Img = loadImage("Images/block61.jpg");
  block62Img = loadImage("Images/block62.jpg");
  block63Img = loadImage("Images/block63.jpg");
  block64Img = loadImage("Images/block64.jpg");
  block65Img = loadImage("Images/block65.jpg");
  
  block66Img = loadImage("Images/block66.jpg");
  block67Img = loadImage("Images/block67.jpg");
  block68Img = loadImage("Images/block68.jpg");
  block69Img = loadImage("Images/block69.jpg");
  block70Img = loadImage("Images/block70.jpg");

  Snakes1Img = loadImage("Images/Snakes.png");
  Snakes2Img = loadImage("Images/Snake3.png");
  Snakes3Img = loadImage("Images/Snakes1.png");
  
  ladderImg = loadImage("Images/ladder2.png");

  player3Img = loadImage("Images/blue.png");
  player4Img = loadImage("Images/red.png");

  dice1Img = loadImage("Images/sprite_0.png");
  dice2Img = loadImage("Images/sprite_1.png");
  dice3Img = loadImage("Images/sprite_2.png");
  dice4Img = loadImage("Images/sprite_3.png");
  dice5Img = loadImage("Images/sprite_4.png");
  dice6Img = loadImage("Images/sprite_5.png");

}
function setup() {
  createCanvas(1200,800);

  block1 = createSprite(170,710,25,25);
  block1.addImage("block1",block1Img);
  block2 = createSprite(275, 710, 25, 25);
  block2.addImage("block2",block2Img);
  block3 = createSprite(380,710,25,25);
  block3.addImage("block3",block3Img);
  block4 = createSprite(485,710,25,25);
  block4.addImage("block4",block4Img);
  block5 = createSprite(590,710,25,25);
  block5.addImage("block5",block5Img);
 
  block6 = createSprite(695,710,25,25);
  block6.addImage("block6",block6Img);
  block7 = createSprite(800,710,25,25);
  block7.addImage("block7",block7Img);
  block8 = createSprite(905,710,25,25);
  block8.addImage("block8",block8Img);
  block9 = createSprite(1010,710,25,25);
  block9.addImage("block9",block9Img);
  block10 = createSprite(1115,710,25,25);
  block10.addImage("block10",block10Img);
  
  block11 = createSprite(1115,605,25,25);
  block11.addImage("block11",block11Img);
  block12 = createSprite(1010,605,25,25);
  block12.addImage("block12",block12Img);
  block13 = createSprite(905,605,25,25);
  block13.addImage("block13",block13Img);
  block14 = createSprite(800,605,25,25);
  block14.addImage("block14",block14Img);
  block15 = createSprite(695,605,25,25);
  block15.addImage("block15",block15Img);
  
  block16 = createSprite(590,605,25,25);
  block16.addImage("block16",block16Img);
  block17 = createSprite(485,605,25,25);
  block17.addImage("block17",block17Img);
  block18 = createSprite(380,605,25,25);
  block18.addImage("block18",block18Img);
  block19 = createSprite(275,605,25,25);
  block19.addImage("block19",block19Img);
  block20 = createSprite(170,605,25,25);
  block20.addImage("block20",block20Img);
  
  block21 = createSprite(170,500,25,25);
  block21.addImage("block21",block21Img);
  block22 = createSprite(275,500,25,25);
  block22.addImage("block22",block22Img);
  block23 = createSprite(380,500,25,25);
  block23.addImage("block23",block23Img);
  block24 = createSprite(485,500,25,25);
  block24.addImage("block24",block24Img);
  block25 = createSprite(590,500,25,25);
  block25.addImage("block25",block25Img);
  
  block26 = createSprite(695,500,25,25);
  block26.addImage("block26",block26Img);
  block27 = createSprite(800,500,25,25);
  block27.addImage("block27",block27Img);
  block28 = createSprite(905,500,25,25);
  block28.addImage("block28",block28Img);
  block29 = createSprite(1010,500,25,25);
  block29.addImage("block29",block29Img);
  block30 = createSprite(1115,500,25,25);
  block30.addImage("block30",block30Img);
  
  block31 = createSprite(1115,395,25,25);
  block31.addImage("block31",block31Img);
  block32 = createSprite(1010,395,25,25);
  block32.addImage("block32",block32Img);
  block33 = createSprite(905,395,25,25);
  block33.addImage("block33",block33Img);
  block34 = createSprite(800,395,25,25);
  block34.addImage("block34",block34Img);
  block35 = createSprite(695,395,25,25);
  block35.addImage("block35",block35Img);
  
  block36 = createSprite(590,395,25,25);
  block36.addImage("block36",block36Img);
  block37 = createSprite(485,395,25,25);
  block37.addImage("block37",block37Img);
  block38 = createSprite(380,395,25,25);
  block38.addImage("block38",block38Img);
  block39 = createSprite(275,395,25,25);
  block39.addImage("block39",block39Img);
  block40 = createSprite(170,395,25,25);
  block40.addImage("block40",block40Img);
  
  block41 = createSprite(170,290,25,25);
  block41.addImage("block41",block41Img);
  block42 = createSprite(275,290,25,25);
  block42.addImage("block42",block42Img);
  block43 = createSprite(380,290,25,25);
  block43.addImage("block43",block43Img);
  block44 = createSprite(485,290,25,25);
  block44.addImage("block44",block44Img);
  block45 = createSprite(590,290,25,25);
  block45.addImage("block45",block45Img);
  
  block46 = createSprite(695,290,25,25);
  block46.addImage("block46",block46Img);
  block47 = createSprite(800,290,25,25);
  block47.addImage("block47",block47Img);
  block48 = createSprite(905,290,25,25);
  block48.addImage("block48",block48Img);
  block49 = createSprite(1010,290,25,25);
  block49.addImage("block49",block49Img);
  block50 = createSprite(1115,290,25,25);
  block50.addImage("block50",block50Img);
  
  block51 = createSprite(1115,185,25,25);
  block51.addImage("block51",block51Img);
  block52 = createSprite(1010,185,25,25);
  block52.addImage("block52",block52Img);
  block53 = createSprite(905,185,25,25);
  block53.addImage("block53",block53Img);
  block54 = createSprite(800,185,25,25);
  block54.addImage("block54",block54Img);
  block55 = createSprite(695,185,25,25);
  block55.addImage("block55",block55Img);
  
  block56 = createSprite(590,185,25,25);
  block56.addImage("block56",block56Img);
  block57 = createSprite(485,185,25,25);
  block57.addImage("block57",block57Img);
  block58 = createSprite(380,185,25,25);
  block58.addImage("block58",block58Img);
  block59 = createSprite(275,185,25,25);
  block59.addImage("block59",block59Img);
  block60 = createSprite(170,185,25,25);
  block60.addImage("block60",block60Img);
  
  block61 = createSprite(170,80,25,25);
  block61.addImage("block61",block61Img);
  block62 = createSprite(275,80,25,25);
  block62.addImage("block62",block62Img);
  block63 = createSprite(380,80,25,25);
  block63.addImage("block63",block63Img);
  block64 = createSprite(485,80,25,25);
  block64.addImage("block64",block64Img);
  block65 = createSprite(590,80,25,25);
  block65.addImage("block65",block65Img);
  
  block66 = createSprite(695,80,25,25);
  block66.addImage("block66",block66Img);
  block67 = createSprite(800,80,25,25);
  block67.addImage("block67",block67Img);
  block68 = createSprite(905,80,25,25);
  block68.addImage("block68",block68Img);
  block69 = createSprite(1010,80,25,25);
  block69.addImage("block69",block69Img);
  block70 = createSprite(1115,80,25,25);
  block70.addImage("block70",block70Img);

  Snakes = createSprite(420,360,25,25);
  Snakes.addImage("Snakes",Snakes1Img);
  Snakes2 = createSprite(1015,190,25,25);
  Snakes2.addImage("Snakes2",Snakes2Img);
  Snakes2.scale = 0.3;
  Snakes3 = createSprite(1020,500,25,25);
  Snakes3.addImage("Snakes3",Snakes3Img);
  Snakes3.scale = 0.6;
  Snakes4 = createSprite(420,360,25,25);
  Snakes4.addImage("Snakes4",Snakes3Img);
  Snakes4.scale = 0.4;
  Snakes5 = createSprite(166,511,25,25);
  Snakes5.addImage("Snakes5",Snakes2Img);
  Snakes5.scale = 0.4;

  ladder = createSprite(695,520,15,15);
  ladder.addImage("ladder",ladderImg);
  ladder.scale = 0.5;
  ladder2 = createSprite(900,175,15,15);
  ladder2.addImage("ladder2",ladderImg);
  ladder2.scale = 0.4;
  ladder3 = createSprite(380,180,15,15);
  ladder3.addImage("ladder3",ladderImg);
  ladder3.scale = 0.4;
  ladder4 = createSprite(1115,600,15,15);
  ladder4.addImage("ladder4",ladderImg);
  ladder4.scale = 0.4;
  ladder5 = createSprite(270,500,15,15);
  ladder5.addImage("ladder5",ladderImg);
  ladder5.scale = 0.4;

  player1 = createSprite(40,700,25,25);
  player1.addImage("player1",player4Img);
  player1.scale = 0.2;
  player2 = createSprite(80,700,25,25);
  player2.addImage("player2",player3Img);
  player2.scale = 0.2;

  dice1 = createSprite(70,90,25,25);
  dice1.addImage("dice1",dice1Img);
  dice1.addImage("1",dice2Img);
  dice1.addImage("2",dice3Img);
  dice1.addImage("3",dice3Img);
  dice1.addImage("4",dice4Img);
  dice1.addImage("5",dice5Img);
  dice1.addImage("6",dice6Img);

}

function draw() {
  background("#611213");  
  text(mouseX+","+mouseY,200,20);
  //diceControl();
  player1Movement();
  player2Movement();
  if(mousePressedOver(dice1)){
    var rand = Math.round(random(1,6));
    if(rand === 1){
      dice1.changeImage("1",dice1Img);
    }
    else if(rand===2){

      dice1.changeImage("2",dice2Img);
    }
    else if(rand === 3){
      dice1.changeImage("3",dice3Img);
    }    
    else if(rand === 4){
      dice1.changeImage("4",dice4Img);
    }    
    else if(rand === 5){
      dice1.changeImage("5",dice5Img);
    }    
    else if(rand === 6){
      dice1.changeImage("6",dice6Img);
    }    
  }
  ladderMovement();
  ladderMove();
  snakesMovemet();
  drawSprites();

}
//function diceControl(){
  
    // switch(rand){
    //   case 1: dice1.addImage("1",dice1Img);
    //   break;
    //   case 2: dice1.addImage("2",dice2Img);
    //   break;
    //   case 3: dice1.addImage("3",dice3Img);
    //   break;
    //   case 4: dice1.addImage("4",dice4Img);
    //   break;
    //   case 5: dice1.addImage("5",dice5Img);
    //   break;
    //   case 6: dice1.addImage("6",dice6Img);
    //   break;
    // }
    
  //}

function player1Movement(){
  if(keyDown(RIGHT_ARROW)){
    player1.x=player1.x+10;
  }
  if(keyDown(LEFT_ARROW)){
    player1.x = player1.x-10;
  }
  if(keyDown(UP_ARROW)){
    player1.y = player1.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player1.y = player1.y+10;
  }
}
function player2Movement(){
  if(keyDown("D")){
    player2.x=player2.x+10;
  }
  if(keyDown("A")){
    player2.x = player2.x-10;
  }
  if(keyDown("W")){
    player2.y = player2.y-10;
  }
  if(keyDown("S")){
    player2.y = player2.y+10;
  }
}

function ladderMovement(){
  if(player1.x >1090 && player1.y > 690){
    player1.x=1118;
    player1.y=493;
  }
  if(player2.x >1090 && player2.y >690){
    player2.x = 1118;
    player2.y=493;
  }
}

function ladderMove(){
  if(player1.x > 665 && player1.x < 695 && player1.y > 585 && player1.y < 620){
    player1.x=700;
    player1.y=390;
  }
  if(player1.x > 875 && player1.x < 905 && player1.y > 265 && player1.y < 295){
    player1.x=906;
    player1.y=73;
  }
  if(player1.x > 255 && player1.x < 275 && player1.y > 580 && player1.y < 610){
    player1.x=270;
    player1.y=377;
  }
  if(player1.x > 350 && player1.x < 375 && player1.y > 260 && player1.y < 285){
    player1.x=380;
    player1.y=63;
  }
  if(player2.x > 665 && player2.x < 695 && player2.y < 585 && player2.y <620){
    player2.x=700;
    player2.y=390;
  }
  if(player2.x > 875 && player2.x < 905 && player2.y > 265 && player2.y < 295){
    player2.x=906;
    player2.y=73;
  }
  if(player2.x > 255 && player2.x < 275 && player2.y > 580 && player2.y < 610){
    player2.x=270;
    player2.y=377;
  }
  if(player2.x > 350 && player2.x < 375 && player2.y > 260 && player2.y < 285){
    player2.x=380;
    player2.y=63;
  }
}
function snakesMovemet(){
  if(player1.x > 1100 && player1.x < 1127 && player1.y > 382 && player1.y < 408){
    player1.x=903;
    player1.y=601;
  }
  if(player1.x > 153 && player1.x < 182 && player1.y > 375 && player1.y < 408){
    player1.x=157;
    player1.y=612;
  }
  if(player1.x > 465 && player1.x < 485 && player1.y > 270 && player1.y < 295){
    player1.x=367;
    player1.y=401;
  }
  if(player1.x > 240 && player1.x < 270 && player1.y > 165 && player1.y < 195){
    player1.x=583;
    player1.y=498;
  }
  if(player1.x > 1000 && player1.x < 1030 && player1.y > 60 && player1.y < 90){
    player1.x=1002;
    player1.y=281;
  }
  if(player2.x > 1100 && player2.x < 1127 && player2.y > 382 && player2.y < 408){
    player2.x=903;
    player2.y=601;
  }
  if(player2.x > 153 && player2.x < 182 && player2.y > 375 && player2.y < 408){
    player2.x=157;
    player2.y=612;
  }
  if(player2.x > 465 && player2.x < 485 && player2.y > 270 && player2.y < 295){
    player2.x=367;
    player2.y=401;
  }
  if(player2.x > 240 && player2.x < 270 && player2.y > 165 && player2.y < 195){
    player2.x=583;
    player2.y=498;
  }
  if(player2.x > 1000 && player2.x < 1030 && player2.y > 60 && player2.y < 90){
    player2.x=1002;
    player2.y=281;
  }
}