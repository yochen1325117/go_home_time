
var time_to_ = setInterval(function() {
    var time = new Date();
    var hours =time.getHours()
    var minutes =time.getMinutes()
    var seconds = time.getSeconds()
    var now_time = (hours*60*60) + (minutes*60) + seconds
    var go_home_time = 18*60*60
    var less_time = go_home_time - now_time
    var lunch = 12*60*60
    if(now_time > (lunch-5*60) && now_time < (lunch+5*60)){
        alert('吃飯囉')
    }
    if(less_time<300){
        if(seconds%2==0 || seconds%2==1){
            document.getElementById("demo1").style.color= 'red' 
        }else{
            document.getElementById("demo1").style.color= 'rgba(0,0,0,0)'             
        }    
    }else if(less_time<0){
        go_home_time = 24*60*60
        less_time = go_home_time - now_time
    }
    hours = Math.floor(less_time/60/60)
    minutes = Math.floor(less_time/60%60)
    seconds = Math.floor(less_time%60%60)
    if(go_home_time==(24*60*60)){
        hours+=9
    }
    var out= (hours<10 ? '0' : '')+hours + ":"+(minutes<10 ? '0':'')+ minutes + ":"+(seconds<10 ? '0' : '')+ seconds;
    document.getElementById("demo1").innerHTML = out;   
    if(seconds%4==1 || seconds%4==2){
        document.getElementById("seafood").innerHTML = "感恩Cliff"
    }else{
        document.getElementById("seafood").innerHTML ="讚嘆Christine"
    }
}, 1000);