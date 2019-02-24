var mainNav = document.getElementById('main-nav')
var navli = document.querySelectorAll('#pages > .container')

/*Clock's variables*/ 
//time.getMonth() ritorna valori tra 0 e 11 e non tra 1 e 12.           
setInterval(function(){ 
  var time = new Date;
  var clock = [time.getHours(), time.getMinutes(), time.getSeconds()];
  var date = [time.getDate(), time.getMonth()+1, time.getFullYear()];
  document.getElementById("time").innerHTML = 
  clock.join(' : ') + 
  " - " + 
  date.join('/'); }, 1000);
  
  console.log({navli});
  
  
  mainNav.addEventListener('click', function(e){
    if(e.target.dataset.page){
      
      for (let index = 0; index < navli.length; index++) {
        navli[index].style.display = 'none'
      }
      
      var toShow = document.getElementById(e.target.dataset.page)
      toShow.style.display = 'block'
      
    }
    
  })
  
  var btCerca = document.getElementById('btcerca');
  document.getElementById('write').innerHTML = " ";
  
  btCerca.addEventListener('click', function(e){
    var parola = document.getElementById('txtcerca').value;
    
    var txt = document.getElementById('txtBacon').textContent;
    
    if (parola != "" || parola != NaN){
      
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
  
  /*------form aggiungi----------*/
  
  var aggiungi = document.getElementsByName("Aggiungi");
  var persone=[];
  var i=0; //indice per aggiungere
  aggiungi[0].addEventListener('click', function(){
    var tab=document.getElementById('lista');
    var nome=document.forms['persone']['nome'].value;
    var cognome=document.forms['persone']['cognome'].value;
    //controllo compilazione campi
    if (nome == "undefined" || nome == "" || cognome == "undefined" || cognome == "")
    tab.innerHTML='<p>nome e cognome obbligatori</p>';
    //eseguo procedura per inserimento
    else{               
      t=i;    //indice per controlli 
      //controllo se già inserito
      if(i>0){         
        while(t>0){
          if(persone[t-1].Nome != nome || persone[t-1].CogNome != cognome)
          t--;
          else t=-1;            
        }
      } 
      //eseguo inserimento se persona non ancora presente
      if(t==0)   
      {
        function Persona(nome, cognome) {
          this.Nome = nome;
          this.CogNome = cognome;
        }
        persone[i] = new Persona(nome, cognome);
        i++;
        //creo lista ordinata con nome e cognome persona sotto il form
        tab.innerHTML='<ol id="0"><li>'+persone[i-1].Nome+" "+persone[i-1].CogNome+'</li></ol>'
        for(var t=i-1;t>0;t--)
        {
          li=document.createElement('li');
          lin=document.getElementById('0');
          lin.appendChild(li);
          li.innerHTML=persone[t-1].Nome+' '+persone[t-1].CogNome;
        }
      }
      // informo che la persona è gia inserita
      else 
      tab.innerHTML='<p>dati gia inseriti</p>';
    }
  });
  
  
  
