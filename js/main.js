

var mainNav = document.getElementById('main-nav')
var navli = document.querySelectorAll('#pages > .container')

/*Clock's variables*/ 
var time = new Date;
var clock = [time.getHours(), time.getMinutes(), time.getSeconds()];
var date = [time.getDate(), time.getMonth(), time.getFullYear()];
var timefunc = document.getElementById("time").innerHTML = 
              clock.join(' : ') + 
              " - " + 
              date.join('/');

console.log({navli});


mainNav.addEventListener('click', function(e){
    if(e.target.dataset.page){
        
        for (let index = 0; index < navli.length; index++) {
            navli[index].style.display = 'none'
        }

        var toShow = document.getElementById(e.target.dataset.page)
        toShow.style.display = 'block'

    }

})
