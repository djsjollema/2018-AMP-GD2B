class Point {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
    console.log(this.color)
  }

  draw(){
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.x,this.y,20,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
  }
}
