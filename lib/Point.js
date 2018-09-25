class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
  }

  printText(myText){
    context.fillStyle = "black";
    context.font = "16px Courier New";
    context.fillText(myText, this.x-5,this.y-18);
  }

  position(vector){
    this.x = vector.dx;
    this.y = vector.dy;
  }
}
