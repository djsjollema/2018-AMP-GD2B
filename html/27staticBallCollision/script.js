const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,player,l,m,j,i;

function setup(){
  player = {};
  player.pos = new Vector2d(100,100);
  player.vel = new Vector2d(2,3);
  player.point = new Point(player.pos.dx,player.pos.dy,20,"yellow");
  A = new Point(canvas.width/2,canvas.height/2,200,"gray");
  l = new LinearFunction(1,0);
  m = new LinearFunction(1,0);
  j = new Vector2d(1,1);
  i = new Vector2d(1,1);
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

  j.dx = A.x - player.point.x;
  j.dy = A.y - player.point.y;

  i.dx = -j.dy;
  i.dy = j.dx;
  i.r =1;
  j.r = 1;

  j.r = player.vel.dot(j);
  i.r = player.vel.dot(i);

  l.defineLineWithTwoPoints(A,player.point);
  l.draw(context);

  m.draw(context);
  m.slope = -1/l.slope;
  m.intercept = player.point.y - m.slope*player.point.x;


  player.pos.add(player.vel);
  player.point.position(player.pos);
  player.point.draw(context);

  player.vel.draw(context,player.pos.dx,player.pos.dy,40);
  j.draw(context,player.pos.dx,player.pos.dy,40);
  i.draw(context,player.pos.dx,player.pos.dy,40);

}

setup();
