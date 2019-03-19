const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,player;

function setup(){
  player = {};
  player.pos = new Vector2d(100,100);
  player.vel = new Vector2d(2,3);
  player.point = new Point(player.pos.dx,player.pos.dy,20,"yellow");
  A = new Point(canvas.width/2,canvas.height/2,200,"gray")
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


  player.pos.add(player.vel);
  player.point.position(player.pos);
  player.point.draw(context);
}

setup();
