const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
  document.body.style.background = randomBg();
  btn.style.background = randomBg();
  btn.style.color = randomBg();
  btn.style.borderTopColor = randomBg();
  btn.style.borderBottomColor = randomBg();
  btn.style.borderLeftColor = randomBg();
  btn.style.borderRightColor = randomBg();
});

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}