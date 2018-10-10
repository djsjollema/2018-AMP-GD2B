class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.draggable = false;
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
    context.fillText(myText, this.x-this.r - 5,this.y-this.r-18);
  }

  position(vector){
    this.x = vector.dx;
    this.y = vector.dy;
  }

  distanceToAnOtherPoint(P){
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  drag(){
    let dragStatus = false;
    let mousePosition = {};

    //is er op de canvas geklikt?
    document.addEventListener('mousedown',(evt)=>{
      //wat zijn de coordinaten van de muisklik?
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;
      //wat is de afstand tussen de punt en de muispositie?
      if(this.distanceToAnOtherPoint(mousePosition)<=this.r){
        dragStatus = true;
      } else {
        dragStatus = false;
      }
      //console.log(dragStatus);
    });

    document.addEventListener('mousemove',(evt)=>{
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;
      if(this.distanceToAnOtherPoint(mousePosition)<=this.r){
        canvas.style.cursor = "pointer";
        evt.stopImmediatePropagation();
      } else {
        canvas.style.cursor = "default";
      }
      //console.log(mousePosition);
      if(dragStatus){
        this.x = mousePosition.x;
        this.y = mousePosition.y;
      }
    });

    document.addEventListener('mouseup',(evt)=>{
      dragStatus= false;
    })

  }
}
