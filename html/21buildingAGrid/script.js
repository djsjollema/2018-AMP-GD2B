const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt;
let framerate = 5;
let counter = 0;
let sx,sy;
let numOfCols = 10;
let maxFrames = 30;



function setup(){
  startTime = new Date();

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  currentTime = new Date();
  dt = currentTime - startTime;
  if(dt > 1000/framerate){
    context.clearRect(0,0,canvas.width,canvas.height);
    startTime = new Date();
    sx = counter % numOfCols * 100;
    sy = Math.floor(counter/numOfCols) * 100;
    //console.log(counter, sx);
    context.fillRect(sx,sy,100,100);
    counter++;
    if(counter >= 30){
      counter = 0;
    }
  }

}

setup();
