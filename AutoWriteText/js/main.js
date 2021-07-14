const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, fuga.';


let index = 0;

function writeText(){
  document.getElementById('container').innerText = text.slice(0, index);

  index++;

  if(index > text.length){
    index = 0;
  }
  
}

setInterval(writeText, 100);