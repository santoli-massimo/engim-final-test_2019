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
var indovina = document.querySelector("#indovina");
var env = document.querySelector("#env");
var foot = document.querySelector("#foot");
var link = document.querySelector("#link2ind");
var letterN = document.querySelector("#letterN");
//var winMess = document.getElementById("#winMess");
//var start = document.querySelector("#start");

var rand = [];
var rev_rand = [];
var numbers = [];
var extr; // conterrà il numero estratto per indoviNumero() 
var active = true; // stato per la funzione fireworks
var sleep = false; // idem come sopra

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
    "((( E che ne so!!! ... )))",
    "Una su un Milione? ",
    "Una su un Miliardo? ",
    "Una su un Ipermegalone?",
    "Staremo a vedere....Let's GO!"
];

// Array contenente tempi utili per la presentazione
var lt = [500,4500,5500,4500,3500,3500,3500,3500];

// Cambia colore alla lettera N
cc2n_interv = setInterval(changeColor2N, 399);
//timeoutCCF = setTimeout(changeColorFaded,130);

// LISTENER 
link.addEventListener("click",presentazione);
//start.addEventListener("click",indovina);


// FUNZIONI
function presentazione(event) {

    cont = 0; // contatore utile alla funzione insert_ip()

    //alert("Inizio presentazione");
    //fireworks(sleep);
    env.innerHTML = "";

    p = document.createElement("p");
    p.className = "pres";

    p.innerHTML = lp[cont];
    env.appendChild(p);

    //$('#env').html("<p>"+lp[cont]+"</p>").fadeIn(3500);
    //$('#env').html("<p>"+lp[cont]+"</p>").fadeOut(4005);
    
    // popolamento footer
    foot.innerHTML = `<p> (Clicca per saltare la presentazione) </p>
                    <button id="skip" class="button_start" 
                    type="button" onclick="stop_ip()">
                    Salta</button>
                    <br /><br />
                    <p>Powered by Fuzzler</p>`;

    //foot.appendChild(skip);

    intervalP = setInterval(insert_p , 3000) // intervallo presentazione


    // inserisce gli elementi P nella pagina includendo le frasi dell'array
    function insert_p() {
        cont++;        

        if(cont >= lp.length) {
            //env.removeChild(env.childNodes[0]);
            stop_ip();
        }
        else {
            //$('#env').html("<p>"+lp[cont]+"</p>").fadeIn(2000);
            //$('#env').html("<p>"+lp[cont]+"</p>").fadeOut(2000);

            env.removeChild(env.childNodes[0]);
            p.innerHTML = lp[cont];
            env.appendChild(p);           
        }
    }    

} // fine presentazione()

// interrompe l'esecuzione della presentazione a inserimento frasi <p>
function stop_ip() {
    clearInterval(intervalP);
    env.innerHTML = "";
    //$('#env').html("");
    //alert("Fine presentazione");
    indovinaNumero();
    
}

// DEPRECATA DA CANCELLARE!!!
function insert_b() {
    // var pb = document.createElement("p");
    //pb.innerHTML = "<p>Clicca sul pulsante per iniziare!</p>";
    //var b = document.querySelector('#env'); //document.createElement("button");
    //id = document.createAttribute("id");
    //id.value = "start";
    //b.setAttribute(id);
    foot.innerHTML = `<br /><br />
                        <p>Powered by Fuzzler</p>`;
    
    env.innerHTML = `<p>Clicca sul pulsante per iniziare!</p>
                    <button id="start" class="button_start" 
                    type="button" onclick="indovinaNumero()">
                    Inizia</button>`;
    //b.className = "button_start";
    //b.setAttribute("id", "start");  
    //env.appendChild(b);
    
}


function indovinaNumero() {
    //alert("entrato in indovina()");

    foot.innerHTML = `<br /><br /><p>Powered by Fuzzler</p>`;

    //$('#env').html("");

    //$('#env').html("<p>Sto pensando ad un numero...</p>").fadeIn(1000);
    //$('#env').html("<p>Sto pensando ad un numero...</p>").fadeOut(1000);

    /*
    // NON FUNZIONA IN SINCRO -> (possibile problema del browser)

    intervalT = setInterval(function() {
        $('#env').html("<p>Sto pensando ad un numero...</p>").fadeIn(1000);
        $('#env').html("<p>Sto pensando ad un numero...</p>").fadeOut(1000);
    } , 2000); // intervallo Thinking...

    timeoutA = setTimeout(function() {
        clearInterval(intervalT);
        $('#env').html("<p>Credi di riuscire a indovinarlo?</p>").fadeIn(2000);
        $('#env').html("<p>Credi di riuscire a indovinarlo?</p>").fadeOut(2000);
    }, 6000);

    timeoutF = setTimeout(function() {
        clearTimeout(timeoutA);
        $('#env').html('<form name="fIns"><input id="userIns" type="text" /></form>').fadeIn(2000);        
    }, 10000);

    //clearTimeout(timeoutF);
    */

    env.innerHTML = ""; // reset del html nel div #env

    inp = document.createElement("p");
    inp2 = document.createElement("p");
    form = document.createElement("form");

    form.name = "fIns";

    inp.innerHTML = "Sto pensando ad un numero...";
    inp2.innerHTML = "Credi di riuscire a indovinarlo?<br />";
    form.innerHTML = '<input id="userIns" type="text" />';

    env.appendChild(inp);
    env.appendChild(inp2);
    env.appendChild(form);
    
    // popolamento array numbers (per estrazione numero da indovinare)
    for(let i = 1; i<=1000; i++) {
        numbers.push(i);
    }
    


    // estrazione
    shuffle(numbers);
    extr = numbers.shift();
    extr2 = numbers.pop(); // alternativa alla prima estrazione
    
    // Stampa del numero estratto (per verificare il corretto funzionamento)
    console.log("Numero estratto (x debug): "+extr);
    //console.log(extr2);

    $('#userIns').keypress(function (event) {
        //alert("entrato in eventPrevent()");
        if (event.keyCode === 10 || event.keyCode === 13) {
            // EVENT PREVENT (impedisce alla pagina di ricaricarsi)
            event.preventDefault();
            
            // mettiamo nella variabile userNum il valore raccolto nel form
            userNum = document.fIns.userIns.value;
            //$("<div>").append( userNum).appendTo( "#env" ); // incolonna i numeri estratti nel div
            verifica();   
        }
    });   

} // fine indovinaNumero(



function indovinaNumeroBis() {
    //alert("entrato in indovinaNumeroBis()");

    foot.innerHTML = `<br /><br /><p>Powered by Fuzzler</p>`;

    env.innerHTML = ""; // reset del html nel div #env

    //var inp = document.createElement("p");
    inp3 = document.createElement("p");
    //var form = document.createElement("form");

    form.name = "fIns";

    //inp.innerHTML = "Sto pensando ad un numero...";
    inp3.innerHTML = "Prova di nuovo a indovinare il numero a cui ho pensato...<br />";
    //form.innerHTML = '<input id="userIns" type="text" />';

    //env.appendChild(inp);
    env.appendChild(inp3);
    env.appendChild(form);
    
    
    
    // Stampa del numero estratto (per verificare il corretto funzionamento)
    console.log("Numero GIÀ estratto (no new): "+extr);
    //console.log(extr2);

    $('#userIns').keypress(function (event) {
        //alert("entrato in eventPrevent()");
        if (event.keyCode === 10 || event.keyCode === 13) {
            // EVENT PREVENT (impedisce alla pagina di ricaricarsi)
            event.preventDefault();
            
            // mettiamo nella variabile userNum il valore raccolto nel form
            userNum = document.fIns.userIns.value;
            //$("<div>").append( userNum).appendTo( "#env" ); // incolonna i numeri estratti nel div
            verifica();   
        }
    });   

}

function verifica() {
    //alert("entrato in verifica()");

    env.innerHTML = ""; // non togliere!!!

    //fireworks(sleep); // non implementata
    console.log("Input (raw) dell'utente: "+userNum);
    
    response = document.createElement("p");
    errMess = document.createElement("p");
    winner = document.createElement("p");
    selectMenu = document.createElement("div");

    errMess.setAttribute("id","errMess");
    winner.setAttribute("id","winMess");

    

    response.innerHTML = "";
    errMess.innerHTML = "";
    winner.innerHTML = "";
    
    env.innerHTML = "";
    selectMenu.innerHTML = `<br /><p>Vuoi fare un'altro tentativo? 
                            Vuoi un nuovo numero? O preferisci abbandonare?</p>
                            <button id="retry" class="button_start" 
                            type="button" onclick="indovinaNumeroBis()">
                            Riprova</button>
                            <button id="restart" class="button_start" 
                            type="button" onclick="indovinaNumero()">
                            Nuovo</button>
                            <button id="quit" class="button_start" 
                            type="button" onclick="reloadPage()">
                            Esci</button>`;


    //console.log("Tipo UserNum prima parseInt: "+typeof(userNumg));
    //console.log("Valore UserNum prima parseInt: "+userNumg);
    if(userNum == "")
        userNum = 0;
    else if(isNaN(userNum))
        userNum = 'letter';
    else if(userNum == "0")
        userNum = -1;
    else
        userNum = parseInt(userNum , 10);


    //userNum = parseInt(userNumg , 10);
    console.log("Tipo UserNum dopo parseInt: "+typeof(userNum));
    console.log("Valore UserNum dopo parseInt: "+userNum);
    //ctrl = "";
    
    if(userNum == 'letter') {
        errMess.innerHTML = "Devi inserire un numero!!! Nessun altro carattere è accettato!";
        //env.appendChild(errMess);
    }
    else if(userNum == ("") || userNum == 0) {
        errMess.innerHTML = "Non puoi lasciare il campo vuoto...che cazzo!!!";
        //env.appendChild(errMess);
    }
    else if(userNum < 0 || userNum > 1000) {
        errMess.innerHTML = "Il numero deve essere compreso tra 1 e 1000!";
        //env.appendChild(errMess);
    }  
    else if(userNum == extr){
        winner.innerHTML = "Congratulazioni!!! Ci hai preso in pieno!";
        cc2wm = setInterval(changeColor2N,190);
        env.appendChild(winner);
        //fireworks(sleep); // non implementata
        
    }
    else if(userNum < extr){
        response.innerHTML = "<b>Oh Noo!</b> Il numero da te scelto <b><u>è troppo piccolo!</u></b>";  
        //env.appendChild(response);     
    }
    else if(userNum > extr){
        response.innerHTML = "<b>Peccato!</b> Il numero da te scelto <b><u>è più grande!</u></b>";
        //env.appendChild(response);
    }
    else {
        response.innerHTML = "Mi hanno trovato...non so come ma mi hanno trovato...Scappa Marty!!!";
        //env.appendChild(response);
    }

    //env.appendChild(winMess);
    
    env.appendChild(errMess);
    env.appendChild(response);
    env.appendChild(selectMenu);

}

// Ricarica la pagina
function reloadPage() {
    window.location.reload();
}

// Cambia colore alla lettera N del titolo
function changeColor2N() {

    // Genero tre numeri random di valore compreso tra 1 e 256
    var r = Math.round(Math.random()*256);
    var g = Math.round(Math.random()*256);
    var b = Math.round(Math.random()*256);
    // Costruisco un colore RGB utilizzando i 3 numeri creati sopra 

    colore_rgb = "rgb(" + r + "," + g + ", " + b + ")";

    // Applico il colore al tag span id->letterN
    letterN.style.color = colore_rgb;
    if(typeof(winner) != "undefined")
        winner.style.backgroundColor = colore_rgb;
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

// ====================================== Altre funzioni =====================================
// ===========================================================================================

    /*
    // funzioni per mostrare un div partendo dall'id (non implementate)

    function show(id) {
        document.getElementById(id).style.display=”block”;
    }
        
    function hide(id) {
        document.getElementById(id).style.display=”none”;
    }
    */


