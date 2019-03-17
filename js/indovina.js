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
var foot = document.querySelector("#foot");
var link = document.querySelector("#link2ind");
var letterN = document.querySelector("#letterN");
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
    "E che ne so! ...",
    "Una su un milione? ",
    "Una su un miliardo? ",
    "Una su un Ipermegalone?",
    "Staremo a vedere....Let's GO!"
];

// Array contenente tempi utili per la presentazione
var lt = [500,4500,5500,4500,3500,3500,3500,3500];

// Cambia colore alla lettera N
cc2n_interv = setInterval(changeColor, 399);
//timeoutCCF = setTimeout(changeColorFaded,130);

// LISTENER 
link.addEventListener("click",presentazione);
//start.addEventListener("click",indovina);


// FUNZIONI
function presentazione(event) {

    //alert("Inizio presentazione");
    fireworks(sleep);
    env.innerHTML = "";

    p = document.createElement("p");
    p.className = "pres";
    p.innerHTML = lp[0];
    pres.appendChild(p);
    
    foot.innerHTML = `<p> (Clicca per saltare la presentazione) </p>
                    <button id="skip" class="button_start" 
                    type="button" onclick="stop_ip()">
                    Salta</button>
                    <br /><br />
                    <p>Powered by Fuzzler</p>`;

    //foot.appendChild(skip);

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

} // fine presentazione()

// interrompe l'esecuzione della presentazione a inserimento frasi <p>
function stop_ip() {
    clearInterval(intervalP);
    pres.innerHTML = "";
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

    env.innerHTML = ""; // reset del html nel div #env

    var inp = document.createElement("p");
    var inp2 = document.createElement("p");
    var form = document.createElement("form");

    form.name = "fIns";

    inp.innerHTML = "Sto pensando ad un numero...";
    inp2.innerHTML = "Credi di riuscire a indovinarlo?";
    form.innerHTML = '<input id="userIns" type="text" />';

    //var nameValue = document.getElementById("uniqueID").value;

    env.appendChild(inp);
    env.appendChild(inp2);
    env.appendChild(form);
    //env.removeChild(env.childNodes[0]);
    //env.innerHTML = `<br /><form><input type="text" name="num" id="numUtente" /></form>`;

    // popolamento array numbers (per estrazione numero da indovinare)
    for(let i = 1; i<=1000; i++) {
        numbers.push(i);
    }

    // estrazione
    shuffle(numbers);
    extr = numbers.shift();
    extr2 = numbers.pop();

    console.log(rand);
    console.log(rev_rand);
    console.log(numbers);
    console.log(extr);
    //console.log(extr2);

    $('#userIns').keypress(function (event) {
        if (event.keyCode === 10 || event.keyCode === 13) {
            //var myFieldVal = document.myForm.myField.value;
            //alert("Il valore inserto nel campo è: "+myFieldVal);
            event.preventDefault();
            
            // mettiamo nella variabile userNum il valore raccolto nel form
            userNum = document.fIns.userIns.value;
            //$("<div>").append( userNum).appendTo( "#env" );
            verifica();   
        }
    });   

}

function verifica() {
    //alert("entrato in verifica()");

    //env.removeChild(env.childNodes[0]);
    //env.removeChild(env.childNodes[1]);
    //env.removeChild(env.childNodes[2]);

    env.innerHTML = ""; // non togliere!!!
    
    fireworks(sleep);
    

    response = document.createElement("p");
    select = document.createElement("p");
    errMess = document.createElement("p");
    selectMenu = document.createElement("div");

    errMess.setAttribute("id","errMess");

    response.innerHTML = "";
    errMess.innerHTML = "";
    select.innerHTML = "Vuoi fare un'altro tentativo? O preferisci abbandonare?";

    
    
    env.innerHTML = "";
    selectMenu.innerHTML = `<button id="restart" class="button_start" 
                            type="button" onclick="indovinaNumero()">
                            Gioca</button>
                            <button id="quit" class="button_start" 
                            type="button" onclick="reloadPage()">
                            Esci</button>`;


    //console.log("Tipo UserNum prima parseInt: "+typeof(userNumg));
    //console.log("Valore UserNum prima parseInt: "+userNumg);
    if(userNum == "")
        userNum = 0;
    else if(isNaN(userNum))
        userNum = 'letter';
    else
        userNum = parseInt(userNum , 10);


    //userNum = parseInt(userNumg , 10);
    console.log("Tipo UserNum dopo parseInt: "+typeof(userNum));
    console.log("Valore UserNum dopo parseInt: "+userNum);
    //ctrl = "";
    
    if(userNum == 'letter') {
        errMess.innerHTML = "Devi inserire un numero!!! Nessun altro carattere è accettato!";
    }
    else if(userNum == ("") || userNum == 0) {
        errMess.innerHTML = "Non puoi lasciare il campo vuoto...che cazzo!!!";
    }
    else if(userNum < 0 || userNum > 1000) {
        errMess.innerHTML = "Il numero deve essere compreso tra 1 e 1000!";
    }  
    else if(userNum == extr){
        response.innerHTML = "Congratulazioni!!! Hai indovinato in pieno!";
        //indovina.fireworks(active);
    }
    else if(userNum < extr){
        response.innerHTML = "Peccato! Il numero da te scelto è più piccolo!";        
    }
    else if(userNum > extr){
        response.innerHTML = "Peccato! Il numero da te scelto è troppo grande!";
    }
    else
        response.innerHTML = "Mi hanno trovato...non so come ma mi hanno trovato...Scappa Marty!!!";
        

    env.appendChild(response);
    env.appendChild(errMess);
    env.appendChild(select);
    env.appendChild(selectMenu);

}

function reloadPage() {
    window.location.reload();
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


    // NOTA DELL'AUTORE:
    // *****************
    // COME AVRETE INTUITO LA SEGUENTE FUNZIONE NON È STATA CREATA DA ME
    // HO CERCATO DI FARLA FUNZIONARE AL MEGLIO NELL'APPLICAZIONE
    // CHIEDO VENIA PER LA SFACCIATAGGINE
    function fireworks(state) {

        if(state) {

            if(!window.JSFX) JSFX=new Object(); 
            if(!JSFX.createLayer)
            {/*** Include Library Code ***/
            
            var ns4 = document.layers;
            var ie4 = document.all;
            JSFX.objNo=0;
            
            JSFX.getObjId = function(){return "JSFX_obj" + JSFX.objNo++;};
            
            JSFX.createLayer = function(theHtml)
            {
            var layerId = JSFX.getObjId();
            
            document.write(ns4 ? "<LAYER  NAME='"+layerId+"'>"+theHtml+"</LAYER>" : 
                        "<DIV id='"+layerId+"' style='position:absolute'>"+theHtml+"</DIV>" );
            
            var el =    document.getElementById   ? document.getElementById(layerId) :
                    document.all       ? document.all[layerId] :
                                document.layers[layerId];
            
            if(ns4)
                el.style=el;
            
            return el;
            }
            JSFX.fxLayer = function(theHtml)
            {
            if(theHtml == null) return;
            this.el = JSFX.createLayer(theHtml);
            }
            var proto = JSFX.fxLayer.prototype
            
            proto.moveTo    = function(x,y){this.el.style.left = x;this.el.style.top=y;}
            proto.setBgColor = function(color) { this.el.style.backgroundColor = color; } 
            proto.clip      = function(x1,y1, x2,y2){ this.el.style.clip="rect("+y1+" "+x2+" "+y2+" "+x1+")"; }
            if(ns4){
            proto.clip = function(x1,y1, x2,y2){
                this.el.style.clip.top    =y1;this.el.style.clip.left   =x1;
                this.el.style.clip.bottom=y2;this.el.style.clip.right   =x2;
            }
            proto.setBgColor=function(color) { this.el.bgColor = color; }
            }
            if(window.opera)
            proto.setBgColor = function(color) { this.el.style.color = color==null?'transparent':color; }
            
            if(window.innerWidth)
            {
            gX=function(){return innerWidth;};
            gY=function(){return innerHeight;};
            }
            else
            {
            gX=function(){return document.body.clientWidth;};
            gY=function(){return document.body.clientHeight;};
            }
            
            /*** Example extend class ***/
            JSFX.fxLayer2 = function(theHtml)
            {
            this.superC = JSFX.fxLayer;
            this.superC(theHtml + "C");
            }
            JSFX.fxLayer2.prototype = new JSFX.fxLayer;
            }/*** End Library Code ***/
            
            /*************************************************/
            /*** Firework Spark - extends fxLayer ***/
            JSFX.FireworkSpark = function(x, y)
            {
            this.superC = JSFX.fxLayer;
            this.superC("*");
            
            this.dx    = Math.random() * 4 - 2;
            this.dy   = Math.random() * 4 - 2;
            this.ay   = .09;
            this.x   = x;
            this.y   = y;
            this.type = 0;
            }
            JSFX.FireworkSpark.prototype = new JSFX.fxLayer;
            /*** END Class FireworkSpark Constructor - start methods ***/
            
            JSFX.FireworkSpark.prototype.fire0 = function()
            {
            var a = Math.random() * 6.294;
            var s = Math.random() * 2;
            if(Math.random() >.6) s = 2;
            this.dx = s*Math.sin(a);
            this.dy = s*Math.cos(a) - 2;
            }
            JSFX.FireworkSpark.prototype.fire1 = function()
            {
            var a = Math.random() * 6.294;
            var s = Math.random() * 2;
            this.dx = s*Math.sin(a);
            this.dy = s*Math.cos(a) - 2;
            }
            JSFX.FireworkSpark.prototype.fire2 = function()
            {
            var a = Math.random() * 6.294;
            var s = 2;
            this.dx = s*Math.sin(a);
            this.dy = s*Math.cos(a) - 2;
            }
            JSFX.FireworkSpark.prototype.fire3 = function()
            {
            var a = Math.random() * 6.294;
            var s = a - Math.random();
            this.dx = s*Math.sin(a);
            this.dy = s*Math.cos(a) - 2;
            }
            JSFX.FireworkSpark.prototype.fire4 = function()
            {
            var a = Math.random() * 6.294;
            var s = (Math.random() > 0.5) ? 2 : 1;
            if(s==1)this.setBgColor("#FFFFFF");
            s -= Math.random()/4;
            this.dx = s*Math.sin(a);
            this.dy = s*Math.cos(a) - 2;
            }
            JSFX.FireworkSpark.prototype.fire = function(sx, sy, fw, cl)
            {
            this.setBgColor(cl);
            
            if(fw == 1)
                this.fire1();
            else if(fw == 2)
                this.fire2();
            else if(fw == 3)
                this.fire3();
            else if(fw == 4)
                this.fire4();
            else
                this.fire0();
            
            this.x   = sx;
            this.y   = sy;
            this.moveTo(sx, sy);
            }
            JSFX.FireworkSpark.prototype.animate = function(step)
            {
            this.dy += this.ay;
            this.x += this.dx;
            this.y += this.dy;
            this.moveTo(this.x, this.y);
            }
            /*** END Class FireworkSpark Methods***/
            
            /*** Class Firework extends Object ***/
            JSFX.Firework = function(numSparks)
            {
            window[ this.id = JSFX.getObjId() ] = this;
            
            this.sparks = new Array();
            for(i=0 ; i<numSparks; i++)
            {
                this.sparks[i]=new JSFX.FireworkSpark(-10, -10);
                this.sparks[i].clip(0,0,3,3);
                this.sparks[i].setBgColor("#00FF00");
            }
            this.step = 0;
            this.timerId = -1;
            this.x = 0;
            this.y = 0;
            this.dx = 0;
            this.dy = 0;
            this.ay = 0.2;
            this.state = "OFF";
            }
            JSFX.Firework.prototype.explode = function()
            {
            var fw = Math.floor(Math.random() * 5);
            
            for(i=0 ; i<this.sparks.length ; i++)
            {
                this.sparks[i].fire(this.x, this.y, fw, this.color);
                this.sparks[i].dx += this.dx;
                this.sparks[i].dy += this.dy;
            }
            }
            JSFX.Firework.prototype.getMaxDy = function()
            {
            var ydiff = gY() - 30;
            var dy    = 1;
            var dist  = 0;
            var ay    = this.ay;
            while(dist<ydiff)
            {
                dist += dy;
                dy+=ay;
            }
            return -dy;
            }
            JSFX.Firework.prototype.animate = function()
            {
            
            if(this.state=="OFF")
            {
                var colors = new Array("#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFFFFF");
                this.color = colors[Math.floor(Math.random()*colors.length)];
            
                this.step = 0;
                this.x = gX()/2;
                this.y = gY()-10;
                this.dy = this.getMaxDy();
                this.dx = Math.random()*-8 + 4;
                this.dy += Math.random()*3;
                for(i=0 ; i<this.sparks.length ; i++)
                    this.sparks[i].moveTo(-10,-10);
                this.sparks[0].setBgColor(this.color);
                this.state = "TRAVEL";
            }
            else if(this.state=="TRAVEL")
            {
                this.x += this.dx;
                this.y += this.dy;
                this.dy += this.ay;
                this.sparks[0].moveTo(this.x,this.y);
                if(this.dy > 1)
                {
                    this.state="EXPLODE"
                    this.explode();
                }
            }
            else
            {
                if(this.step > 40)
                    this.state="OFF";
            
                this.step++;
            
                for(i=0 ; i<this.sparks.length ; i++)
                    this.sparks[i].animate(this.step);
            }
            
            }
            JSFX.Firework.prototype.start = function()
            {
            if(this.timerId == -1)
            {
                this.state = "OFF";
                this.timerId = setInterval("window."+this.id+".animate()", 30);
            }
            
            }
            JSFX.Firework.prototype.stop = function()
            {
            if(this.timerId != -1)
            {
                clearInterval(this.timerId);
                for(i=0 ; i<this.sparks.length ; i++)
                    this.sparks[i].moveTo(-10,-10);
                this.timerId = -1;
                this.step = 0;
            }
            }
            /*** END Class Firework***/
            
            JSFX.FWStart = function()
            {
            if(JSFX.FWLoad)JSFX.FWLoad();
            myFW1.start();
            myFW2.start();
            }
            myFW1 = new JSFX.Firework(30);
            myFW2 = new JSFX.Firework(30);
            JSFX.FWLoad=window.onload;
            window.onload=JSFX.FWStart;

        } // fine if *** STATE ***

    } // FINE function FIREWORKS

    /*
    function show(id) {
        document.getElementById(id).style.display=”block”;
    }
        
    function hide(id) {
        document.getElementById(id).style.display=”none”;
    }
    */


