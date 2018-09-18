const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoint = new Point(100,200);
myPoint.draw();

let myOtherPoint = new Point(300,500);
myOtherPoint.draw();
