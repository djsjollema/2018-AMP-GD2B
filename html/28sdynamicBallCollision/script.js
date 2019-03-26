const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function setup(){
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height);
}

setup();
