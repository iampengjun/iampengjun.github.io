let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function rgbNum() {
  let rNum = Math.random() * 255;
  let gNum = Math.random() * 255;
  let bNum = Math.random() * 255;
  return "rgb(" + rNum + "," + gNum + "," + bNum + ")";
}

let x = Math.random() * 30,
  y = Math.random() * 40,
  r;
xSpeed = Math.random() * 50;
ySpeed = Math.random() * 70;

function drawCircle(x, y, r) {
  r = Math.random() * 100;
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
  c.strokeStyle = rgbNum();
  c.stroke();
}

setInterval(function () {
  x += xSpeed;
  y += ySpeed;
  c.clearRect(0, 0, innerWidth, innerHeight);
  drawCircle(x, y, r);
  if (x > innerWidth || x < 0) {
    xSpeed = -xSpeed;
  }
  if (y > innerHeight || y < 0) {
    ySpeed = -ySpeed;
  }
}, 80);
