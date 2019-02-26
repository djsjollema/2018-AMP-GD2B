const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l,m,player;

function setup(){
  A = new Point(100,100,10,"red");
  B = new Point(700,300,10,"blue");
  A.drag();
  B.drag();
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height)
  A.draw(context);
  B.draw(context);
}

setup();
