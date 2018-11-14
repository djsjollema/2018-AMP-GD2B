const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let background = new Image();
background.src = "street.png";

let frontWheel = new Image();
frontWheel.src = "wheel.png";

let backWheel = new Image();
backWheel.src = "wheel.png";


let car = new Image();
car.src = "car.png";

let rot = 0;

let xpos = 0;
let xspeed = 10;

background.addEventListener('load',()=>{
  animate();
})


addEventListener('keydown',(evt)=>{
  switch (evt.key) {
    case "ArrowRight":
      xspeed+= 1;
      break;
      case "ArrowLeft":
      xspeed -=1;
      break;
    default:
  }
})

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(background,0,0);

  context.drawImage(car,xpos,200);

  context.save();
  context.translate(xpos,500)
  context.rotate(rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();

  context.save();
  context.translate(xpos - 300,200)
  context.rotate(rot);
  context.drawImage(backWheel,-backWheel.width/2,-backWheel.height/2);
  context.restore();

  rot += 0.1;
  xpos += xspeed;
  if(xpos>canvas.width){
    xpos = -car.width;
  }
}
