const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let kineticObject = {};

function setUp(){
  kineticObject.point = new Point(200,300,10,"blue");

  animate()
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  kineticObject.point.draw(context);
}

setUp()
