var tabella = document.querySelector('.tabellaCorso');

var lista = [
            {postazione:1, nome:'Falon',},
            {postazione:2, nome:'Mario'},
            {postazione:3, nome:'Andrea'},
            {postazione:4, nome:'Flavio'},
            {postazione:5, nome:'Olga'},
            {postazione:6, nome:'Daniele'},
            {postazione:7, nome:'Khalil'},
            {postazione:8, nome:'Jimmy'},
            {postazione:9, nome:'Nicolas'},
            {postazione:10, nome:'Matteo'},
            {postazione:11, nome:'Luigi'},
            {postazione:12, nome:'Ciprian'},
            {postazione:13, nome:'Fabrizio'},
            {postazione:14, nome:'Angelo'},
            {postazione:15, nome:'Adnan'},
            {postazione:16, nome:'Fabrice'}
            ];

var codice = '';
codice += '<table>';
codice += '<tr><th colspan="2">T.S.S. CLASSE 2018/2019</th></tr>';
codice += '<tr><td><a href="#" onclick="ordineNumerico();">POSTAZIONE</a></td><td><a href="#" onclick="ordineAlfabetico();">NOME</a></td></tr>';
  for (i in lista) {
    codice += '<tr>';
    for (j in lista[i]) {
      codice += ('<td>' + lista[i][j] + '</td>');
  }
  codice += '</tr>';
}
  codice += '</table>';
  codice += '<p>*clicca su "nome" per l\'ordine alfabetico</p>';
tabella.innerHTML = codice;

/*-------------------------
FUNZIONE ORDINE ALFABETICO
--------------------------*/

function ordineAlfabetico(){
var codice = '';
codice += '<table>';
codice += '<tr><th colspan="2">T.S.S. CLASSE 2018/2019</th></tr>';
codice += '<tr><td><a href="#" onclick="ordineNumerico();">POSTAZIONE</a></td><td><a href="#" onclick="ordineAlfabetico();">NOME</a></td></tr>';

var listaOrd = lista.sort(function(a,b) {
  var nomeA = a.nome.toUpperCase(); // ignora maiuscole e minuscole
  var nomeB = b.nome.toUpperCase(); // ignora maiuscole e minuscole
  if (nomeA < nomeB) {
    return -1;
  }
  if (nomeA > nomeB) {
    return 1;
  }
});

  for (i in listaOrd) {
    codice += '<tr>';
    for (j in listaOrd[i]) {
    codice += ('<td>' + listaOrd[i][j] + '</td>');
  }
  codice += '</tr>';
}
 codice += '</table>';
 codice += '<p>*clicca su "postazione" per l\'ordine numerico</p>';
tabella.innerHTML = codice;
}

/*-------------------------
FUNZIONE ORDINE NUMERICO
--------------------------*/

function ordineNumerico(){
var codice = '';
codice += '<table>';
codice += '<tr><th colspan="2">T.S.S. CLASSE 2018/2019</th></tr>';
codice += '<tr><td><a href="#" onclick="ordineNumerico();">POSTAZIONE</a></td><td><a href="#" onclick="ordineAlfabetico();">NOME</a></td></tr>';

var listaOrd = lista.sort(function(a,b) {
  return a.postazione - b.postazione;
});
  for (i in listaOrd) {
    codice += '<tr>';
    for (j in listaOrd[i]) {
    codice += ('<td>' + listaOrd[i][j] + '</td>');
  }
  codice += '</tr>';
}
 codice += '</table>';
 codice += '<p>*clicca su "nome" per l\'ordine alfabetico</p>';
tabella.innerHTML = codice;
}
