/*------form aggiungi----------*/

/*------ button Aggiungi ----------*/

var aggiungi = document.getElementsByName("Aggiungi");
document.getElementById('addF').innerHTML = " ";
var persone=[];
var i=0; //indice per aggiungere
var tab=document.getElementById('lista');

aggiungi[0].addEventListener('click', function(){
  document.getElementById('addF').innerHTML = "";
  var nome=document.forms['persone']['nome'].value;
  var cognome=document.forms['persone']['cognome'].value;
  //controllo compilazione campi
  if (nome == "undefined" || nome.trim() == "" || cognome == "undefined" || cognome.trim() == "")
  document.getElementById('addF').innerHTML = 'nome e cognome obbligatori';
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
      stampa(tab, persone);
    }
    // informo che la persona è gia inserita
    else 
    document.getElementById('addF').innerHTML = 'dati gia inseriti';
    
  }
  document.forms['persone']['nome'].value = "";
  document.forms['persone']['cognome'].value = "";
});
  

/*------ button Delete First ----------*/

var btdeleteF = document.getElementsByName("DeleteF");
btdeleteF[0].addEventListener('click', function(){
  document.getElementById('addF').innerHTML = "";
  var list = document.getElementById("lista");
    
    if (list.hasChildNodes()) {   
      persone.splice(0, 1);
      i--;
      ricreaLista();
    }
});

/*------ button Delete con nome passato ----------*/

var btdelete = document.getElementsByName("Delete");
btdelete[0].addEventListener('click', function(){
  document.getElementById('addF').innerHTML = "";
  var nome = document.forms['persone']['nome'].value;
  var cognome = document.forms['persone']['cognome'].value;

  if (nome == "undefined" || nome.trim() == "" || cognome == "undefined" || cognome.trim() == "")
    document.getElementById('addF').innerHTML = 'nome e cognome obbligatori';
    //eseguo ricerca nome e cognome per cancellarlo
  else{
    var flag = false;
    for(let index=0; index<persone.length; index++) {
        if(persone[index].Nome == nome && persone[index].CogNome == cognome){
          persone.splice(index, 1);
          flag = true;
          i--;
          ricreaLista();
        }
    }
    if(!flag)
      document.getElementById('addF').innerHTML = 'nome e cognome non corrispondono a quelli immessi precedentemente';
  }
}); 
  
function ricreaLista(){
  if(persone.length == 0)
  {
    tab.innerHTML = "";
  }

  stampa(tab, persone);

  document.forms['persone']['nome'].value = "";
  document.forms['persone']['cognome'].value = "";
}


function stampa(tab, persone){
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
<<<<<<< HEAD

  document.forms['persone']['nome'].value = "";
  document.forms['persone']['cognome'].value = "";
}

=======
}
>>>>>>> 7f666e68aa40f944b912e42f277c28e9259dabfd
