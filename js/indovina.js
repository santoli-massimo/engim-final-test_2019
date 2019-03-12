
// Variabili Utili

var cont = 0; // contatore utile alla funzione presentazione()

var indovina = document.querySelector("#indovina");
var pres = document.querySelector("#pres");
var env = document.querySelector("#env");
var link = document.querySelector("#link2ind");
var letterN = document.querySelector("#letterN");

// Array contenente elementi utili a presentazione
var lp = [
    "Benvenuto nella pagina dell'applicazione IndoviNumero!!!",
    "In questa pagina puoi provare ad indovinare un numero che vada da 1 a 1000...",
    "Quante probabilità hai di indovinare? ... ",
    "E che ne so! ...",
    "Una su un milione? ",
    "Una su un miliardo? ",
    "Una su un Ipermegalone?"
];

// Array contenente elementi utili a presentazione
var lt = [500,4500,5500,4500,3500,3500,3500];

cc_interval = setInterval(changecolor, 399);

// Listener
link.addEventListener("click",presentazione);

// FUNZIONI
function presentazione(event) {

    alert("Inizio presentazione");

    p = document.createElement("p");
    p.className = "pres";
    p.innerHTML = lp[0];
    pres.appendChild(p);

    interval = setInterval(insert_p , 3000)

    function insert_p() {
        cont++;
        

        if(cont >= lp.length) {
            setTimeout(stop_ip, 500);
        }
        else {
            pres.removeChild(pres.childNodes[0]);
            p.innerHTML = lp[cont];
            pres.appendChild(p);
        }
    }

    function stop_ip() {
        clearInterval(interval);
        pres.removeChild(pres.childNodes[0]);
        alert("Fine operazioni");
        insert_b();
    }

    function insert_b() {
        pb = document.createElement("p");
        pb.innerHTML = "<p>Clicca sul pulsante per iniziare!</p>";
        b = document.createElement("button");
        b.innerHTML = '<button type="button" onclick="indovina()">Inizia</button>';
        b.className = "button_start";
        env.appendChild(pb);
        env.appendChild(b);
    }

} // fine presentazione()

function indovina() {

}

function verifica() {

}

// cambia colore alla lettera N del titolo
function changecolor() {

// Genero tre numeri random di valore compreso tra 1 e 256
var r = Math.round(Math.random()*256);
var g = Math.round(Math.random()*256);
var b = Math.round(Math.random()*256);
// Costruisco un colore RGB utilizzando i 3 numeri creati sopra 

colore_rgb = "rgb(" + r + "," + g + ", " + b + ")";

// Applico il colore al tag span id->letterN
letterN.style.color = colore_rgb;
}

