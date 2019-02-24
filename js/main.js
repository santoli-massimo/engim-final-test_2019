

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

//console.log({navli});


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
