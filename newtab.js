function main() {
    if (localStorage.length == 0) {
        document.title = "Set up Memento Mori";
        document.getElementById("main").innerHTML = 
        `<div class="container">
            <div class="title"><h3>Set up Memento Mori</h3></div>
            <form>
            <label for="birthDate">Enter your date of birth:</label>
            <input type="date" name="Birthdate"id="birthDate" placeholder="YYYY-MM-DD" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"></input>
            <button type="submit" id="button" onclick="saveDate()">Submit</button>
            </form>
        </div>`;
      } else {
        document.title = "Memento Mori";
        document.getElementById("main").innerHTML = 
        `<div class="container">
            <div class="title"><h3>Memento Mori</h3></div>
            <div id="memento-lg"></div>
            <div id="memento-sm"></div>
            <div id="clock""></div>
            <button type="submit" id="clearDob" onclick="clearDate()">Reset DoB</button>
        </div>`;
        renderTimers();
    }
}

main();
  
//-----------------------------------------------------------------------//
var birthDate; 

if (localStorage.getItem("birthDate")) {
    birthDate = localStorage.getItem('birthDate');
} else {
    birthDate = new Date();
}


function saveDate() {
    document.getElementById("button").click();    
    var dob = document.getElementById("birthDate").value;
    
        if (typeof dob !== null) {
        const birthdate = dob.split("-");
        var parsedDate = (birthdate[0]+"-"+birthdate[1]+"-"+birthdate[2]);
        console.log(parsedDate);
        birthDate = parsedDate;
        localStorage.setItem("birthDate", birthDate);
        }
} 

function clearDate() {
    document.getElementById("clearDob").click();
    localStorage.clear();
    location.reload();
};

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

function renderTimers() {
    currentAge();
    currentTime();
}