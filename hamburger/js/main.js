const burgerBtn = document.getElementById('burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLi = document.querySelectorAll('.burger-menu-li');
const content = document.querySelector('.content');
const menuLine = document.querySelector('.burger-menu-wrapper')

burgerBtn.addEventListener('click', () =>{
  menuElementActive();
});

burgerMenu.addEventListener('click', (e) =>{
  if(!e.target.closest('.burger-menu-list')){
    menuElementRemove();
  }
});

for(let oneLi of burgerLi){
  oneLi.addEventListener('click', () =>{
    menuElementRemove();
  });
}

function menuElementActive(){
  burgerBtn.classList.toggle('burger--active');
  burgerMenu.classList.toggle('burger-menu--active');
  content.classList.toggle('content--active');
  menuLine.classList.toggle('line--active');
}

function menuElementRemove() {
  burgerBtn.classList.remove('burger--active');
  burgerMenu.classList.remove('burger-menu--active');
  content.classList.remove('content--active');
  menuLine.classList.remove('line--active');
}