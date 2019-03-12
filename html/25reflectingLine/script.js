const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,l,m,player,S,i,j,imag,jmag;

function setup(){
  A = new Point(100,100,10,"yellow");
  B = new Point(700,300,10,"lightgreen");
  S = new Point(0,0,10,"white");

  l = new LinearFunction(1,1);
  m = new LinearFunction(1,1);
  A.drag();
  B.drag();
  player = {};
  player.position = new Vector2d(500,500);
  player.velocity = new Vector2d(4,5);
  player.point = new Point(player.position.dx,player.position.dy,20,"red");
  i = new Vector2d(1,1);
  j = new Vector2d(-1,1);
  i.r = 1;
  j.r = 1;


  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height)

  l.defineLineWithTwoPoints(A,B);
  l.draw(context);

  m.slope = -1 / l.slope;
  m.intercept = player.position.dy - player.position.dx*m.slope;
  m.draw(context);



  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;



  player.position.add(player.velocity);
  player.point.x = player.position.dx;
  player.point.y = player.position.dy;

  if(player.position.dx < player.point.r || player.position.dx > canvas.width - player.point.r ){
    player.velocity.dx = - player.velocity.dx;
  }
  if(player.position.dy < player.point.r  || player.position.dy > canvas.height - player.point.r ){
    player.velocity.dy = - player.velocity.dy;
  }


  player.velocity.draw(context,player.position.dx,player.position.dy,20);
  i.dx = 1;
  i.dy = l.slope;
  i.r = 1;


  j.dx = 1;
  j.dy = m.slope;
  j.r = 1;

  imag = player.velocity.dot(i);
  jmag = player.velocity.dot(j);
  console.log(imag,jmag);
  i.r = imag;
  j.r = jmag;

  i.draw(context,S.x,S.y,20);
  j.draw(context,S.x,S.y,20);


  player.point.draw(context);
  A.draw(context);
  B.draw(context);
  S.draw(context);

  if(player.point.distanceToAnOtherPoint(S)<player.point.r + S.r){
    j.angle += Math.PI;
    player.velocity.sumVector(i,j);
  }

}

setup();
