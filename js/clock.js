/*Clock's variables*/ 
//time.getMonth() ritorna valori tra 0 e 11 e non tra 1 e 12.     
var time, clock, date;
function updateClock() {
  time = new Date;
  clock = [time.getHours(), ("0" + time.getMinutes()).slice(-2), ("0" + time.getSeconds()).slice(-2)];
  date = [time.getDate(), ("0" + (time.getMonth() + 1)).slice(-2), time.getFullYear()];
  document.getElementById("time").innerHTML = 
  clock.join(' : ') + 
  " - " + 
  date.join('/');
}
updateClock();
setInterval(updateClock, 1000);
  
/* _______________________________ */ 