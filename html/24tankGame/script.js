class Tank {
  constructor() {
    this.image= new Image();
    this.image.src = "Tanks_sheet.png";
  }

  draw(){
    context.drawImage(this.image,2*32,0,32,32,0,0,64,64);
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
  currentTime = new Date();
  dt = (currentTime - startTime)/1000;
  requestAnimationFrame(animate);

  if(dt > 1/frameRate){
    greenTank.draw();
  }

}

setup();
