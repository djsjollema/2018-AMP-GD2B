const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];

for (var i = 0; i < 8; i++) {
  let dot = new Point(randomNumber(canvas.width),randomNumber(canvas.height),"#" + Math.floor(randomNumber(255*255*255)).toString(16));
  dots.push(dot);
}


function animate(){
  requestAnimationFrame(animate);
  context.beginPath();
  context.moveTo(dots[0].x,dots[0].y);
  for (var i = 0; i < dots.length; i++) {
    context.lineWidth = 2;
    context.lineTo(dots[i].x,dots[i].y);

  }
  context.closePath();
  context.stroke();

  for (var i = 0; i < dots.length; i++) {
    dots[i].draw();
    dots[i].printText(i);
  }
}

animate();

function randomNumber(max){
  return Math.random()*max;
}
