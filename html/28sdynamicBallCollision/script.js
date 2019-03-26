const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameObj1 = {};

function setup(){
  gameObj1.pos = new Vector2d(200,200);
  gameObj1.vel = new Vector2d(2,3);
  gameObj1.point = new Point(0,0,100,"yellow");
  gameObj1.point.position(gameObj1.pos);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height);

  gameObj1.pos.add(gameObj1.vel);
  if(gameObj1.pos.dx<gameObj1.point.r || gameObj1.pos.dx > canvas.width - gameObj1.point.r){
    gameObj1.vel.dx = - gameObj1.vel.dx;
  }
  if(gameObj1.pos.dy<gameObj1.point.r || gameObj1.pos.dy > canvas.height - gameObj1.point.r){
    gameObj1.vel.dy = - gameObj1.vel.dy;
  }
  gameObj1.point.position(gameObj1.pos);
  gameObj1.point.draw(context);
}

setup();
