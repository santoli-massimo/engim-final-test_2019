var gabbia = [
  "Topo",
  "Bue",
  "Tigre",
  "Coniglio",
  "Drago",
  "Serpente",
  "Cavallo",
  "Capra",
  "Scimmia",
  "Gallo",
  "Cane",
  "Maiale"
];

function memoria() {

  var a = 0;
  for (i = 0; i < 16; i++) {
    a++;
    
    var res = gabbia[Math.floor(Math.random() * 8)];

    var icon = "icon" + a;
    var res1 =
      "<img src=img/zoo/" +
      gabbia[Math.floor(Math.random() * 8)] +
      '.jpg class="icon">';
    var res2 = res1;
    //console.log("res1: "+res1);
    //console.log("res2: "+res2);
    document.getElementById(icon).innerHTML = res1;
    document.getElementById(icon).innerHTML = res1;
  }
}
memoria();

function restart() {
  document.getElementById("nuova").innerHTML = memoria();
}
