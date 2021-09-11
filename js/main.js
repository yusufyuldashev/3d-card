const elCard = document.querySelector('.card');
const browserWidth = document.documentElement.clientWidth;
const browserHeight = document.documentElement.clientHeight;

let x = 0;
let y = 0;

window.addEventListener("mousemove", (event) => {
  var posX = event.clientX;
  var posY = event.clientY;
  console.log(posX, posY);

  x = (posX - (browserWidth / 2)) / 75;
  y = ((browserHeight / 2) - posY) / 75;

  elCard.style.transform = "rotateY("+x+"deg) rotateX("+y+"deg)";
});
