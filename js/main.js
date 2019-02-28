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
var displayString, dotUsed, nonZero, lastIsEqual;
resetCalc();

function resetCalc() {
  displayString = '0';
  display.value = '0';
  dotUsed = false;
  nonZero = false;
  lastIsEqual = true;
}
 
function addCalc(char) {
  //console.log(displayString)
  var firstChar = displayString[0];
  var lastChar = displayString[displayString.length -1];
  
  switch (char) {
 
    case '.':
      if (dotUsed) {
        return
      } else {
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || displayString === '') displayString = displayString + '0';
        dotUsed = true;
        nonZero = true;
      }
      lastIsEqual ? displayString = '0' + char : displayString += char;
      
    break;

    case '+':
    case '-':
    case '*':
    case '/':
      if (lastChar === '.') displayString += '0';
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        displayString = displayString.substring(0, (displayString.length -1));
      }
      displayString += char;
      dotUsed = false;
      nonZero = false;
    break;

    case '0':
      if (!nonZero) return;
      if (lastIsEqual) {
        displayString = char;
      } else {
        displayString += char;
      }
    break;

    default:
      if (displayString === '0') displayString = '';
      if (lastIsEqual) {
        displayString = char;
      } else {
        displayString += char;
      }
      nonZero = true;
    break;
  }
  
  lastIsEqual = false;
  if (firstChar === '+' || firstChar === '*' || firstChar === '/') displayString = displayString.substring(1, (displayString.length));
  display.value = displayString;
  //console.log(displayString)
}

function equalsCalc(){
  lastIsEqual = true;
  dotUsed = false;
  var lastChar = displayString[displayString.length -1];
  if (lastChar === '.') displayString += '0';
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    displayString = displayString.substring(0, (displayString.length -1));
  }
  displayString = "" + eval(displayString);
  display.value = displayString;
  //displayString = '';
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
    
    document.forms['persone']['nome'].value = "";
    document.forms['persone']['cognome'].value = "";
  }
});
  
var btdeleteF = document.getElementsByName("DeleteF");
btdeleteF[0].addEventListener('click', function(){
  var list = document.getElementById("lista");
    var figli = list.childNodes;
    console.log(figli);

    if (list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
});

/*
var btdelete = document.getElementsByName("Delete");
btdelete[0].addEventListener('click', function(){

  var tab = document.getElementById('lista');
  var nome = document.forms['persone']['nome'].value;
  var cognome = document.forms['persone']['cognome'].value;

  if (nome == "undefined" || nome == "" || cognome == "undefined" || cognome == "")
    tab.innerHTML='<p>nome e cognome obbligatori</p>';
    //eseguo ricerca nome e cognome per cancellarlo
  else{
    var flag = false;
    var lista = document.querySelectorAll('lista');
    for(var i=0; i<persone.length; i++) {
        if(persone[i].Nome == nome && persone[i].CogNome == cognome){
          lista.removeChild(lista.childNodes[i]);
          console.log(lista.removeChild(lista.childNodes[i]));
          console.log(lista.childNodes[i]);
        }
    }
    if(flag)
      tab.innerHTML='<p>nome e cognome non corrispondono a quelli immessi precedentemente</p>';
  }
});*/ 
  
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
