const carouselItems = document.querySelectorAll('.container__item '),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlider = (n) => {
  for(let carouselItem of carouselItems ){
    carouselItem.classList.remove('carousel--active');
  }
  carouselItems[n].classList.add('carousel--active');
}

const activeDot = (n) => {
  for(let dot of dots){
    dot.classList.remove('dot--active');
  }
  dots[n].classList.add('dot--active');
}

const prepareCurrentSlide = (n) => {
  activeSlider(n);
  activeDot(n);
}

const nextSlide = () => {
  if(index == carouselItems.length - 1 ){
    index = 0;
    prepareCurrentSlide(index);
  } else{
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if(index == 0){
    index = carouselItems.length - 1;
    prepareCurrentSlide(index);
  } else{
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);