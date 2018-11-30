const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let kineticObject = {};

function setup(){
  kineticObject.pos = new Vector2d(100,100);
  kineticObject.vel = new Vector2d(3,0);
  kineticObject.acc = new Vector2d(0,0.5);
  kineticObject.point = new Point(kineticObject.pos.dx,kineticObject.pos.dy,20,"yellow");
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  kineticObject.vel.add(kineticObject.acc);
  kineticObject.pos.add(kineticObject.vel);

  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context);
  kineticObject.vel.draw(context,kineticObject.pos.dx,kineticObject.pos.dy,5);

  if(kineticObject.pos.dx < kineticObject.point.r || kineticObject.pos.dx > canvas.width - kineticObject.point.r){
    kineticObject.vel.dx = -kineticObject.vel.dx;
  }
  if (kineticObject.pos.dy > canvas.height - kineticObject.point.r) {
    kineticObject.vel.dy = -kineticObject.vel.dy;
    kineticObject.pos.dy = canvas.height - kineticObject.point.r;
  }
}

setup();
