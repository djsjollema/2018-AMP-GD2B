const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dragPoint = new Point(200,200,20,"red");
dragPoint.draw(context);
dragPoint.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  dragPoint.draw(context);
}

animate();
