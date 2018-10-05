const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');


ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Press Number 2 Key to Spawn Player 2", canvas.width / 2, canvas.height / 2);
ctx.fillText("Click Anywhere to Begin Game", canvas.width / 2, canvas.height / 1.8);
let sum = 0;
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    console.log('hello');
    ctx.fillText("Score: "+sum, 50, 20);
}
// myImages.push(myCanvasImage);

const getDistance = (x1, x2, y1, y2) => {
  const xDistance = x1 - x2;
  const yDistance = y1 - y2;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

let number2 = false;
let righTpresseD = false;
let lefTpresseD = false;
let rightPressed = false;
let leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 50) {
    number2 = true;
  }
  if (e.keyCode == 68) {
    righTpresseD = true;
  } else if (e.keyCode == 65) {
    lefTpresseD = true;
  }

  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {

  if (e.keyCode == 68) {
    righTpresseD = false;
  } else if (e.keyCode == 65) {
    lefTpresseD = false;
  }
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

// PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2
//     PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2
//         PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2
//             PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2

class Player2 {
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
    //ctx.strokeStyle = 'blue';
    if (player2Sum.length > 0) {
      ctx.fillStyle = 'maroon';
    } else {
      ctx.fillStyle = 'rgb(254,187,187)';
    }
    ctx.fill();
    ctx.stroke();
  }
  update() {

    if (righTpresseD) {
      this.x += 10;
    } else if (lefTpresseD)
      this.x -= 10;
  }
}








// PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2
//     PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2
//         PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2
//             PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2  PLAYER 2
// const rocket = () => {
//
//   ctx.beginPath();
//   ctx.moveTo(75, 50);
//   ctx.lineTo(90, 85);
//   ctx.lineTo(60, 85);
//   ctx.fill();
//
//  distance from circle1 to circle2 + radius of circle1 and circle2
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
    //ctx.strokeStyle = 'blue';
    if (sumArray.length > 0) {
      ctx.fillStyle = 'blue';
    } else {
      ctx.fillStyle = 'CornflowerBlue';
    }

    ctx.fill();
    ctx.stroke();
  }
  update() {

    if (rightPressed) {
      this.x += 10;
    } else if (leftPressed)
      this.x -= 10;
  }
}
const rocket = new Rocket(innerWidth / 2, innerHeight / 1.1, 0, 0, 30);
const player2 = new Player2(innerWidth / 2 + 20, innerHeight / 1.1, 0, 0, 30);



// ctx.fillText('sum', canvas.width/2, canvas.height/2);

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
    // ctx.strokeStyle = 'blue';

    ctx.fillStyle = 'white';

    ctx.fill();
    ctx.stroke();

  }

  update() {
    for (let i = 0; i < planetArray.length; i++) {
      if (this.y > innerHeight) {
        sum++;

        planetArray.splice(i, 1);
        break;
        //this.pop();
      }
    }
    // if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    //   this.dy = -this.dy;
    // }
    // if (this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
    //   this.dx = -this.dx;
    // }
    // this.x += this.dx;
    this.y += this.dy;
    // console.log(this.y);
    // console.log('working');


  }
  collision() {
    let num1 = 1;
    let num2 = 1;
    // for (let k = 0; k < planetArray.length; k++) {
    //
    //
    //
    // }

    for (let i = 0; i < planetArray.length; i++) {

      const player2Distance = getDistance(player2.x, this.x, player2.y, this.y);
      if (player2Distance < player2.radius + this.radius) {
        if (number2) {
          player2Sum.push(planetArray.splice(i, 1));
        }
        // ctx.fillText(sumArray.length, canvas.width/2, canvas.height/2);
        // console.log(sumArray.length);
        break;
      }
      const distance = getDistance(rocket.x, this.x, rocket.y, this.y);
      if (distance < rocket.radius + this.radius) {
        sumArray.push(planetArray.splice(i, 1));
        // ctx.fillText(sumArray.length, canvas.width/2, canvas.height/2);
        // console.log(sumArray.length);
        break;
      }


    }

    // ctx.fillText(sum, canvas.width/2, canvas.height/2);

  }

}
const player2Sum = [];
const sumArray = [];

const player2Array = [];
const planetArray = [];
// if(planetArray.length > 0) {
//
// }
function animate() {


  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, innerWidth, innerHeight);
  rocket.draw();

  for (let i = 0; i < planetArray.length; i++) {


    planetArray[i].draw();
    planetArray[i].update();
    planetArray[i].collision();

  }
  rocket.update();
  drawScore();
  if (number2) {
    player2.draw();
    player2.update();

    // rocket();
  }
}

let time = 800;
// const SETTIMER = () => {
//
//   const TIMER = setInterval(() => {
//      const x = Math.random() * innerWidth;
//     const y = Math.random() * 20;
//     const dx = 0;
//     const dy = 9;
//
//     let radi = [10, 7, 5]
//     let radius = radi[Math.floor(Math.random() * radi.length)];
//
//     // const colors = ['green', 'red', 'brown', 'yellow', 'white']
//     // let coloR = colors[Math.floor(Math.random() * colors.length)];
//
//     planetArray.push(new Planet(x, y, dx, dy, radius));
//
//
//
//
//
//     time--;
//
//     if (sumArray.length === 1) {
//
//       rocket.color = 'red';
//       // rocket.update();
//     }
//     if (sumArray.length > 0) {
//       swal('Player 2 Wins!');
//       clearInterval(TIMER);
//       ctx.font = "30px Comic Sans MS";
//       ctx.fillStyle = "red";
//       ctx.textAlign = "center";
//       ctx.fillText('hello', canvas.width / 2, canvas.height / 2);
//       // ctx.font = "30px Comic Sans MS";
//       // ctx.fillStyle = "red";
//       // ctx.textAlign = "center";
//       // ctx.fillText(sumArray.length, canvas.width/2, canvas.height/2);
//
//     }
//     if (player2Sum.length > 0) {
//       swal('Player 1 Wins!');
//       ctx.font = "30px Comic Sans MS";
//       ctx.fillStyle = "red";
//       ctx.textAlign = "center";
//       ctx.fillText('hello', canvas.width / 2, canvas.height / 2);
//       clearInterval(TIMER);
//
//     }
//     if (time === 0) {
//       swal('You Win!');
//       clearInterval(TIMER);
//
//     }
//   }, 80)
// }
const setTimer = () => {

  const timer = setInterval(() => {

    // console.log(sumArray);
    // if(sumArray.length > 4) {
    //   console.log(sumArray);
    //   clearInterval(timer);
    //   ctx.font = "30px Comic Sans MS";
    //   ctx.fillStyle = "red";
    //   ctx.textAlign = "center";
    //   ctx.fillText(sumArray.length, canvas.width/2, canvas.height/2);
    //
    // }
    const x = Math.random() * innerWidth;
    const y = Math.random() * 20;
    const dx = 0;
    const dy = 9;

    let radi = [10, 7, 5]
    let radius = radi[Math.floor(Math.random() * radi.length)];

    // const colors = ['green', 'red', 'brown', 'yellow', 'white']
    // let coloR = colors[Math.floor(Math.random() * colors.length)];

    planetArray.push(new Planet(x, y, dx, dy, radius));





    time--;

    if (sumArray.length === 1) {

      rocket.color = 'red';
      // rocket.update();
    }
    if (sumArray.length > 0) {
      swal('Player 2 Wins!');
      clearInterval(timer);
      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText('hello', canvas.width / 2, canvas.height / 2);
      // ctx.font = "30px Comic Sans MS";
      // ctx.fillStyle = "red";
      // ctx.textAlign = "center";
      // ctx.fillText(sumArray.length, canvas.width/2, canvas.height/2);

    }
    if (player2Sum.length > 0) {
      swal('Player 1 Wins!');
      ctx.font = "30px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText('hello', canvas.width / 2, canvas.height / 2);
      clearInterval(timer);

    }
    if (time === 0) {
      swal('You Win!');
      clearInterval(timer);

    }
  }, 50)
}

canvas.addEventListener('click', () => {

  // SETTIMER();
  setTimer();
  animate();
})
