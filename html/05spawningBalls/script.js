const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let woosh = new Audio();
woosh.src = "media/woosh.wav";

 let kineticObjects = [];

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  if(Math.random()<0.05){
    let kineticObject = {};
    kineticObject.ball = new Point(0,0,30,"red");
    kineticObject.pos = new Vector2d(getRandomNumber(canvas.width),-100);
    kineticObject.vel = new Vector2d(0,5);
    kineticObject.acc = new Vector2d(0,0.3);
    kineticObjects.push(kineticObject);
  }
  for (var i = 0; i < kineticObjects.length; i++) {
    //kineticObjects[i].vel.add(kineticObjects[i].acc);
    kineticObjects[i].pos.add(kineticObjects[i].vel);
    kineticObjects[i].ball.position(kineticObjects[i].pos)
    kineticObjects[i].ball.draw(context);
  }

  for (var i = 0; i < kineticObjects.length; i++) {
    if(kineticObjects[i].pos.dy > canvas.height + 100){
      kineticObjects.splice(i,1)
    }
  }
}

document.addEventListener('mousedown',(evt)=>{

  let mousePos = {};
  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY;

  for (var i = 0; i < kineticObjects.length; i++) {
    if(kineticObjects[i].ball.distanceToAnOtherPoint(mousePos) < kineticObjects[i].ball.r){
      kineticObjects[i].ball.color = "yellow";
      if (woosh.paused) {
            woosh.play();
        }else{
            woosh.currentTime = 0;
        }
    };
  }
})

animate();

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
