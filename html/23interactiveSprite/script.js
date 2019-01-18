const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt, frameRate, counter;
let sx,sy,sw,sh;
let numOfCols, maxCells,image;


function setup(){
  startTime = new Date();
  frameRate = 10; //frames per second
  counter = 0;
  sw = 100;
  sh = 100;
  numOfCols = 6;
  maxCells = 23;
  image = new Image();
  image.src = "trump_run.png";
  image.addEventListener('load',()=>{
    animate();
  })

}

function animate(){
  currentTime = new Date();
  dt = (currentTime - startTime)/1000;
  requestAnimationFrame(animate);
  if(dt > 1/frameRate){
    context.fillStyle = "rgba(0,0,0,0.4)"
    context.clearRect(0,0,canvas.width,canvas.height);

    context.drawImage(image,0,0)

    startTime = new Date();
    sx = counter % numOfCols * sw;
    sy = Math.floor(counter/numOfCols) *sh;
    context.fillRect(sx,sy,sw,sh);

    context.drawImage(image,sx,sy,sw,sh, image.width,0,sw*4,sh*4);

    counter++;
    if(counter >maxCells){
      counter = 0;
    }
  }


}

setup();
