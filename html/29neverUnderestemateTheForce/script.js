const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let earth = {},moon = {};
let distanceEarthMoon = 1;

function setup(){
  earth.pos = new Vector2d(canvas.width/2,canvas.height/2);
  earth.point = new Point(earth.pos.dx,earth.pos.dy,150,"blue");
  moon.pos = new Vector2d(200,200);
  moon.vel = new Vector2d(1,-3);
  moon.acc = new Vector2d(0,0);
  moon.point = new Point(moon.pos.dx,moon.pos.dy,20,"white")
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  distanceEarthMoon = earth.point.distanceToAnOtherPoint(moon.point);
  //console.log(distanceEarthMoon);
  moon.acc.diffenceVector(moon.pos,earth.pos);
  moon.acc.r = 10000/(distanceEarthMoon*distanceEarthMoon);



  context.fillStyle = "rgba(0,51,102,0)";
  context.fillRect(0,0,canvas.width,canvas.height);
  earth.point.draw(context);

  moon.vel.add(moon.acc);
  moon.pos.add(moon.vel);
  moon.point.position(moon.pos);
  moon.point.draw(context);

  moon.acc.draw(context,moon.pos.dx,moon.pos.dy,1,"white");
}


setup()
