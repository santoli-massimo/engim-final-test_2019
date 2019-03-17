var led = [
  ["A", "C", "F", "G", "E", "B"],
  ["C", "F"],
  ["A", "C", "D", "E", "G"],
  ["A", "C", "D", "F", "G"],
  ["B", "C", "D", "F"],
  ["A", "B", "D", "F", "G"],
  ["A", "B", "E", "G", "F", "D"],
  ["A", "C", "F"],
  ["A", "B", "C", "D", "E", "F", "G"],
  ["A", "B", "C", "D", "F", "G"],
  ["A", "B", "D", "E", "G"],
];


function formaNumero(numero, id) {
  cancellaNumero(8, id);
  if (numero > 9 || numero < 0) {
    console.log("Errore -> il numero " + numero + " non è conforme")
    numero = 10;
  }
  var point = document.getElementById(id);
  led[numero].forEach(element => {
    var myled = "div.led-" + element;
    var b = point.querySelectorAll(myled);
    b[0].style.backgroundColor = "red";
  });
}

function cancellaNumero(numero, id) {
  var point = document.getElementById(id);
  led[numero].forEach(element => {
    var myled = "div.led-" + element;
    var b = point.querySelectorAll(myled);
    b[0].style.backgroundColor = "rgb(243, 243, 243)";
  });
}

// var i = 0;
// setInterval(function () {
//   formaNumero(i, 'houU');
//   i++;
// }, 1000)

// var d = new Date();
// var secondi = d.getSeconds();
// console.log(secondi);


function digitClock() {
  myTime = new Date;
  var hour = ("" + myTime.getHours()).padStart(2, '0');
  var minute = ("" + myTime.getMinutes()).padStart(2, '0');
  var second = ("" + myTime.getSeconds()).padStart(2, '0');
  
  var secU = second.slice(-1);
  formaNumero (secU, 'secU');

  var secD = second.slice(-2, -1);
  formaNumero (secD, 'secD');

  var minU = minute.slice(-1);
  formaNumero (minU, 'minU');

  var minD = minute.slice(-2, -1);
  formaNumero (minD, 'minD');

  var houU = hour.slice(-1);
  formaNumero (houU, 'houU');

  var houD = hour.slice(-2, -1);
  formaNumero (houD, 'houD');
}

setInterval(digitClock, 1000);






