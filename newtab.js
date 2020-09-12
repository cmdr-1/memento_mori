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
function currentAge(birthDate) {
    
    birthDate = new Date("August 6, 1992");
    var currentDate = new Date();
    
    var years = (currentDate.getFullYear() - birthDate.getFullYear());
    var months = (currentDate.getMonth() - birthDate.getMonth());
    var days = (currentDate.getDate() - birthDate.getDate());
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    if (currentDate.getMonth() < birthDate.getMonth() || currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
        years--;
    }

    if (months < 0) {
        months = 11 + months;
    }
    if (days < 0) {
        days = 30.44 + days;
    }
    
    var yearStr = " Years | "
    var monthStr = " "; 
    var dayStr = " ";
    var hourStr = " ";
    var minuteStr = " ";
    var secondStr = " "; 
  
    if (months == 1) {
        monthStr = " Month";
    } else if (months > 1 ) {
        monthStr = " Months";
    } else if (months == 0) {
        months = "";
        yearStr = " Years"; 
    }
    if (days == 1) {
        dayStr = " Day | ";
    } else if (days > 1 ) {
        dayStr = " Days | ";
    } else if (days == 0) {
        days = ""; 
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
  
    document.getElementById("memento").innerText = years + yearStr + months + monthStr + "\n" + Math.floor(days) + dayStr + hours + hourStr + "\n"
                                                + minutes + minuteStr + seconds + secondStr;

    // Refresh memento every 1000ms (1 second)
    var age = setTimeout(function(){ currentAge(birthDate) }, 1000); 
}
  // Initiating currentTime()
  currentAge();