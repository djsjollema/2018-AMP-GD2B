const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let background = new Image();
background.src = "street.png";

let frontWheel = new Image();
frontWheel.src = "wheel.png";

let rot = 0;

let xpos = 0;
let xspeed = 10;

background.addEventListener('load',()=>{
  animate();
})


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(background,0,0);
  context.save();
  context.translate(xpos,500)
  context.rotate(rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();
  rot += 0.1;
  xpos += xspeed;
  if(xpos>canvas.width){
    xpos = 0;
  }
}
