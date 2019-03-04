var gabbia = [
  "Topo",
  "Bue",
  "Tigre",
  "Coniglio",
  "Drago",
  "Serpente",
  "Cavallo",
  "Capra",
];

var coppie = [];

function coupling(){
var a1;
var a2;
for (let i = 0; i < gabbia.length; i++){

   a1 =  "A_" + gabbia[i];
   a2 =  "B_" + gabbia[i];
   coppie.unshift(a1,a2);
  }
}
coupling();

function shuffle() {
  var j, x, i;
  for (i = coppie.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = coppie[i];
    coppie[i] = coppie[j];
    coppie[j] = x;
  }

  return coppie;
}
shuffle();

function memoria() {
  var a = 0;
  var link = "";
  for (i = 0; i < coppie.length; i++) {
    a++;
    link = coppie[i].substring(2);
    var icon = "icon" + a;
    var final = "<img src=img/zoo/" + link + ".jpg onclick=\"mirror(this.id)\" class=\"icon\" id=\"" + coppie[i] + "\">";
    document.getElementById(icon).innerHTML = final;
    console.log(final);
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
  timer -= 1;
  timer = timer < 10 ? "0" + timer : timer;
  if (timer <= 0 || isNaN(timer)) {
    document.getElementById("displayMemory").innerHTML = "Fine";
  } else document.getElementById("displayMemory").innerHTML = timer;
}
notemp = setInterval(displayMemory, 1000);


function opacity(){
  var gigi = document.getElementsByClassName("icon"); 
  for (let i = 0; i < gigi.length; i++){
  gigi[i].style.opacity = "0.5";  //dev'essere a zero per funzionare correttamente
  }
}
opacity();

var specchio =[];
function mirror(id) {
  var op = document.getElementById(id); 
  op.style.opacity = "1";
  specchio.unshift(id);
  if (specchio[0].substring(2) != null){
      
    if(specchio[0].substring(2) === specchio[1].substring(2)){
          console.log("un punto!!!");
          specchio.shift();
          specchio.shift();
          console.log(specchio);
      }
  
      else {
          console.log("balengo!");
          specchio.shift();
          specchio.shift();
          
      }

  specchio.unshift(id);
    console.log(specchio);

}
}
