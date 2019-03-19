const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,player,l;

function setup(){
  player = {};
  player.pos = new Vector2d(100,100);
  player.vel = new Vector2d(2,3);
  player.point = new Point(player.pos.dx,player.pos.dy,20,"yellow");
  A = new Point(canvas.width/2,canvas.height/2,200,"gray");
  l = new LinearFunction(1,0);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height);
  A.draw(context);

  if(player.pos.dx <player.point.r || player.pos.dx > canvas.width -  player.point.r){
    player.vel.dx = - player.vel.dx;
  }

  if(player.pos.dy <player.point.r || player.pos.dy > canvas.height -  player.point.r){
    player.vel.dy = - player.vel.dy;
  }

  l.defineLineWithTwoPoints(A,player.point);
  l.draw(context);

  player.pos.add(player.vel);
  player.point.position(player.pos);
  player.point.draw(context);

  player.vel.draw(context,player.pos.dx,player.pos.dy,40);
}

setup();
