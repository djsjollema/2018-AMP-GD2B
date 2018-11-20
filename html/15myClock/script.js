const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let midX = canvas.width/2;
let midY = canvas.height/2;

let face = new Image();
face.src = "clockFace.png";

let myTime = new Date();

let secondsHand = new Image();
secondsHand.src = "secondHand.png"



function animate(){
  myTime = new Date();
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  //draw face
  context.drawImage(face,midX-face.width/2,midY-face.height/2);

  //draw secondsHand
  context.save();
  context.translate(midX,midY);
  context.rotate(myTime.getSeconds()*2*Math.PI/60)
  context.drawImage(secondsHand,-70,-233);
  context.restore();
  console.log(myTime.getSeconds());
}

animate();
