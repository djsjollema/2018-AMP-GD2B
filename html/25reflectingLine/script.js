const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l,m,player,S;

function setup(){
  A = new Point(100,100,10,"yellow");
  B = new Point(700,300,10,"lightgreen");
  S = new Point(0,0,10,"white");

  l = new LinearFunction(1,1);
  m = new LinearFunction(1,1);
  A.drag();
  B.drag();
  player = {};
  player.position = new Vector2d(500,500);
  player.velocity = new Vector2d(1,2);
  player.point = new Point(player.position.dx,player.position.dy,20,"red")
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height)

  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  m.slope = -1 / l.slope;
  m.intercept = player.position.dy - player.position.dx*m.slope;
  m.draw(context);

  A.draw(context);
  B.draw(context);

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;
  S.draw(context);


  player.position.add(player.velocity);
  player.point.x = player.position.dx;
  player.point.y = player.position.dy;

  if(player.position.dx < 0 || player.position.dx > canvas.width){
    player.velocity.dx = - player.velocity.dx;
  }
  if(player.position.dy < 0 || player.position.dy > canvas.height){
    player.velocity.dy = - player.velocity.dy;
  }
  player.point.draw(context);
}

setup();
