const popupLinks = document.querySelectorAll('.popup-link'),
      popupCloses = document.querySelectorAll('.popup__close');


if(popupLinks.length > 0){
  for(let i = 0; i < popupLinks.length; i++){
    let popupLink = popupLinks[i];

    popupLink.addEventListener('click', (e) => {
      const id = popupLink.getAttribute('href').replace('#', "");
      let activeModal = document.getElementById(id);

      activeModal.classList.add('popup--open');


      activeModal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup__content')){
          ElementpopupClose();
        }
      });
    });
  }
}

for(let popupClose of popupCloses){
  popupClose.addEventListener('click', ElementpopupClose);
}


function ElementpopupClose() {
  document.querySelector('.popup--open').classList.remove('popup--open');
}