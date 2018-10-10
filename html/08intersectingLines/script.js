const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
let B = new Point(600,300,20,"blue");
let C = new Point(200,500,20,"green");
let D = new Point(600,100,20,"orange");

A.drag(); B.drag();C.drag();D.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

  A.printText("A");
  B.printText("B");
  C.printText("C");
  D.printText("D");
}

animate();
