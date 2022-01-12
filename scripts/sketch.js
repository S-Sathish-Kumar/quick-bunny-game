var player,
  target,
  obstacle1,
  obstacle2,
  obstacle3,
  obstacle4,
  obstacle5,
  obstacle6,
  obstacle7,
  obstacle8,
  obstacle9,
  obstacle10,
  obstacle11,
  snakeGroup,
  snake,
  snake2,
  playerImage,
  targetImage,
  snakeImage,
  bg,
  bgImage;

function preload() {
  playerImage = loadImage("images/bunnyImg.png");
  targetImage = loadImage("images/carrot.png");
  snakeImage = loadImage("images/snake.png");
  bgImage = loadImage("images/bg.png");
}

function setup() {
  createCanvas(1500, 1000);
  bg = createSprite(750, 500);
  bg.addImage(bgImage);
  bg.scale = 8;

  snakeGroup = new Group();

  edges = createEdgeSprites();

  player = createSprite(50, 900, 15, 15);
  player.addImage(playerImage);
  player.scale = 0.4;
  player.shapeColor = "white";

  target = createSprite(1400, 100, 30, 30);
  target.shapeColor = "pink";
  target.addImage(targetImage);
  target.scale = 0.3;

  obstacle1 = createSprite(0, 350, 160, 20);
  obstacle2 = createSprite(300, 350, 160, 20);
  obstacle3 = createSprite(600, 350, 160, 20);
  obstacle4 = createSprite(900, 350, 160, 20);
  obstacle5 = createSprite(1200, 350, 160, 20);
  obstacle6 = createSprite(1500, 350, 160, 20);
  obstacle7 = createSprite(150, 500, 160, 20);
  obstacle8 = createSprite(450, 500, 160, 20);
  obstacle9 = createSprite(750, 500, 160, 20);
  obstacle10 = createSprite(1050, 500, 160, 20);
  obstacle11 = createSprite(1350, 500, 160, 20);

  obstacle1.shapeColor = "brown";
  obstacle2.shapeColor = "brown";
  obstacle3.shapeColor = "brown";
  obstacle4.shapeColor = "brown";
  obstacle5.shapeColor = "brown";
  obstacle6.shapeColor = "brown";
  obstacle7.shapeColor = "brown";
  obstacle8.shapeColor = "brown";
  obstacle9.shapeColor = "brown";
  obstacle10.shapeColor = "brown";
  obstacle11.shapeColor = "brown";
}

function draw() {
  background("green");
  stroke("red");

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  if (keyDown("up")) {
    player.y = player.y - 5;
  }
  if (keyDown("down")) {
    player.y = player.y + 5;
  }
  if (keyDown("left")) {
    player.x = player.x - 5;
  }
  if (keyDown("right")) {
    player.x = player.x + 5;
  }

  generateSnakes();

  for (var i = 0; i < snakeGroup.length; i++) {
    var temp = snakeGroup.get(i);
    if (player.isTouching(temp)) {
      player.x = 50;
      player.y = 900;
    }
  }

  if (player.isTouching(obstacle1)) {
    text("You Lose", 200, 200);
    obstacle1.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle2)) {
    text("You Lose", 200, 200);
    obstacle2.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle3)) {
    text("You Lose", 200, 200);
    obstacle3.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle4)) {
    text("You Lose", 200, 200);
    obstacle4.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle5)) {
    text("You Lose", 200, 200);
    obstacle5.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle6)) {
    text("You Lose", 200, 200);
    obstacle6.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle7)) {
    text("You Lose", 200, 200);
    obstacle7.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle8)) {
    text("You Lose", 200, 200);
    obstacle7.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle9)) {
    text("You Lose", 200, 200);
    obstacle7.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle10)) {
    text("You Lose", 200, 200);
    obstacle7.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(obstacle11)) {
    text("You Lose", 200, 200);
    obstacle7.velocityX = 0;
    player.x = 50;
    player.y = 900;
  }
  if (player.isTouching(target)) {
    text("You Won", 200, 200);
  }

  drawSprites();

  textSize(50);
}

function generateSnakes() {
  if (frameCount % 100 == 0) {
    snake = createSprite(
      random(50, 950),
      random(50, 350),
      random(5, 10),
      random(5, 10)
    );
    snake2 = createSprite(
      random(150, 950),
      random(550, 800),
      random(4, 10),
      random(5, 10)
    );
    snake.addImage(snakeImage);
    snake2.addImage(snakeImage);
    snake.scale = 0.7;
    snake2.scale = 0.7;
    snake.velocityX = random(-5, 0);
    snake2.velocityX = random(-5, 0);
    snake.shapeColor = "yellow";
    snake2.shapeColor = "yellow";
    snakeGroup.add(snake);
    snakeGroup.add(snake2);
  }
}
