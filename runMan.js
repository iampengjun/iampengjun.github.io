let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let timer = null;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

class RunMan {
    constructor() {
        this.flag = false;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.dx = Math.round(Math.random() * 10) - 5;
        this.dy = Math.round(Math.random() * 10) - 5;

        let img = new Image();
        img.src = "guy.png";

        img.onload = () => {
            c.drawImage(img, this.x, this.y, img.width, img.height);
        };
        this.img = img;
    }
    update(dir) {
        switch (dir) {
            case "left":
                this.x -= 3;
                break;
            case "right":
                this.x += 3;
                break;
            case "up":
                this.y -= 3;
                break;
            case "down":
                this.y += 3;
                break;
            default:
                this.x += this.dx;
                this.y += this.dy;
                break;
        }
    }
    render() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
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
      }, 150);
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

  switch (keycode) {
    case 37:
      man1.update("left");
      document.querySelector(".stop").click();
      break;
    case 38:
      man1.update("up");
      document.querySelector(".stop").click();
      break;
    case 39:
      man1.update("right");
      document.querySelector(".stop").click();
      break;
    case 40:
      man1.update("down");
      document.querySelector(".stop").click();
  }

  man1.render();
}
