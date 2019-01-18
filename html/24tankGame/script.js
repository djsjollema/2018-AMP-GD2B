class Tank {
  constructor() {
    this.image= new Image();
    this.image.src = "Tanks_sheet.png";
    this.counter=0;
    this.startFrame = 1;
    this.stopFrame = 8;
    this.pos = new Vector2d(100,100);
    this.vel = new Vector2d(0,5);
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
    context.drawImage(this.image,sx,sy,32,32,this.pos.dx,this.pos.dy,64,64);
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
  }

  greenTank.draw();

}

setup();
