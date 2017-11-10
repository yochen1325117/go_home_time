const HOUR = 3600
const MINUTE = 60
//天氣
function get_json(){
    $.getJSON( "https://works.ioa.tw/weather/api/weathers/34.json", function(data) {
        var weather_out = "今日天氣："+data.desc+"\n今日氣溫："+data.temperature+'°'        
        $("<span/>", {
            "id":"weather",
            "text": weather_out,
            "style":"position:fixed;top:100px;color:rgba(0,0,0,0.1)"
        }).appendTo('body');
      });
}


function timer() {
    // URL parameter
    let url = new URL(location.href)
    let hh = url.searchParams.get("hh") || 18
    let mm = url.searchParams.get("mm") || 0

    // Time parameter
    var time = new Date()
    var now_time = time.getHours()*HOUR + time.getMinutes()*MINUTE + time.getSeconds()
    var go_home_time = hh*HOUR + mm*MINUTE
    var less_time = go_home_time - now_time // left_time
    var lunch = 12*HOUR

    var min_sec = time.getMilliseconds();


    // Lunch notification
    if (now_time > (lunch - 5*MINUTE) && now_time < (lunch + 15*MINUTE)) {
        document.getElementById("message").innerHTML = ('吃飯囉') 
    } else {
        document.getElementById("message").innerHTML = ('')
    }
    
    // Work off alert
    if (less_time < 300){
        document.getElementById("weather").style.color=('red');        
        if(count ==0) {
            document.getElementById("message").innerHTML = ('準備下班囉')             
            document.getElementById("demo1").style.color = 'rgba(0,255,0,1)' 
            count=1
        } else if (count==1) {
            document.getElementById("demo1").style.color = 'rgba(0,0,0,0)'  
            count=0           

        }    
    } 
    if (less_time < 0){
        go_home_time = 24*HOUR
        less_time = go_home_time - now_time
    }

    // Deal with point number
    hours = Math.floor(less_time/HOUR)
    minutes = Math.floor(less_time/MINUTE%MINUTE)
    seconds = Math.floor(less_time%MINUTE%MINUTE)
    if (go_home_time == (24*HOUR)) {
        hours += 9
    }

    // Display left time
    var out = (hours < 10 ? '0' : '') + hours + ":" + 
              (minutes < 10 ? '0' : '') + minutes + ":" + 
              (seconds < 10 ? '0' : '') + seconds
    document.getElementById("demo1").innerHTML = out

    // Marquee
    if (seconds%4 < 2) {
        document.getElementById("seafood").innerHTML = "感恩Cliff"
    } else {
        document.getElementById("seafood").innerHTML ="讚嘆Christine"
    }
}




var count = 0;
get_json();
var time_to_ = setInterval(timer, 500)
var weather = setInterval(get_json,1000*60*30)
