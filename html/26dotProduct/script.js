const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,C,vector,a,b,l,m;

function setup(){
  A = new Point(100,100,10,"red");
  B = new Point(400,300,10,"yellow");
  C = new Point(50,300,10,"blue");
  A.drag();B.drag();C.drag();
  vector= new Vector2d(B.x-A.x,B.y-A.y);
  l = new LinearFunction(1,1);
  m = new LinearFunction(1,1);

  a = new Vector2d(C.x-A.x,C.y-A.y);
  b = new Vector2d(a.dy,-a.dx)

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height)
  //context.clearRect(0,0,canvas.width,canvas.height);
  vector.dx = B.x - A.x;vector.dy = B.y - A.y;
  a.dx = C.x - A.x;a.dy = C.y - A.y;
  b.dx = -a.dy; b.dy = a.dx;

  l.defineLineWithTwoPoints(A,C);
  m.slope = -1/l.slope;
  m.intercept = A.y - m.slope*A.x;

  vector.draw(context,A.x,A.y,1);
  a.r = 1;
  b.r = 1;

  a.r = vector.dot(a);
  b.r = vector.dot(b);

  a.draw(context,A.x,A.y,1);
  b.draw(context,A.x,A.y,1);



  l.draw(context);
  m.draw(context);
  A.draw(context);B.draw(context);C.draw(context);
}

setup();
