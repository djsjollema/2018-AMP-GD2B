const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
}

animate();
