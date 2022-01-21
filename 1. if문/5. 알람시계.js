
function setAlarm(h, m) {

    if (m > 45) {
        m -= 45;
    } else if (m - 45 < 0) {
        m = 60 + (m - 45);
        h -= 1;
        if (h === -1) {
            h = 23;
        }
    } 
    console.log(h + ' ' + m);
    
}

setAlarm(13, 10);