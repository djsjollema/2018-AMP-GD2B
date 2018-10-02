const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let vec = new Vector2d(10,20);
console.log(vec,vec.r)
