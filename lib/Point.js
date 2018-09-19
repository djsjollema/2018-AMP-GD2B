class Point {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(){
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.arc(this.x,this.y,10,0,2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
  }

  printText(myText){
    context.fillStyle = "black";
    context.font = "16px Courier New";
    context.fillText(myText, this.x-5,this.y-18);
  }
}
