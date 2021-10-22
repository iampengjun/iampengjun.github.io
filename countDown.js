let cd = document.querySelector("#cd");
let spans = cd.getElementsByTagName("span");

// 四种方法 获取 当前时间 距离1970.1.1的总毫秒数
// let dates = new Date();
// console.log(Date.now());           // 方法1
// console.log(+new Date());          // 方法2
// console.log(dates.getTime());      // 方法3
// console.log(dates.valueOf());      // 方法4

let timeWait = +new Date("2022-1-1 00:00:00"); //未来时间
let timer = null;

clearInterval(timer);
timer = setInterval(countDown, 1000);

function countDown() {
  let currentTime = Date.now(); //当前总毫秒数
  let tSpan=(timeWait-currentTime)/1000;//倒计时总秒数

  if (tSpan >= 0) {
    let day = parseInt(tSpan / 60 / 60 / 24); // 天
    day = day < 10? '0' + day : day;
    let hour = parseInt((tSpan / 60 / 60) % 24); // 时
    hour = hour < 10? '0' + hour : hour;
    let minutes = parseInt((tSpan / 60) % 60); // 分
    minutes = minutes < 10? '0' + minutes : minutes;
    let seconds = parseInt(tSpan % 60); // 秒
    seconds = seconds < 10? '0' + seconds : seconds;

    spans[0].innerHTML = day;
    spans[1].innerHTML = hour;
    spans[2].innerHTML = minutes;
    spans[3].innerHTML = seconds;
  } else {
    clearInterval(timer);
  }
}
