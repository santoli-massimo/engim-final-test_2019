var gabbia = [
  "Topo",
  "Topo",
  "Bue",
  "Bue",
  "Tigre",
  "Tigre",
  "Coniglio",
  "Coniglio",
  "Drago",
  "Drago",
  "Serpente",
  "Serpente",
  "Cavallo",
  "Cavallo",
  "Capra",
  "Capra"
];

function shuffle() {
  var j, x, i;
  for (i = gabbia.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = gabbia[i];
    gabbia[i] = gabbia[j];
    gabbia[j] = x;
  }

  return gabbia;
}
shuffle();

function memoria() {
  var a = 0;
  for (i = 0; i < gabbia.length; i++) {
    a++;
    var icon = "icon" + a;
    var final = "<img src=img/zoo/" + gabbia[i] + '.jpg class="icon">';
    document.getElementById(icon).innerHTML = final;
  }
}
memoria();

function restart() {
  clearInterval(displayMemory);
  timer = 61;
  displayMemory();
  shuffle();
  document.getElementById("nuova").innerHTML = memoria();
}


function displayMemory() {
  timer -= 1 ;
  timer = timer < 10 ? "0" + timer : timer;
  if (timer <= 0) {
    document.getElementById("displayMemory").innerHTML = "fine";
    clearInterval(displayMemory);
  }
  else
  document.getElementById("displayMemory").innerHTML = timer;
}
notemp = setInterval(displayMemory, 1000);







function mirror() {
  if (history.go(0) === history.go(-1)) {
    console.log("corretto");
  } else console.log("sbagliato");
}
