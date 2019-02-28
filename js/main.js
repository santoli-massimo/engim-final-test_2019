var mainNav = document.getElementById('main-nav')
var navli = document.querySelectorAll('#pages > .container')



  
mainNav.addEventListener('click', function(e){
  if(e.target.dataset.page){
    
    for (let index = 0; index < navli.length; index++) {
      navli[index].style.display = 'none'
    }
    
    var toShow = document.getElementById(e.target.dataset.page)
    toShow.style.display = 'block'
    
  }
  
})


  
/*------ZOO------*/

var gabbia = {
  'Topo': 'La saggezza senza l\'operosità porta alla banalità.',
  'Bue': 'L\'operosità senza la saggezza porta alla futilità.',
  'Tigre': 'Il coraggio senza la prudenza porta all\'incoscienza',
  'Coniglio': 'La prudenza senza il coraggio porta alla codardia.',
  'Drago': 'La forza senza l\'agilità porta alla rottura.',
  'Serpente': 'L\'agilità senza la forza porta alla compromissione.',
  'Cavallo': 'La lungimiranza senza l\'uniformità porta all\'abbandono.',
  'Capra': 'L\'uniformità senza la lungimiranza porta al ristagno.',
  'Scimmia': 'La mutabilità senza la costanza porta alla stupidità.',
  'Gallo': 'La costanza senza la mutabilità porta all\'impacciatezza.',
  'Cane': 'La fedeltà senza l\'amabilità porta al rifiuto.',
  'Maiale': 'L\'amabilità senza la fedeltà porta all\'immoralità'
}

var src = document.getElementById('imgZoo');
var capture = document.getElementById('capZoo');


function runsImg(animale){
  src.src = "img/zoo/" + animale + ".jpg";
  capture.textContent = gabbia[animale];
}
  
/*------Fine ZOO------*/

var snow = document.getElementsByClassName('colPar')


for (var index = 0; index < snow.length; index++) {
    
    snow[index].addEventListener('click',function(event) {
      var num = Math.round(256*Math.random());
      var num1 = Math.round(256*Math.random());
      var num2 = Math.round(256*Math.random());
      event.target.style.color = 'rgb(' + num + ',' + num1 + ',' + num2 + ')';
    })
    
    
}



