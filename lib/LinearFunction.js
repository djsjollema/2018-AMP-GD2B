class LinearFunction {
  constructor(slope,intercept,color) {
    this.slope = slope;
    this.intercept = intercept;
    this.color = "black" || color;
  }

  calcY(x){
    return this.slope * x + this.intercept;
  }

  defineLineWithTwoPoints(A,B){
    this.slope = (B.y - A.y)/(B.x - A.x);
    this.intercept = A.y - this.slope*A.x;
  }

  draw(context,color){
    this.color = color || "black";
    context.strokeStyle = this.color
    context.beginPath();
    context.moveTo(0,this.calcY(0));
    context.lineTo(canvas.width,this.calcY(canvas.width));
    context.closePath();
    context.stroke();
  }

  intersection(m){
    let ans = {};
    ans.x = (m.intercept - this.intercept)/(this.slope - m.slope);
    ans.y = this.calcY(ans.x);
    return ans;
  }
}
