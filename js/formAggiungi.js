/*------form aggiungi----------*/

/*------ button Aggiungi ----------*/

function form(){
var aggiungi = document.getElementsByName("Aggiungi");
document.getElementById('addF').innerHTML = " ";
var persone=[];
let i=0; //indice per aggiungere
var tab=document.getElementById('lista');

aggiungi[0].addEventListener('click', function(){
  document.getElementById('addF').innerHTML = "";
  var nome=document.forms['persone']['nome'].value;
  var cognome=document.forms['persone']['cognome'].value;
  //controllo compilazione campi
  if (nome == "undefined" || nome.trim() == "" || cognome == "undefined" || cognome.trim() == "")
  document.getElementById('addF').innerHTML = 'nome e cognome obbligatori';
  //controllo presenza caratteri speciali per aggiungi
  else if(!controllo(nome,cognome)){
  document.getElementById('addF').innerHTML = 'inserire solo lettere e numeri';
  }
  //eseguo procedura per inserimento
  else{               
    let t=i;    //indice per controlli 
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
    //controllo presenza caratteri speciali per delete con nome passato
  else if(!controllo(nome,cognome)){
      document.getElementById('addF').innerHTML = 'inserire solo lettere e numeri';
    }
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

// genero la laista
function ricreaLista(){
  if(persone.length == 0)
  {
    tab.innerHTML = "";
  }

  stampa(tab, persone);

  document.forms['persone']['nome'].value = "";
  document.forms['persone']['cognome'].value = "";
}

// stampo la lista
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
}

//controllo presenza caratteri speciali
function controllo(nome,cognome){
  var nome_pul = nome.replace(/[^A-Za-z0-9]/g, ""); 
  var cognome_pul = cognome.replace(/[^A-Za-z0-9]/g, "");
  if(nome==nome_pul && cognome==cognome_pul)
                 return true;
  else return false;
} 
}
form();
