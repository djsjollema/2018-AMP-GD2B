const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {};


function setup(){
  player.pos = new Vector2d(200,200);
  player.point = new Point(player.pos.dx,player.pos.dy,20,"yellow");
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  player.point.draw(context);
}

setup();
