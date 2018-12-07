const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let midX = canvas.width/2;
let midY = canvas.height/2;
let temp = 0;
let mouse = {};
let angle =0;
let dx,dy;


function setup(){

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height)
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.save();
  context.translate(midX,midY);
  dx = mouse.x - midX;
  dy = mouse.y - midY;
  // if(dx > 0){
  //   angle = Math.atan(dy/dx);
  // } else {
  //   angle = Math.atan(dy/dx) + Math.PI;
  // }
  angle = Math.atan2(dy,dx);

  context.rotate(angle);
  drawArrow();
  context.restore();

}

setup();

function drawArrow(){
  let sh = 10;
  let sw = 100;
  let ah =15;
  let aw = 30;


  context.beginPath();
  context.fillStyle = "red";
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

addEventListener('mousemove',(evt)=>{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
})
