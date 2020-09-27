function main() {
  // Renders the setup if there is no date stored in localStorage
  // input has date verification
  if (localStorage.length == 0) {
    document.title = "Set up Memento Mori";
    document.getElementById("main").innerHTML = `
            <div class="title"><h3>Set up Memento Mori</h3></div>
            <form>
            <label for="birthDate">Enter your date of birth:</label>
            <input type="date" name="Birthdate"id="birthDate" placeholder="YYYY-MM-DD" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"></input>
            <button type="submit" id="button" class="btn btn-primary">Submit</button>
            </form>
        </div>`;
    // if there is a date in storage, render the clocks
  } else {
    document.title = "Memento Mori";
    document.getElementById("main").innerHTML = `
    <div class="row">
    <div class="title"><h3>Memento Mori</h3></div>
    </div>
            <div class="row">
            <div id="memento-lg"></div>
            <div id="memento-sm"></div>
            </div>

            <div class="row">
            <div id="clock"></div>
            </div>

            <div class="row">
            <button type="submit" id="clearDob" class="btn btn-dark btn-sm">Reset</button>
            </div>
    `;
    renderTimers();
  }
}

main();

//-----------------------------------------------------------------------//

var birthDate;

// Try to get the birthDate, if there isn't one, initialize Date
if (localStorage.getItem("birthDate")) {
  birthDate = localStorage.getItem("birthDate");
} else {
  birthDate = new Date();
}

// wait for the DOM to load to initialize function, then listen for the click event
document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("button");
  submitButton.addEventListener("click", function () {
    // acquire the value of the date submitted
    var dob = document.getElementById("birthDate").value;

    // split up the date with dashes
    if (typeof dob !== null) {
      const birthdate = dob.split("-");
      var parsedDate = birthdate[0] + "-" + birthdate[1] + "-" + birthdate[2];
      birthDate = parsedDate;
      // store the now prepared date in localStorage to be retrieved in the future
      localStorage.setItem("birthDate", birthDate);
    }
  });
});

// this is the code used to reset the date of birth (basically re-setup the extension)
document.addEventListener("DOMContentLoaded", function () {
  var clearButton = document.getElementById("clearDob");
  clearButton.addEventListener("click", function () {
    document.getElementById("clearDob").click();
    localStorage.clear();
    location.reload();
  });
});

//-----------------------------------------------------------------------//

// This is the the age calculator
function currentAge() {
  let birth_date = new Date(birthDate);
  var currentDate = new Date();

  // utilizes javascript funtions to calculate the time between the attributes of the current year and birthdate
  var years = updateTime(currentDate.getFullYear() - birth_date.getFullYear());
  var months = updateTime(currentDate.getMonth() - birth_date.getMonth());
  var days = updateTime(currentDate.getDate() - birth_date.getDate());
  var hours = updateTime(currentDate.getHours());
  var minutes = updateTime(currentDate.getMinutes());
  var seconds = updateTime(currentDate.getSeconds());

  // if the current month index is lower than the birthdate index, subtract one year
  if (
    currentDate.getMonth() < birth_date.getMonth() ||
    (currentDate.getMonth() == birth_date.getMonth() &&
      currentDate.getDate() < birth_date.getDate())
  ) {
    years--;
  }
  // if the calculated number of months is less than zero, the true index of the month will be 11 + the calculated value
  // the month value in the conditional statement will obviously be a negative value
  if (months < 0) {
    months = 11 + months;
  }
  // if there's less than one day calculated, round down the average number of days in a month plus the number of days calculated
  // the days value in the conditional will obviously be negative
  if (days < 0) {
    days = Math.floor(30.44 + days);
  }

  // initialize empty strings for each time attribute
  var yearStr = " ";
  var monthStr = " ";
  var dayStr = " ";
  var hourStr = " ";
  var minuteStr = " ";
  var secondStr = " ";

  // Create the strings that will be rendered on the new tab page
  // values equal to 1 will generate strings without plural units of time
  if (years > 1) {
    yearStr = "- " + years + " Years - ";
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
    hourStr = "- " + hours + " Hours - ";
  } else if (hours == 1) {
    hourStr = "- " + hours + " Hour - ";
  }
  if (minutes > 1) {
    minuteStr = minutes + " Minutes - ";
  } else if (minutes == 1) {
    minuteStr = minutes + " Minute -";
  }
  if (seconds > 1) {
    secondStr = seconds + " Seconds -";
  } else if (seconds == 1) {
    secondStr = seconds + " Second -";
  }

  document.getElementById("memento-lg").innerText = yearStr + monthStr + dayStr;
  document.getElementById("memento-sm").innerText = hourStr + minuteStr + secondStr;

  // Refresh memento every 1000ms (1 second) to simulate a live clock
  var age = setTimeout(function () {
    currentAge();
  }, 1000);
}

// Clock display
function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText =
    " Current Time\n " + hour + " : " + min + " : " + sec;
  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}

// adds a 0 in front of clock values that are less than 10
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

function renderTimers() {
  currentAge();
  currentTime();
}
