
   /*function time(){
    var date=new Date();
    console.log(date);
    var dates=date.getDate();
    var minutes=date.getMinutes();
    console.log(dates);
    console.log(minutes);
    }
    console.log(time());*/

    setInterval(currenttime,1000)
    var currentsecond=document.querySelector('.second'); 
    var currentmin=document.querySelector('.minute');
    var currenthour=document.querySelector(' .hour');

    function currenttime()
    {
        var time=new Date();
        var sec = time.getSeconds() / 60;
        var mins = (sec + time.getMinutes()) / 60;
        var hours = (mins + time.getHours()) / 12;
        setRotation(currentsecond, sec)
       setRotation(currentmin, mins)
        setRotation(currenthour, hours)


    }
    function setRotation(element,rotationRatio)
    {
       
       element.style.setProperty('--rotation', rotationRatio * 360)
    }

    currenttime();
    /*var currentsecond=document.querySelector('.second');
    
    var currentmin=document.querySelector('.minute');

    var currenthour=document.querySelector('.hour');
    setInterval(()=>
    {
        var time=new Date();
        
        var sec=time.getSeconds();
        var secdeg=((sec/60) * 360);
       
        var mins=time.getMinutes();
        var mindeg=((mins/60) * 360 );
       
        var hours=time.getHours();
        var  hourdeg=((hours/12) * 360 );

    currentsecond.style.transform='rotate(${secdeg}deg)';
        currentsecond.innertext=secdeg;
        currentmin.style.transform='rotate(${mindeg}deg)';
        currentmin.innertext=mindeg;
        currenthour.style.transform = 'rotate(${hourdeg}deg)';
        currenthour.innertext=hourdeg;
    },1000)*/