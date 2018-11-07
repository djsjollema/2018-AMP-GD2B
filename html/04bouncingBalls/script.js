const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let kineticObjects = [];

function setUp(){
  for (let i = 0; i < 100; i++) {
    let kineticObject = {};
    kineticObject.point = new Point(200,300,20,"#" + Math.floor(randomNumber(0,255*255*255)).toString(16));
    kineticObject.pos = new Vector2d(randomNumber(10,canvas.width),randomNumber(10,canvas.height));
    kineticObject.vel = new Vector2d(randomNumber(-8,8),randomNumber(-8,8));
    kineticObject.acc = new Vector2d(0,0.5);
    kineticObjects.push(kineticObject);
  }

  animate()
}

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  for (var i = 0; i < kineticObjects.length; i++) {
    kineticObjects[i].vel.add(kineticObjects[i].acc);
    kineticObjects[i].pos.add(kineticObjects[i].vel);
    kineticObjects[i].point.position(kineticObjects[i].pos);

    if(kineticObjects[i].pos.dx > canvas.width-kineticObjects[i].point.r){
      //kineticObjects[i].pos.dx = canvas.width;
      kineticObjects[i].vel.dx = - kineticObjects[i].vel.dx;

    }
    if(kineticObjects[i].pos.dx < 0 +kineticObjects[i].point.r){
      //kineticObjects[i].pos.dx = 0;
      kineticObjects[i].vel.dx = - kineticObjects[i].vel.dx;

    }
    if(kineticObjects[i].pos.dy > canvas.height - kineticObjects[i].point.r){
      kineticObjects[i].vel.dy = -kineticObjects[i].vel.dy;
      kineticObjects[i].pos.dy = canvas.height - kineticObjects[i].point.r;

    }
    // if (kineticObjects[i].pos.dy < kineticObjects[i].point.r) {
    //   //kineticObjects[i].pos.dy = 0;
    //   kineticObjects[i].vel.dy = - kineticObjects[i].vel.dy;
    // }

    kineticObjects[i].point.draw(context);
  }


}

setUp()

function randomNumber(min,max){
  return Math.random() * (max - min) + min;
}
