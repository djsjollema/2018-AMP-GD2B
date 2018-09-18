class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  draw(){
    context.beginPath();
    context.lineWidth = 8;
    context.strokeStyle = "blue";
    context.fillStyle = "yellow"
    context.arc(this.x,this.y,150,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
  }
}
