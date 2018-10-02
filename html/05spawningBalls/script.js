const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 let kineticObjects = [];

for (let i = 0; i < 10; i++) {
  let kineticObject = {};
  kineticObject.ball = new Point(1000,100,10,"red");
  kineticObject.pos = new Vector2d(getRandomNumber(canvas.width),100);
  kineticObject.vel = new Vector2d(0,1);
  kineticObjects.push(kineticObject);
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  for (var i = 0; i < kineticObjects.length; i++) {
    kineticObjects[i].pos.add(kineticObjects[i].vel);
    kineticObjects[i].ball.position(kineticObjects[i].pos)
    kineticObjects[i].ball.draw(context);
  }
}

animate();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
