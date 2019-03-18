var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight*(68/100);

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}

//var x = event.layerX;
//var y = event.layerY;

window.addEventListener('mousemove', function(event){
  mouse.x = event.layerX;
  mouse.y = event.layerY;
})

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  
});

var maxL = 300;
var minL = 50;

var maxRadius = 80;
var minRadius = 30;

var gravity = 1;
//var friction = 0.90;

var colorArray = [
  '#3F5866',
  '#0894A1',
  '#47AB6C',
  '#FF9000',
  '#EDF7F5'
];

console.log(canvas);

/*
c.strokeStyle = 'red';
c.stroke();
*/


  //var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

  //c.strokeStyle = color;
  //c.stroke();


var squareArray = [];
var circleArray = [];

function Square (x, y, dx, dy, l){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.l = l;
  this.minL = l;
  this.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
  this.draw = function() {
    c.beginPath();
    //c.save();
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.l, this.l);
    //c.strokeStyle = 'red';
    
    //c.fill();
    //c.stroke();
    c.closePath();

  }
  this.update = function() {
    if (this.x + this.l > canvas.width || this.x < 0) {
        this.dx = -this.dx;
    }
    if (this.y + this.l > canvas.height || this.y < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (mouse.x - this.x < 100 && mouse.x - this.x > -50
        && mouse.y - this.y < 100 && mouse.y - this.y > -50)
        {
          if (this.l < maxL) {
            this.l += 1;
          }
    } else if (this.l > this.minL){
        this.l -=1;
    }

  this.draw();
}
}



function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  
    this.drawC = function() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.strokeStyle = '#112F41';
      c.stroke();
      c.closePath();
    }
  
    this.updateC = function() {
      var friction = 0.98 - (this.radius/1000)*3;
        if (this.y + this.radius + this.dy > canvas.height){
            this.dy = -this.dy * friction;
        }else{
            this.dy += gravity;
        }
        if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        this.x += this.dx;
        this.y += this.dy;
    /*
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
    */
      if (mouse.x - this.x < 50 && mouse.x - this.x > -50
          && mouse.y - this.y < 50 && mouse.y - this.y > -50)
          {
            if (this.radius < maxRadius) {
              this.radius += 1;
            }
      } else if (this.radius > this.minRadius){
          this.radius -=1;
      }
      /*
      if (this.radius > 75){
        circleArray.splice(Circle(this.x, this.y, this.dx, this.dy, this.radius), 1);
      }
      */
      this.drawC();

    
    }
  }


canvas.addEventListener('wheel', function(event){
    mouse.x = event.layerX;
    mouse.y = event.layerY;
    var radius = Math.random() *50 + 20;
    var x = mouse.x;
    var y = mouse.y;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;
    c.fillStyle = "blue";
    circleArray.push(new Circle(x, y, dx, dy, radius));
})

canvas.addEventListener('click', function(event){
  mouse.x = event.layerX;
  mouse.y = event.layerY;
  var x = mouse.x - 10;
  var y = mouse.y - 10;
  var l = (Math.random() * 150 + 10);
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;
  
  
  
  squareArray.push(new Square(x, y, dx, dy, l));
})



function animate() {
  requestAnimationFrame(animate);
  
  c.clearRect(0, 0, canvas.width, canvas.height);//pulisce canvas

  for (var i = 0; i < squareArray.length; i++) {
    squareArray[i].update();
    
  }
  
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].updateC();
  }

  
}
animate();


function resetArr () {
  squareArray = [];
  circleArray = [];
}

