var snow = document.getElementsByClassName('colPar')


for (var index = 0; index < snow.length; index++) {
    
    snow[index].addEventListener('click',function(event) {
      var num = Math.round(256*Math.random())
      var num1 = Math.round(256*Math.random())
      var num2 = Math.round(256*Math.random())
      event.target.style.color = 'rgb(' + num + ',' + num1 + ',' + num2 + ')'
      event.target.style.transition = '2s'
     
    })
}