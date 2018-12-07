const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {};
let A = {};
let B = {};


function setup(){
  player.pos = new Vector2d(200,200);
  player.point = new Point(player.pos.dx,player.pos.dy,20,"yellow");
  player.vel = new Vector2d(0,0)

  A.pos = new Vector2d(200,500);
  A.point = new Point(A.pos.dx,A.pos.dy,20,"red");

  B.pos = new Vector2d(800,200);
  B.point = new Point(B.pos.dx,B.pos.dy,20,"red");


  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  player.vel.diffenceVector(player.pos,B.pos);


  A.point.draw(context);
  B.point.draw(context);
  player.point.draw(context);
  player.pos.draw(context,0,0,1);
  B.pos.draw(context,0,0,1);
  player.vel.draw(context,player.pos.dx,player.pos.dy,1);
}

setup();
