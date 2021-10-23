let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let timer = null;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

class RunMan {
  constructor() {
    this.flag = false;
    this.sx = 0;
    this.sy = 0;
    this.sw = 32;
    this.sh = 48;
    this.dx = 200;
    this.dy = 200;
    this.dw = 32 * 2;
    this.dh = 48 * 2;
    this.speed = 5;

    let img = new Image();
    img.src = "https://untamed.wild-refuge.net/images/rpgxp/wedding/weddingguy02.png";

    img.onload = () => {
      c.drawImage(
        img,
        this.sx,
        this.sy,
        this.sw,
        this.sh,
        this.dx,
        this.dy,
        this.dw,
        this.dh
      );

      this.img = img;
    };
  }
  update(dir) {
    if (dir == "turn") {
      this.sy += 48;
      if (this.sy == 4 * 48) {
        this.sy %= 48 * 4;
      }
    }
    if (dir == "left") {
      this.sx += 32;
      this.dx -= this.speed;
      if (this.sx == 4 * 32) {
        this.sx %= 32 * 4;
      }
    }
    if (dir == "up") {
      this.sx += 32;
      this.dy -= this.speed;
      if (this.sx == 4 * 32) {
        this.sx %= 32 * 4;
      }
    }
    if (dir == "down") {
      this.sx += 32;
      this.dy += this.speed;
      if (this.sx == 4 * 32) {
        this.sx %= 32 * 4;
      }
    }
    if (dir == "right") {
      this.sx += 32;
      this.dx += this.speed;
      if (this.sx == 4 * 32) {
        this.sx %= 32 * 4;
      }
    }
  }
  render() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(
      this.img,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.dx,
      this.dy,
      this.dw,
      this.dh
    );
  }
}

let man1 = new RunMan();

document.querySelector(".group").addEventListener("click", function (ev) {
  let target = ev.target;
  switch (target.className) {
    case "play":
      if (this.flag) {
        return;
      }
      this.flag = true;
      timer = setInterval(function () {
        man1.update();
        man1.render();
      }, 100);
      break;
    case "stop":
      this.flag = false;
      clearInterval(timer);
      break;
  }
});

document.addEventListener("keyup", grabEvent);

function grabEvent(ev) {
  let keycode = ev.keyCode;
  console.log(keycode);

  switch (keycode) {
    case 32:
      man1.update("turn");
      break;
    case 37:
      man1.update("left");
      break;
    case 38:
      man1.update("up");
      break;
    case 39:
      man1.update("right");
      break;
    case 40:
      man1.update("down");
  }

  man1.render();
}
