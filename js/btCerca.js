/*------ Cerca Parole Locale ----------*/

var btCerca = document.getElementById('btcerca');
document.getElementById('write').innerHTML = " ";

btCerca.addEventListener('click', function(e){
  var world = document.getElementById('txtcerca').value;
  
  var txt = document.getElementById('txtBacon').textContent;
  
  if (world.trim() != "" || !world.includes("<") || !world.includes(">")){
    
    document.getElementById('write').innerHTML = " ";
    
    if(txt.includes(world)){
      var parole = txt.split(' ');
      
      if (world.includes("-") || world.includes(",") || world.includes(".")){

        stampaConPunt(parole, world);
      } else{
        for(var i=0; i<parole.length; i++){
          var parolaTemp = parole[i].replace(/[^A-Za-z0-9]/g, "");
          if(parolaTemp.trim().toLowerCase() == world){
            if(parole[i].toLowerCase() == world){
              parole[i] = '<span style="background-color: brown; color:white;">' + parole[i] + "</span>";
            } else {
              punt = parole[i].substring(parole[i].indexOf(world) + world.length);
              parole[i] = '<span style="background-color: brown; color:white;">' + world + "</span>" + punt;
            }
            document.getElementById('txtBacon').innerHTML = parole.join(' ');
          }
        }
      }
    }else{
      document.getElementById('txtBacon').innerHTML = txt;
      document.getElementById('write').textContent = "Parola " + world + " non è stata trovata.";
    }
    document.getElementById('txtcerca').value = "";
  }
  else{
    document.getElementById('txtBacon').innerHTML = txt;
    document.getElementById('write').innerHTML = "Immettere parola da cercare!";
  }
});

function stampaConPunt(parole, world)
{
  for(let i=0; i<parole.length; i++)
  {
      if(parole[i].toLowerCase() == world){
        parole[i] = '<span style="background-color: brown; color:white;">' + world + "</span>";
      }
      document.getElementById('txtBacon').innerHTML = parole.join(' ');
  }
}