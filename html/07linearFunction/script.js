const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let l = new LinearFunction(0.5,0.5);
let C = new Point(100,l.calcY(100),10,"yellow");
let D = new Point(500,l.calcY(500),10,"green");
A.drag(); B.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoints(A,B);

  C.x = 0; C.y = l.calcY(0);
  D.x = canvas.width; D.y = l.calcY(canvas.width);
  C.draw(context);
  D.draw(context);

  context.beginPath();
  context.moveTo(C.x,C.y);
  context.lineTo(D.x,D.y);
  context.stroke();

  A.draw(context);
  B.draw(context);

}

animate();
