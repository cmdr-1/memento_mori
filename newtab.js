// Clock display
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = " Current Time\n " + hour + " : " + min + " : " + sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  // Initiating currentTime()
  currentTime(); 
  
//-----------------------------------------------------------------------//

// This is the the age calculator
function currentAge() {
    
    var DOB = "August 1, 1992";
    // Date.parse() returns the number of milliseconds between the argument and Jan 1 1970
    var msecBetweenDOBAnd1970 = Date.parse(DOB);
    // Date.now() returns the number of milliseconds between the the current time and Jan 1 1970
    var msecBetweenNowAnd1970 = Date.now();
    var ageInMsec = msecBetweenNowAnd1970-msecBetweenDOBAnd1970;

    // Calculations done assuming that a month has 30 days and a year has 365 days - will update to be more accurate in future
    var msec = ageInMsec;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30; 
    var year = day * 365;

    // Long hand conversion of milliseconds to units of time, while rounding down allocating remainder for next unit of time
    var years = Math.floor(msec/year);
    var months = Math.floor((msec/year - years) * 12);
    var days = Math.floor((((msec/year - years) * 12) - months) * 30);
    var hours = Math.floor((((((msec/year - years) * 12) - months) * 30) - days) * 24);
    var minutes = Math.floor((((((((msec/year - years) * 12) - months) * 30) - days) * 24) - hours) * 60);
    var seconds = Math.round((((((((((msec/year - years) * 12) - months) * 30) - days) * 24) - hours) * 60) - minutes) * 60);
        
    var yearStr = " Years | "
    var monthStr = " "; 
    var dayStr = " ";
    var hourStr = " ";
    var minuteStr = " ";
    var secondStr = " "; 

    if (months == 1) {
        monthStr = " Month";
    } else if (month > 1 ) {
        monthStr = " Months";
    } else if (months == 0) {
        months = "";
        yearStr = " Years"; 
    }
    if (days == 1) {
        dayStr = " Day | ";
    } else if (days > 1 ) {
        dayStr = " Days | ";
    }
    if (hours == 1) {
        hourStr = " Hour";
    } else if (hours > 1 ) {
        hourStr = " Hours";
    } else if (hours == 0) {
        hours = "";
        dayStr = " Days" 
    }
    if (minutes == 1) {
        minuteStr = " Minute | ";
    } else if (minutes > 1 ) {
        minuteStr = " Minutes | ";
    }
    if (seconds == 1) {
        secondStr = " Second";
    } else if (seconds > 1  ) {
        secondStr = " Seconds";
    } else if (seconds == 0 || seconds == 60) {
        seconds = "";
        minuteStr = " Minutes";
    }

    document.getElementById("memento").innerText = years + yearStr + months + monthStr + "\n" + days + dayStr + hours + hourStr 
                                                    + "\n" + minutes + minuteStr + seconds + secondStr;
    
    // Refresh memento every 1000ms (1 second)
    var age = setTimeout(function(){ currentAge() }, 1000); 
  }

  // Initiating currentTime()
  currentAge();