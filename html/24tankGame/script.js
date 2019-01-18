class Tank {
  constructor() {
    this.image= new Image();
    this.image.src = "Tanks_sheet.png";
    this.counter=0;
    this.startFrame = 1;
    this.stopFrame = 8;
    this.pos = new Vector2d(100,100);
    this.vel = new Vector2d(1,2);
  }

  move(){
    this.pos.add(this.vel);
    if(this.counter >= this.stopFrame){
      this.counter = this.startFrame;
    }
    this.counter++;
  }

  draw(){
    let sx,sy;
    sx = this.counter % 8 * 32;
    sy = Math.floor(this.counter/8)*32;
    context.save();
    context.translate(this.pos.dx,this.pos.dy);
    context.rotate(this.vel.angle + Math.PI/2);
    context.drawImage(this.image,sx,sy,32,32,-16,-16,64,64);
    context.restore();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt, frameRate, counter;
let greenTank;


function setup(){
  greenTank = new Tank();
  startTime = new Date();
  frameRate = 10; //frames per second
  animate();
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  currentTime = new Date();
  dt = (currentTime - startTime)/1000;
  requestAnimationFrame(animate);

  if(dt > 1/frameRate){
    greenTank.move();
    startTime = new Date();
    //greenTank.vel.angle += 0.01;
  }

  greenTank.draw();

}

addEventListener('keydown',(evt)=>{
  switch (evt.key) {
    case "ArrowLeft":
      greenTank.vel.angle -= 0.1;

      break;
    default:

  }
})

setup();
