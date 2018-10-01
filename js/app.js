const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');


let rightPressed = false;
let leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}
// const rocket = () => {
//
//   ctx.beginPath();
//   ctx.moveTo(75, 50);
//   ctx.lineTo(90, 85);
//   ctx.lineTo(60, 85);
//   ctx.fill();
//
// }
class Rocket {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    // ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();
  }
  update () {
    if (rightPressed) {
      this.x += 1;
    } else if (leftPressed)
      this.x -= 1;
  }
}
var ship = new Rocket(500, 800, 0, 0, 30);



class Planet {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    let colors = ['green', 'red', 'brown', 'yello', 'white']
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    // ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();

  }

  update() {
    // if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    //   this.dy = -this.dy;
    // }
    // if (this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
    //   this.dx = -this.dx;
    // }
    // this.x += this.dx;
    this.y += this.dy;
    // console.log(this.y);

  }

}

const planetArray = [];
// if(planetArray.length > 0) {
//
// }
function animate() {

  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < planetArray.length; i++) {
    ship.draw();
    ship.update();
    planetArray[i].draw();
    planetArray[i].update();

  }
  // rocket();
}
let time = 200;

const setTimer = () => {

  let timer = setInterval(() => {
    let x = Math.random() * innerWidth;
    let y = Math.random() * 20;
    let dx = 0;
    let dy = 1.5;

    let radius = 5;


    planetArray.push(new Planet(x, y, dx, dy, radius));

    time--;


    if (time === 0) {

      clearInterval(timer);

    }
  }, 1000)
}
animate();
setTimer();
