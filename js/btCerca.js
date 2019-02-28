/*------ Cerca Parole Locale ----------*/

var btCerca = document.getElementById('btcerca');
document.getElementById('write').innerHTML = " ";

btCerca.addEventListener('click', function(e){
  var parola = document.getElementById('txtcerca').value;
  
  var txt = document.getElementById('txtBacon').textContent;
  
  if (parola.trim() != ""){
    
    document.getElementById('write').innerHTML = " ";
    
    if(txt.includes(parola)){
      if (parola.includes("-")){
        var parole = txt.split(' ');
        for(var i=0; i<parole.length; i++){
          
          if(parole[i].toLowerCase() == parola){
            parole[i] = '<span style="background-color: brown; color:white;">' + parole[i] + "</span>";
          }
          document.getElementById('txtBacon').innerHTML = parole.join(' ');
        }
      } else{
        
        var parole = txt.split(' ');
        for(var i=0; i<parole.length; i++){
          var parolaTemp = parole[i].replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, "");
          if(parolaTemp.trim().toLowerCase() == parola){
            if(parole[i].toLowerCase() == parola){
              parole[i] = '<span style="background-color: brown; color:white;">' + parole[i] + "</span>";
            } else {
              punt = parole[i].substring(parole[i].indexOf(parola) + parola.length);
              parole[i] = '<span style="background-color: brown; color:white;">' + parola + "</span>" + punt;
            }
            document.getElementById('txtBacon').innerHTML = parole.join(' ');
          }
        }
      }
    }else{
      document.getElementById('txtBacon').innerHTML = txt;
      document.getElementById('write').innerHTML = "Parola " + parola + " non è stata trovata.";
    }
    document.getElementById('txtcerca').value = "";
  }
  else{
    document.getElementById('txtBacon').innerHTML = txt;
    document.getElementById('write').innerHTML = "Immettere parola da cercare!";
  }
});