const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(200,500,20,"green");

let S = new Point(0,0,10,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

A.drag(); B.drag();C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  m.slope = -1/l.slope;
  m.intercept = C.y - m.slope*C.x;
  m.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

  S.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");
}

animate();
