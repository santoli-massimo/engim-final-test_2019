/*------ Cerca Parole Locale ----------*/

var btCerca = document.getElementById('btcerca');
document.getElementById('write').innerHTML = " ";

var txt = document.getElementById('txtBacon').textContent;

btCerca.addEventListener('click', function(e){
  var world = document.getElementById('txtcerca').value;
  
  if (world.trim() == "")
  {
    document.getElementById('txtBacon').innerHTML = txt;
    document.getElementById('write').innerHTML = "Immettere parola da cercare!";
  }else if (!world.includes("<") || !world.includes(">")){
    
    document.getElementById('write').innerHTML = "";
    
    if(txt.includes(world)){
      var parole = txt.split(' ');
      
      if (controlloCaratteri(parole, world))
      {
        if (world.includes("-") || world.includes(",") || world.includes("."))
        {
          stampaConPunt(parole, world);
        } else{
          for(var i=0; i<parole.length; i++){
            var parolaTemp = parole[i].replace(/[^A-Za-z0-9]/g, "").trim();
            if(parolaTemp.toLowerCase() == world)
            {
              if(parole[i].toLowerCase() == world){
                parole[i] = '<span style="background-color: brown; color:white;">' + parole[i] + "</span>";
              } else {
                punt = parole[i].substring(parole[i].indexOf(world) + world.length);
                parole[i] = '<span style="background-color: brown; color:white;">' + world + "</span>" + punt;
              }
              document.getElementById('txtBacon').innerHTML = parole.join(' ');
            }
          }
          document.getElementById('txtcerca').value = "";
        }
      }else{
        document.getElementById('txtBacon').innerHTML = txt;
        document.getElementById('write').textContent = "Parola " + world + " non è stata trovata.";
      }
    }else{
      document.getElementById('txtBacon').innerHTML = txt;
      document.getElementById('write').textContent = "Parola " + world + " non è stata trovata.";
    }
  }else{
    document.getElementById('txtBacon').innerHTML = txt;
    document.getElementById('write').textContent = "Parola " + world + " non è stata trovata.";
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
  document.getElementById('txtcerca').value = "";
}

function controlloCaratteri(parole, world)
{
  const lungW = world.length; 
  for(let i=0; i<parole.length; i++)
  {
    let parolaT = parole[i].replace(/[^A-Za-z0-9]/g, "").trim();
   
     if(parolaT.length == lungW && parolaT == world) return true;
  }
  return false;
}

/*altro metodo di ricerca*/
txtcerca2.addEventListener('input', function(e)
{    
  document.getElementById('write').innerHTML = "";
  if(txt.includes(document.getElementById('txtcerca2').value))
  {
    const worldRegex = new RegExp(document.getElementById('txtcerca2').value, "gi");
    document.getElementById('txtBacon').innerHTML = txt.replace(worldRegex, '<span style="background-color: brown; color:white;">$&</span>');
  }
  else
    document.getElementById('txtBacon').innerHTML = txt;
});
