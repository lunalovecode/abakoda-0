arg1 = readline();
arg2 = readline();
 
function toMinutes(str) {
    var parts = str.split(' ');
    
    hours = Math.abs(parseInt(parts[0], 10));
    minutes = Math.abs(parseInt(parts[1], 10));
 
    if (parts.length == 2) {
        return ((hours * 60) + minutes);
    }
    
    if (parts[2] == 'AM') {
        if (parts[0] == 12) {
            return minutes;
        }
        return ((hours * 60) + minutes);
    }
    
    if (parts[2] == 'PM') {
        if (parts[0] == 12) {
            return ( (12*60) + minutes);
        }
        
        
        return ( (12*60) + (hours * 60) + minutes);
    }
    
 
}
 
function toAMPM(totalMins) {
    var hrs = Math.floor(totalMins/60);
    var mins = totalMins % 60;
    
    if (hrs > 12) {
        return (hrs -12) + " " + mins + " PM";
    }
 
    if (hrs == 12) {
        return "12 " + mins + " PM";
    }
 
 
    if (hrs == 0) {
        hrs = 12;    
    }
    
 
 
    return hrs + " " + mins + " AM";
}
 
// Get timediff in minutes
function getTimeDiff(str) {
    var diff;
    var parts = str.split(' ');
    
    tz = toMinutes(str)
 
    if (parseInt(parts[0], 10) < 0) {
        tz = tz * -1;
    }
 
 
    diff = (8*60) - tz;
    return diff;
}
 
function getCoordinatedTime(currentTime, timezone) {
    var currentTimeMins = toMinutes(currentTime);
    var timeDiff = getTimeDiff(timezone)
 
    coordinatedTimeMins = currentTimeMins - timeDiff;
 
 
    if (coordinatedTimeMins < 0) {
        coordinatedTimeMins = (24 * 60) + coordinatedTimeMins;
        return toAMPM(coordinatedTimeMins);
    }
    
    if (coordinatedTimeMins > (24 * 60) ) {
        coordinatedTimeMins = coordinatedTimeMins - (24 * 60);
        return toAMPM(coordinatedTimeMins);
    }
    
    
    return toAMPM(coordinatedTimeMins);
}
 
 
print(getCoordinatedTime(arg1, arg2));