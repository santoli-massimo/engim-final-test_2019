$(document).ready(function(){
    setInterval(function(){

        if(skipReady==true){
        var hex = Array(0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E" ,"F");
            var r =hex[Math.floor(Math.random() * hex.length)] + hex[Math.floor(Math.random() * hex.length)];
            var g =hex[Math.floor(Math.random() * hex.length)] + hex[Math.floor(Math.random() * hex.length)];
            var b =hex[Math.floor(Math.random() * hex.length)] + hex[Math.floor(Math.random() * hex.length)];
        }

        var hex= "#" +r +g +b;
        $('.nav').css("background-color",hex);
        
    },5000);

});

const btnstart= document.getElementById("btn btn1");
const btnstop= document.getElementById("btn btn2");

btnstart.addEventListener("click",function(){
    skipReady = true;
});

btnstop.addEventListener("click",function(){

    skipReady = false;
})

var skipReady = true;