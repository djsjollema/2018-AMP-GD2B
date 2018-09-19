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
  for (var i = 0; i < dots.length; i++) {
    dots[i].draw()
  }
}

animate();

function randomNumber(max){
  return Math.random()*max;
}
