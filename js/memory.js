
var gabbia = ['Topo', 'Bue', 'Tigre', 'Coniglio', 'Drago', 'Serpente', 'Cavallo',
    'Capra', 'Scimmia', 'Gallo', 'Cane', 'Maiale']
 
function memoria() {            //usare un do while
        var res2 = "";
    for (i = 0; i < 8; i++) {

        var res = gabbia[Math.floor(Math.random() * 8)];


        if (res === res2) {
            var result = "img/zoo/" + gabbia[Math.floor(Math.random() * 8)] + ".jpg";
        }
        console.log(result);
    }
}

memoria();
