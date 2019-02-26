const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l,m,player;

function setup(){
  A = new Point(100,100,10,"yellow");
  B = new Point(700,300,10,"lightgreen");
  l = new LinearFunction(1,1);
  A.drag();
  B.drag();
  player = {};
  player.position = new Vector2d(500,500);
  player.point = new Point(player.position.dx,player.position.dy,20,"red")
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height)

  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  A.draw(context);
  B.draw(context);
  player.point.draw(context);
}

setup();
