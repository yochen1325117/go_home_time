const HOUR = 3600
const MINUTE = 60

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

    let opacity = 1 - less_time/(9*HOUR)

    // Lunch notification
    if (now_time > (lunch - 5*MINUTE) && now_time < (lunch + 15*MINUTE)) {
        document.getElementById("message").innerHTML = ('吃飯囉') 
    } else {
        document.getElementById("message").innerHTML = ('')
    }

    // Work off alert
    if (less_time < 300){
        if(min_sec%2 == 0) {
            document.getElementById("demo1").style.color = 'red' 
        } else if (min_sec%2 == 1) {
            document.getElementById("demo1").style.color = 'rgba(0, 0, 0, 0)'             
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
    document.getElementById("demo1").style.opacity = opacity

    // Marquee
    if (seconds%4 < 2) {
        document.getElementById("seafood").innerHTML = "感恩Cliff"
    } else {
        document.getElementById("seafood").innerHTML ="讚嘆Christine"
    }
}

var time_to_ = setInterval(timer, 500)

