window.addEventListener('mouseover', function(evt) {
    
    // el elemento con clase historia
    if (evt.target.classList.contains('historia')) {
      function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
        
        evt.target.style.color  =bgColor;
        evt.target.style.background='yellow';
        
        }
    
    random_bg_color();
    }
  });

  // Cuando el mouse se quita del elemento
  window.addEventListener('mouseout', function(evt) {
    if (evt.target.classList.contains('historia')) {
        
     evt.target.style.color = 'black';
     evt.target.style.background='white';
    }
  });

  