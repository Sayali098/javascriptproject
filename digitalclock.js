var currentsecond=document.querySelector('.second');
var currentmin=document.querySelector('.minute');
var currenthour=document.querySelector('.hour');



setInterval(display,1000)
function display()
{
    var time=new Date();
   var currentsecond=time.getSeconds();
   var currentmin=time.getMinutes();
   var currenthour=time.getHours();

var currenttime=currenthour + ":" + currentmin + ":" + currentsecond ;
   
document.getElementById('clock').innerText=currenttime;


}
display();