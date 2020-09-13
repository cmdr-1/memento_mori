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
var birthDate = new Date(); 

$("#button").click(function(){
    var dob = $("#birthDate").val();
    var birthdate = dob.split("/");

    var parsedDate = (birthdate[0]+"/"+birthdate[1]+"/"+birthdate[2]);
    console.log(parsedDate);
    birthDate = parsedDate;
});


// This is the the age calculator
function currentAge() {
    let birth_date = new Date(birthDate);
    var currentDate = new Date();
    
    var years = (currentDate.getFullYear() - birth_date.getFullYear());
    var months = (currentDate.getMonth() - birth_date.getMonth());
    var days = currentDate.getDate() - birth_date.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    if (currentDate.getMonth() < birth_date.getMonth() || currentDate.getMonth() == birth_date.getMonth() && currentDate.getDate() < birth_date.getDate()) {
        years--;
    }
    if (months < 0) {
        months = 11 + months;
    }
    if (days < 0) {
        days = Math.floor(30.44 + days);
    }
    
    var yearStr = " ";
    var monthStr = " "; 
    var dayStr = " ";
    var hourStr = " ";
    var minuteStr = " ";
    var secondStr = " "; 
    console.log(days);

    if (years > 1 ) {
        yearStr = " Years | ";
    } else if (years == 0) {
        years = "";
        yearStr = ""; 
    } else if (year == 0 && month == 0) {
        years = "";
        yearStr = "";
    }
    if (months == 1) {
        monthStr = " Month ";
    } else if (months > 1 ) {
        monthStr = " Months ";
    } else if (months == 0) {
        months = "";
    }
    if (days == 1) {
        dayStr = " Day";
    } else if (days > 1 ) {
        dayStr = " Days";
    } else if (days == 0) {
        days = " ";
        dayStr= " "; 
    }
    if (hours == 1) {
        hourStr = " Hour ";
    } else if (hours > 1 ) {
        hourStr = " Hours ";
    } else if (hours == 0) {
        hours = "";
    }
    if (minutes == 1) {
        minuteStr = " Minute | ";
    } else if (minutes > 1 ) {
        minuteStr = " Minutes | ";
    } else if (minutes == 0) {
        minutes = "";
    } else if ( minutes == 0 && hours == 0) {
        minuteStr = "";
        hourStr = "";
    }
    if (seconds == 1) {
        secondStr = " Second";
    } else if (seconds > 1  ) {
        secondStr = " Seconds";
    } else if (seconds == 0 || seconds == 60) {
        seconds = "";
        minuteStr = " Minutes ";
    }
    document.getElementById("memento").innerText = years + yearStr + months + monthStr + "| " + days + dayStr + "\n" + hours + hourStr
                                                + "| " +  minutes + minuteStr + seconds + secondStr;

    // Refresh memento every 1000ms (1 second)
    var age = setTimeout(function(){ currentAge() }, 1000); 
}
  // Initiating currentTime()
  currentAge();