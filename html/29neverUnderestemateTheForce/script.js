const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let earth = {},moon = {};

function setup(){
  earth.pos = new Vector2d(canvas.width/2,canvas.height/2);
  earth.point = new Point(earth.pos.dx,earth.pos.dy,150,"blue");
  moon.pos = new Vector2d(200,200);
  moon.vel = new Vector2d(2,-2);
  moon.point = new Point(moon.pos.dx,moon.pos.dy,50,"white")
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(0,51,102,0.1)";
  context.fillRect(0,0,canvas.width,canvas.height);
  earth.point.draw(context);

  moon.pos.add(moon.vel);
  moon.point.position(moon.pos);
  moon.point.draw(context);
}


setup()
