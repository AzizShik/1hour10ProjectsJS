document.addEventListener('DOMContentLoaded', (event) =>{




  const toggle = document.getElementById('theme');

  toggle.addEventListener('change',(e) => {

    document.body.classList.toggle('dark-mode', e.target.checked);


  });




});


