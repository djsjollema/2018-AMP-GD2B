const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let kineticObject = {};

function setUp(){
  kineticObject.point = new Point(200,300,10,"blue");
  kineticObject.pos = new Vector2d(500,100);
  kineticObject.vel = new Vector2d(8,12);

  animate()
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context);
  if(kineticObject.pos.dx > canvas.width){
    kineticObject.vel.dx = - kineticObject.vel.dx;
  }
  if(kineticObject.pos.dx < 0){
    kineticObject.vel.dx = - kineticObject.vel.dx;
  }
  if(kineticObject.pos.dy > canvas.height){
    kineticObject.vel.dy = - kineticObject.vel.dy;
  }
  if (kineticObject.pos.dy <0) {
    kineticObject.vel.dy = - kineticObject.vel.dy;
  }

}

setUp()
