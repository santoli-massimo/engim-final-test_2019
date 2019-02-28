/*------form aggiungi----------*/

/*------ button Aggiungi ----------*/

var aggiungi = document.getElementsByName("Aggiungi");
var persone=[];
var i=0; //indice per aggiungere
var tab=document.getElementById('lista');

aggiungi[0].addEventListener('click', function(){
  var nome=document.forms['persone']['nome'].value;
  var cognome=document.forms['persone']['cognome'].value;
  //controllo compilazione campi
  if (nome == "undefined" || nome.trim() == "" || cognome == "undefined" || cognome.trim() == "")
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
  document.forms['persone']['nome'].value = "";
  document.forms['persone']['cognome'].value = "";
});
  

/*------ button Delete First ----------*/

var btdeleteF = document.getElementsByName("DeleteF");
btdeleteF[0].addEventListener('click', function(){
  var list = document.getElementById("lista");
    
    if (list.hasChildNodes()) {   
      persone.splice(persone.length, 1);
      i--;
      ricreaLista();
    }
});

/*------ button Delete con nome passato ----------*/

var btdelete = document.getElementsByName("Delete");
btdelete[0].addEventListener('click', function(){

  var nome = document.forms['persone']['nome'].value;
  var cognome = document.forms['persone']['cognome'].value;

  if (nome == "undefined" || nome.trim() == "" || cognome == "undefined" || cognome.trim() == "")

    tab.innerHTML='<p>nome e cognome obbligatori</p>';
    //eseguo ricerca nome e cognome per cancellarlo
  else{
    var flag = false;
    for(let index=0; index<persone.length; index++) {
        if(persone[index].Nome == nome && persone[index].CogNome == cognome){
          persone.splice(index, 1);
          i--;
          ricreaLista();
        }
    }
    if(flag)
      tab.innerHTML='<p>nome e cognome non corrispondono a quelli immessi precedentemente</p>';
  }
}); 
  
function ricreaLista(){
  if(persone.length == 0)
  {
    tab.innerHTML = "";
  }
  console.log(persone.length);
  

  if(persone.length != 0){
    for(let index=0; index<persone.length; index++){
      if (index == 0){
        tab.innerHTML='<ol id="0"><li>'+persone[index].Nome+" "+persone[index].CogNome+'</li></ol>';
      }
      else
      {
        li=document.createElement('li');
        lin=document.getElementById('0');
        lin.appendChild(li);
        li.innerHTML=persone[index].Nome+' '+persone[index].CogNome;
      }
    }
  }

  document.forms['persone']['nome'].value = "";
  document.forms['persone']['cognome'].value = "";
}

