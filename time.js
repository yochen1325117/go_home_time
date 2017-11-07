
var x = setInterval(function() {

    var time = new Date();
    var hours =time.getHours()
    var minutes =time.getMinutes()
    var seconds = time.getSeconds()

    var now_time = (hours*60*60) + (minutes*60) + seconds
    var go_home_time = 18*60*60
    var less_time = go_home_time - now_time

    hours = Math.floor(less_time/60/60)
    minutes = Math.floor(less_time/60%60)
    seconds = Math.floor(less_time%60%60)


    var out= (hours<10 ? '0' : '')+hours + ":"+(minutes<10 ? '0':'')+ minutes + ":"+(seconds<10 ? '0' : '')+ seconds;
    document.getElementById("demo1").innerHTML = out;    
    if(seconds%4==1 || seconds%4==2){
        document.getElementById("seafood").innerHTML = "感恩Cliff"
        }else{
            document.getElementById("seafood").innerHTML ="讚嘆Christine"
        }
    
    
}, 1000);