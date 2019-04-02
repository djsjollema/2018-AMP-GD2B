const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameObject = {};
let gameObject1 = {};


function setup(){
  gameObject.pos = new Vector2d(200,200);
  gameObject.vel = new Vector2d(8,9);
  gameObject.point = new Point(0,0,150,"yellow");
  gameObject.rad = new Vector2d(1,1)

  gameObject1.pos = new Vector2d(800,400);
  gameObject1.vel = new Vector2d(-8,9);
  gameObject1.point = new Point(0,0,150,"red");
  gameObject.rad = new Vector2d(1,1);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  gameObject.pos.add(gameObject.vel);
  gameObject1.pos.add(gameObject1.vel);

  boxing(gameObject);
  boxing(gameObject1);

  //plaats gameobject.point op de positie van de vector pos
  gameObject.point.position(gameObject.pos);
  gameObject1.point.position(gameObject1.pos);

  //teken de gameObject.point
  gameObject.point.draw(context);
  gameObject1.point.draw(context);

  console.log(gameObject.pos.dx,gameObject.pos.dy);
  console.log(gameObject1.pos.dx,gameObject1.pos.dy); 
}

setup();


function boxing(object){
  if(object.pos.dx > canvas.width - object.point.r){
    object.vel.dx = - object.vel.dx;
  }
  if(object.pos.dy > canvas.height - object.point.r){
    object.vel.dy = - object.vel.dy;
  }

  if(object.pos.dx < object.point.r){
    object.vel.dx = - object.vel.dx;
  }
  if(object.pos.dy < object.point.r){
    object.vel.dy = - object.vel.dy;
  }
}
