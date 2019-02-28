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
