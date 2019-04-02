const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameObj1 = {};
let gameObj2 = {};
let temp;

function setup(){
  gameObj1.pos = new Vector2d(200,200);
  gameObj1.vel = new Vector2d(1,2);
  gameObj1.point = new Point(0,0,150,"yellow");
  gameObj1.point.position(gameObj1.pos);
  gameObj1.rad = new Vector2d(1,1);
  gameObj1.tan = new Vector2d(1,1);

  gameObj2.pos = new Vector2d(600,300);
  gameObj2.vel = new Vector2d(2,-3);
  gameObj2.point = new Point(0,0,150,"pink");
  gameObj2.point.position(gameObj2.pos);
  gameObj2.rad = new Vector2d(1,1);
  gameObj2.tan = new Vector2d(1,1);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height);

  gameObj1.pos.add(gameObj1.vel);
  gameObj2.pos.add(gameObj2.vel);


  if(gameObj1.pos.dx<gameObj1.point.r || gameObj1.pos.dx > canvas.width - gameObj1.point.r){
    gameObj1.vel.dx = - gameObj1.vel.dx;
  }
  if(gameObj1.pos.dy<gameObj1.point.r || gameObj1.pos.dy > canvas.height - gameObj1.point.r){
    gameObj1.vel.dy = - gameObj1.vel.dy;
  }
  if(gameObj2.pos.dx<gameObj2.point.r || gameObj2.pos.dx > canvas.width - gameObj2.point.r){
    gameObj2.vel.dx = - gameObj2.vel.dx;
  }
  if(gameObj2.pos.dy<gameObj2.point.r || gameObj2.pos.dy > canvas.height - gameObj2.point.r){
    gameObj2.vel.dy = - gameObj2.vel.dy;
  }
  gameObj1.point.position(gameObj1.pos);
  gameObj1.point.draw(context);

  gameObj2.point.position(gameObj2.pos);
  gameObj2.point.draw(context);

  gameObj1.rad.diffenceVector(gameObj1.pos,gameObj2.pos);
  gameObj2.rad.diffenceVector(gameObj2.pos,gameObj1.pos);

  gameObj1.vel.draw(context,gameObj1.point.x,gameObj1.point.y,20);
  gameObj2.vel.draw(context,gameObj2.point.x,gameObj2.point.y,20);

  if(gameObj1.rad.r < gameObj1.point.r + gameObj2.point.r){
    // magnitude rad vector = 1
    gameObj1.rad.r = 1;
    gameObj2.rad.r = 1;

    // tan perpedicular to rad
    gameObj1.tan.dx = gameObj1.rad.dy;
    gameObj1.tan.dy = -gameObj1.rad.dx;

    gameObj2.tan.dx = gameObj2.rad.dy;
    gameObj2.tan.dy = -gameObj2.rad.dx;

    gameObj1.rad.r = gameObj1.rad.dot(gameObj1.vel);
    gameObj1.tan.r = gameObj1.tan.dot(gameObj1.vel);
    gameObj2.rad.r = gameObj2.rad.dot(gameObj2.vel);
    gameObj2.tan.r = gameObj2.tan.dot(gameObj2.vel);

    //exchange rad components
    temp = gameObj1.rad;
    gameObj1.rad = gameObj2.rad;
    gameObj2.rad = temp;

    //construct new velocity vector
    gameObj1.vel.sumVector(gameObj1.rad,gameObj1.tan);
    gameObj2.vel.sumVector(gameObj2.rad,gameObj2.tan);

  }

  //gameObj1.rad.draw(context,gameObj1.point.x,gameObj1.point.y,1);
  //gameObj2.rad.draw(context,gameObj2.point.x,gameObj2.point.y,1);

  //gameObj1.tan.draw(context,gameObj1.point.x,gameObj1.point.y,1);
  //gameObj2.tan.draw(context,gameObj2.point.x,gameObj2.point.y,1);
}

setup();
