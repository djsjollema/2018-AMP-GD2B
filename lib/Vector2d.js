class Vector2d {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  get r(){
    return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
  }
}
