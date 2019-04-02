const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gameObjects = [];
let numGameObjects = 10;
let temp;

function setup(){
  for(let i = 0; i<numGameObjects; i++){
    gameObject = {}
    gameObject.pos = new Vector2d(grn(canvas.width),grn(canvas.height));
    gameObject.vel = new Vector2d(grn(5),grn(5));
    gameObject.point = new Point(0,0,30,"yellow");
    gameObject.point.position(gameObject.pos);
    gameObject.rad = new Vector2d(1,1);
    gameObject.tan = new Vector2d(1,1);
    gameObjects.push(gameObject);
  }
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.fillStyle = "rgba(255,255,255,0.3)";
  context.fillRect(0,0,canvas.width,canvas.height);

  for(let i = 0; i<gameObjects.length;i++){
    let gameObject = gameObjects[i];

    boxing(gameObject);

    for(let j = 0; j<gameObjects.length; j++){
      if(i != j){
        let rad = new Vector2d(1,1);
        rad.diffenceVector(gameObjects[i].pos,gameObjects[j].pos);
        ;
        rad.draw(context,gameObjects[i].pos.dx,gameObject.pos.dy,1);
        // if(gameObjects[i].r<60){
        //   gameObjects[j].rad.diffenceVector(gameObjects[j].pos,gameObjects[i].pos)
        //   gameObjects[i].ra.r = 1;
        //   gameObjects[j].r = 1;
        //
        // }
      }
    }

    gameObject.pos.add(gameObject.vel);
    gameObject.point.position(gameObject.pos);
    gameObject.point.draw(context);
  }

}

setup();

function grn(max){
  return Math.floor(Math.random()*max);
}

function boxing(gameObject){
  if(gameObject.pos.dx < gameObject.point.r){
    gameObject.vel.dx = Math.abs(gameObject.vel.dx);
  }

  if(gameObject.pos.dx > canvas.width - gameObject.point.r){
    gameObject.vel.dx = - Math.abs(gameObject.vel.dx);
  }

  if(gameObject.pos.dy < gameObject.point.r){
    gameObject.vel.dy = Math.abs(gameObject.vel.dy);
  }

  if(gameObject.pos.dy > canvas.height - gameObject.point.r){
    gameObject.vel.dy = - Math.abs(gameObject.vel.dy);
  }
}
