var telVal = document.getElementById('telefonoAndrea').value;
var emailVal = document.getElementById('emailAndrea').value;
var nomeValVal = document.getElementById('nomeAndrea').value;
var cognomeVal = document.getElementById('cognomeAndrea').value;
var matricolaVal = document.getElementById('matricolaAndrea').value;

var btAndreaInvia = document.getElementById('btAndreaInvia');
var btAndreaReset = document.getElementById('btAndreaReset');

btAndreaInvia.addEventListener('click', function(e){

  if (document.registr.cognomeAndrea.value == "") {
    alert("Devi inserire il cognome!");
  }
  else
    alert("Cognome inserito");

  if (document.registr.nomeAndrea.value == "") {
      alert("Devi inserire il nome!");
  }
  else
    alert("Nome inserito");


    if (document.registr.matricolaAndrea.value == "") {
        alert("Devi inserire la matricola!");
    }
    else
      alert("Matricola inserita");

      if (document.registr.emailAndrea.value == "") {
          alert("Devi inserire l'email!");
      }
      else
        alert("E-mail inserita");


        if (document.registr.telefonoAndrea.value == "") {
            alert("Devi inserire il telefono!");
        }
        else
          alert("Telefono inserito");

});

btAndreaReset.addEventListener('click', function(e){

  document.getElementById('telefonoAndrea').innerHTML = "";
  document.getElementById('emailAndrea').innerHTML = "";
  document.getElementById('nomelAndrea').innerHTML = "";
  document.getElementById('cognomeAndrea').innerHTML = "";
  document.getElementById('matricolaAnrdea').innerHTML = "";

});
