var mainNav = document.getElementById('main-nav')
var navli = document.querySelectorAll('#pages > .container')

/*Clock's variables*/ 
//time.getMonth() ritorna valori tra 0 e 11 e non tra 1 e 12.     
var time, clock, date;
function updateClock() {
  time = new Date;
  clock = [time.getHours(), ("0" + time.getMinutes()).slice(-2), ("0" + time.getSeconds()).slice(-2)];
  date = [time.getDate(), ("0" + (time.getMonth() + 1)).slice(-2), time.getFullYear()];
  document.getElementById("time").innerHTML = 
  clock.join(' : ') + 
  " - " + 
  date.join('/');
}
updateClock();
setInterval(updateClock, 1000);
  
/* _______________________________ */ 

    
/*Calc*/
var display = document.getElementById('risultato');
var displayString = '';
var dotUsed = false;
resetCalc();

function resetCalc() {
  displayString = '0';
  display.value = '0';
}
 
function addCalc(char) {
  var lastChar = displayString[displayString.length -1];
  switch (char) {
    case '.':
      if (dotUsed) {
        return
      } else {
        dotUsed = true;
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') displayString = displayString + '0';
      }
    break;
    case '+':
    case '-':
    case '*':
    case '/':
      dotUsed = false;
    break;
  }
  (displayString === '0' || displayString === '-0') ? displayString = char : displayString += char;
  display.value = displayString;
}

function equalsCalc(){
  displayString = "" + eval(displayString);
  display.value = displayString;
  displayString = '';
}

function changeCalc(){
  displayString[0] === '-' ? displayString = displayString.substring(1) : displayString = '-' + displayString;
  display.value = displayString;
}

/* _______________________________ */

  
mainNav.addEventListener('click', function(e){
  if(e.target.dataset.page){
    
    for (let index = 0; index < navli.length; index++) {
      navli[index].style.display = 'none'
    }
    
    var toShow = document.getElementById(e.target.dataset.page)
    toShow.style.display = 'block'
    
  }
  
})

/*------cerca----------*/

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
  
  
  
