const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let earth = {},moon = {},moon1 = {};
let l,m;
let distanceEarthMoon = 1;

function setup(){
  l = new LinearFunction(1,1);
  m = new LinearFunction(1,1);


  earth.pos = new Vector2d(canvas.width/2,canvas.height/2);
  earth.point = new Point(earth.pos.dx,earth.pos.dy,100,"rgba(0,0,255,0.1)");
  moon.pos = new Vector2d(400,200);
  moon.vel = new Vector2d(1,-3);
  moon.acc = new Vector2d(0,0);
  moon.point = new Point(moon.pos.dx,moon.pos.dy,20,"white");

  moon1.pos = new Vector2d(1000,500);
  moon1.vel = new Vector2d(-2,3);
  moon1.acc = new Vector2d(0,0);
  moon1.point = new Point(moon1.pos.dx,moon1.pos.dy,20,"yellow");
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  distanceEarthMoon = earth.point.distanceToAnOtherPoint(moon.point);
  distanceEarthMoon1 = earth.point.distanceToAnOtherPoint(moon1.point);
  //console.log(distanceEarthMoon);
  moon.acc.diffenceVector(moon.pos,earth.pos);
  moon.acc.r = 5000/(distanceEarthMoon*distanceEarthMoon);

  moon1.acc.diffenceVector(moon1.pos,earth.pos);
  moon1.acc.r = 5000/(distanceEarthMoon1*distanceEarthMoon1);

  l.defineLineWithTwoPoints(moon.point,earth.point);
  m.defineLineWithTwoPoints(moon1.point,earth.point);


  context.fillStyle = "rgba(0,51,102,0.1)";
  context.fillRect(0,0,canvas.width,canvas.height);
  earth.point.draw(context);

  moon.vel.add(moon.acc);
  moon.pos.add(moon.vel);
  moon.point.position(moon.pos);
  moon.point.draw(context);

  moon1.vel.add(moon1.acc);
  moon1.pos.add(moon1.vel);
  moon1.point.position(moon1.pos);
  moon1.point.draw(context);

  l.draw(context,"white");
  m.draw(context,"yellow");
  // moon.acc.draw(context,moon.pos.dx,moon.pos.dy,1000,"white");
  // moon1.acc.draw(context,moon1.pos.dx,moon1.pos.dy,1000,"white");
}


setup()
