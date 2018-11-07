const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function animate(){
  requestAnimationFrame(animate);
  let myPoint = new Point(randomNumber(canvas.width),randomNumber(canvas.height),20,"#" + Math.floor(randomNumber(255*255*255)).toString(16));
  myPoint.draw(context);
}

animate();

function randomNumber(max){
  return Math.random()*max;
}
