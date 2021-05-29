console.log('Hello World!');
let deg = 6;
var minit = document.querySelector(".mint");
var hour = document.querySelector(".hour");
var sec = document.querySelector(".sec");
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hour.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  minit.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
})