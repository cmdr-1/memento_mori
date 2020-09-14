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
  
//-----------------------------------------------------------------------//
var birthDate; 

if (localStorage.getItem("birthDate")) {
    birthDate = localStorage.getItem('birthDate');
} else {
    birthDate = new Date();
}

$("#button").click(function(){
    var dob = $("#birthDate").val();

    if (typeof dob !== null) {
    const birthdate = dob.split("/");
    var parsedDate = (birthdate[0]+"/"+birthdate[1]+"/"+birthdate[2]);
    console.log(parsedDate);
    birthDate = parsedDate;
    localStorage.setItem("birthDate", birthDate);
    } 
});

function renderTimers() {
    currentAge();
    currentTime();
}


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

        if (years > 1) {
            yearStr = " - " + years + " Years - ";
        } 
        if (months > 1) {
            monthStr = months + " Months - ";
        } else if (months == 1) {
            monthStr = months + " Month - ";
        } 
        if (days > 1) {
            dayStr = days + " Days - ";
        } else if (days == 1) {
            dayStr = days + " Day - ";
        } 
        
        if (hours > 1) {
            hourStr = " - " + hours + " Hours - ";
        } else if ( hours == 1) {
            hourStr = " - " + hours + " Hour - ";
        }
        if (minutes > 1) { 
            minuteStr = minutes + " Minutes - ";
        } else if (minutes == 1) {
            minuteStr = minutes + " Minute -";
        }
        if (seconds > 1) {
            secondStr = seconds + " Seconds -"
        } else if (seconds == 1) {
            secondStr = seconds + " Second -";
        }

 
    document.getElementById("memento-lg").innerText = yearStr + monthStr + dayStr;
    document.getElementById("memento-sm").innerText = hourStr + minuteStr + secondStr;

    // Refresh memento every 1000ms (1 second)
    var age = setTimeout(function(){ currentAge() }, 1000); 
}
//   // Initiating currentTime()
//   currentAge();