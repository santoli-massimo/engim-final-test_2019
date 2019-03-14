/*

// ============= NOTE DELL'AUTORE ============= \\
|| Mi rendo conto che ci siano soluzioni più    || 
|| eleganti per ottenere gli stessi risultati   ||
|| di questa "applicazioncina"... Tuttavia ho   ||
|| voluto fare una "carrellata" di buona parte  ||
|| delle tematiche affrontate nel corso...      ||
\\ ============================================ //

*/

// Variabili Utili

var cont = 0; // contatore utile alla funzione presentazione()

var indovina = document.querySelector("#indovina");
var pres = document.querySelector("#pres");
var env = document.querySelector("#env");
var link = document.querySelector("#link2ind");
var letterN = document.querySelector("#letterN");
//var start = document.querySelector("#start");

var rand = [];
var rev_rand = [];
var numbers = [];
var extr; // conterrà il numero estratto per indoviNumero() 

// popolamento array rand e rev_rand (per costruzione colori)
for(let i = 0; i<=255; i++) {
    rand[i] = i;
    rev_rand[i] = 255 - i;
}

//var rand2 = rand;

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

// Cambia colore alla lettera N
cc_interval = setInterval(changeColor, 399);
//timeoutCCF = setTimeout(changeColorFaded,130);

// LISTENER 
link.addEventListener("click",presentazione);
//start.addEventListener("click",indovina);


// FUNZIONI
function presentazione(event) {

    alert("Inizio presentazione");

    p = document.createElement("p");
    p.className = "pres";
    p.innerHTML = lp[0];
    pres.appendChild(p);

    intervalP = setInterval(insert_p , 500) // intervallo presentazione

    function insert_p() {
        cont++;
        

        if(cont >= lp.length) {
            pres.removeChild(pres.childNodes[0]);
            stop_ip();
        }
        else {
            pres.removeChild(pres.childNodes[0]);
            p.innerHTML = lp[cont];
            pres.appendChild(p);
        }
    }

    function stop_ip() {
        clearInterval(intervalP);
        alert("Fine operazioni");
        insert_b();
    }

    

} // fine presentazione()


function insert_b() {
    // var pb = document.createElement("p");
    //pb.innerHTML = "<p>Clicca sul pulsante per iniziare!</p>";
    //var b = document.querySelector('#env'); //document.createElement("button");
    //id = document.createAttribute("id");
    //id.value = "start";
    //b.setAttribute(id);
    env.innerHTML = "";
    env.innerHTML = `<p>Clicca sul pulsante per iniziare!</p>
                    <button id="start" class="button_start" 
                    type="button" onclick="indovinaNumero()">
                    Inizia</button>`;
    //b.className = "button_start";
    //b.setAttribute("id", "start");  
    //env.appendChild(b);
    
}


function indovinaNumero() {
    alert("entrato in indovina()");

    env.innerHTML = ""; // reset del html nel div #env

    var inp = document.createElement("p");
    var inp2 = document.createElement("p");

    inp.innerHTML = "Sto pensando ad un numero...";
    inp2.innerHTML = "Credi di riuscire a indovinarlo?";

    env.appendChild(inp);
    env.appendChild(inp2);
    //env.removeChild(env.childNodes[0]);

    // popolamento array numbers (per estrazione numero da indovinare)
    for(let i = 1; i<=1000; i++) {
        numbers.push(i);
    }

    shuffle(numbers);
    extr = numbers.shift();
    extr2 = numbers.shift();

    console.log(rand);
    console.log(rev_rand);
    console.log(numbers);
    console.log(extr);
    console.log(extr2);

}

function verifica() {
    alert("entrato in verifica()");
}

// cambia colore alla lettera N del titolo
function changeColor() {

// Genero tre numeri random di valore compreso tra 1 e 256
var r = Math.round(Math.random()*256);
var g = Math.round(Math.random()*256);
var b = Math.round(Math.random()*256);
// Costruisco un colore RGB utilizzando i 3 numeri creati sopra 

colore_rgb = "rgb(" + r + "," + g + ", " + b + ")";

// Applico il colore al tag span id->letterN
letterN.style.color = colore_rgb;
}

// cambia colore alla lettera N del titolo
function changeColorFaded() {

    temp = 330;
    cont1 = 0;
    cont2 = 125;
    cont3 = 254;

    function cycler(cont) {
        if(cont >= 255) 
            op = 'decr';
        else
            op = 'incr';

        switch(op) {
            case 'decr':
                cont--;
            break;
            case 'incr':
                cont++;
            break;
        }
        return cont;
    }

    var r = cycler(cont1);
    var g = cycler(cont2);
    var b = cycler(cont3);
    // Costruisco un colore RGB utilizzando i 3 numeri creati sopra 
    
    colore_rgb = "rgb(" + r + "," + g + ", " + b + ")";
    
    // Applico il colore al tag span id->letterN
    letterN.style.color = colore_rgb;
    }

    // funzione che mescola gli elementi dell'array
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    /*
    function show(id) {
        document.getElementById(id).style.display=”block”;
    }
        
    function hide(id) {
        document.getElementById(id).style.display=”none”;
    }
    */

