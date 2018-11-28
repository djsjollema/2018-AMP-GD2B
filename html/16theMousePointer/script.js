const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let temp = 0;
let mouse = {};
let angle = 0;

let midX = canvas.width/2;
let midY = canvas.height/2;

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.save();
  context.translate(midX,midY);
  if(mouse.x > midX){
    angle = Math.atan((mouse.y-midY)/(mouse.x-midX));
  } else {
    angle = Math.atan((mouse.y-midY)/(mouse.x-midX)) + Math.PI;
  }

  context.rotate(angle);
  drawArrow();
  context.restore();
}

animate();

addEventListener('mousemove',(evt)=>{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
})

function drawArrow(){
  let sh = 6;
  let sw = 50;
  let ah = 15;
  let aw = 50;
  context.fillStyle = "red";

  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(0,sh);
  context.lineTo(sw,sh);
  context.lineTo(sw,ah);
  context.lineTo(sw+aw,0);
  context.lineTo(sw,-ah);
  context.lineTo(sw,-sh);
  context.lineTo(0,-sh);
  context.closePath();
  context.stroke();
  context.fill();
}
