/* VARIABLES */
let player, walls, obstacle, sun, water;
let startButton;
let screen = 0;

/* PRELOAD LOADS FILES */
function preload(){

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(1000,400);
  background(200);

  showScreen0();
}

/* DRAW LOOP REPEATS */
function draw() {
  if (screen == 0) {
    if (startButton.mouse.presses()) {
      screen = 1;
      showScreen1();
    }
  } 

  if (screen == 1) {
    background(200);

    // Draw start and end 
    fill(0);
    textSize(20);
    textAlign(LEFT);
    text("Start", 330, 20);
    text("End", 22, 395);

    //Move the player
    if (kb.pressing("left")) {
      player.vel.x = -3;
    } else if (kb.pressing("right")) {
      player.vel.x = 3;
    } else if (kb.pressing("up")) {
      player.vel.y = -3;
    } else if (kb.pressing("down")) {
      player.vel.y = 3;
    } else {
      player.vel.x = 0;
      player.vel.y = 0;
    }

    //If player touches obstacle, start again
    if (player.collides(obstacle)) {
      player.x = 350;
      player.y = 50;
    }

    //If player collects water, seed grows
    if (player.collides(water)) {
      water.x = -500;
      player.width = 40;
      player.height = 40;
    }

    //If player collects sun, change sprite image
    if (player.collides(sun)) {
      sun.x = -500;
      player.color = "green";
    }

    //Cannot go above the maze
    if(player.y < 20){
      player.y = 20;
    }

    // You win
    if(player.y > 375){
      youWin();
    }
  }
}

/* FUNCTIONS */
function showScreen0(){
  //Create the title
  fill(0);
  textSize(35);
  textAlign(CENTER);
  text("Create your \nown garden", 200, 50);

  // Draw the directions to the screen
  fill(0);
  textSize(16);
  text("Follow the journey of a tiny seed as it grows into \na beautiful flower. To move the seed use the arrow \nkeys. Navigate carefully, gathering nutrients \nand water.", 200, 150);

  //Create the play button
  startButton = new Sprite(200,300,100,70, 'k');
  startButton.color = "yellow";
  startButton.textColor = "black";
  startButton.textSize = 20;
  startButton.text = "Click to \nStart";
}

function drawMaze(){
  //Create the maze
  walls = new Group();
  walls.color = color(0);
  walls.collider = "s";

  new walls.Sprite(160, 10, 300, 5,);
  new walls.Sprite(10, height/2, 5, height - 15);  
  new walls.Sprite(150, 60, 5, 100);
  new walls.Sprite(width/2 + 35, 390, 325, 5);
  new walls.Sprite(50, 300, 75, 5); 
  new walls.Sprite(340, 146, 110, 5);
  new walls.Sprite(340, 250, 110, 5);
  new walls.Sprite(285, 198, 5, 109);
  new walls.Sprite(185, 332, 5, 109);
  new walls.Sprite(190, 197, 185, 5);
  new walls.Sprite(395, 200, 5, 380);
}

function showScreen1() {
  //Draw button off of screen
  startButton.pos = { x: -500, y: -100 };

  //Create player
  player = new Sprite(350,50,30,30);
  player.rotationLock = true;
  player.text = "seed";
  player.textSize = 10;

  //Create obstacle
  obstacle = new Sprite(120,100,40,40, "k");
  obstacle.rotationLock = true;
  obstacle.text = "bird";

  //Create sun
  sun = new Sprite(130,300,40,40, "k");
  sun.rotationLock = true;
  sun.text = "sun";

  //Create water
  water = new Sprite(190,50,40,40, "k");
  water.rotationLock = true;
  water.text = "water";

  //Draw the maze
  drawMaze();  
}

function youWin(){
  background(255);

  //Draw sprites off of screen
  obstacle.pos = { x: -500, y: -500 };
  player.pos = { x: -500, y: 380 };
  walls.x = -1000;
4444
  //Add text to screen 3
  fill(0);;
  textSize(18);
  textAlign(LEFT);
  text("You blossomed a beautiful garden.", 25, 175);
    text("Watching a seed grow into a thriving \nplant fills us with hope for the future\n and motivates us to keep move.", 25, 275);
}