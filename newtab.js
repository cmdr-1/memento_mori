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
            <button type="submit" id="button" class="btn btn-secondary">Submit</button>
            </form>
        </div>`;
    // if there is a date in storage, render the clocks
  } else {
    document.title = "Memento Mori";
    document.getElementById("main").innerHTML = `
    <div class="row">
    <div><h3>Memento Mori</h3></div>
    </div>
            <div class="row">
            <div class="col my-auto">
            <div id="memento-lg"></div>
            <div id="memento-sm"></div>
            </div>
            </div>

            <div class="row">
            <div class="col-sm-12">
            <button type="submit" id="clearDob" class="btn btn-dark btn-sm">Reset</button>
            </div>
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

// adds a 0 in front of clock values that are less than 10
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
// This is the the age calculator
function currentAge() {
  let birth_date = new Date(birthDate);
  var currentDate = new Date();

  // utilizes javascript funtions to calculate the time between the attributes of the current year and birthdate
  var years = currentDate.getFullYear() - birth_date.getFullYear();
  var months = currentDate.getMonth() - birth_date.getMonth();
  var days = currentDate.getDate() - birth_date.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

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

    // the average life expectancy of a person in the world is approx. 72.0 years 
    // https://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends_text/en/
  var yearsLeft = updateTime(72 - years);
  var monthsLeft = updateTime(12 - months); 
  var daysLeft = updateTime(Math.floor(30.44 - days));
  var hoursLeft = updateTime(24 - hours);
  var minutesLeft = updateTime(60 - minutes);
  var secondsLeft = updateTime(60 - seconds);
  

  // initialize empty strings for each time attribute
  var yearStr = " ";
  var monthStr = " ";
  var dayStr = " ";
  var hourStr = " ";
  var minuteStr = " ";
  var secondStr = " ";

  // Create the strings that will be rendered on the new tab page
  // values equal to 1 will generate strings without plural units of time
  if (yearsLeft > 1) {
    yearStr = "- " + yearsLeft + " Years - ";
  }
  if (monthsLeft > 1) {
    monthStr = monthsLeft + " Months - ";
  } else if (monthsLeft == 1) {
    monthStr = monthsLeft + " Month - ";
  }
  if (daysLeft > 1) {
    dayStr = daysLeft + " Days - ";
  } else if (daysLeft == 1) {
    dayStr = daysLeft + " Day - ";
  }

  if (hoursLeft > 1) {
    hourStr = "- " + hoursLeft + " Hours - ";
  } else if (hoursLeft == 1) {
    hourStr = "- " + hoursLeft + " Hour - ";
  }
  if (minutesLeft > 1) {
    minuteStr = minutesLeft + " Minutes - ";
  } else if (minutesLeft == 1) {
    minuteStr = minutesLeft + " Minute -";
  }
  if (secondsLeft > 1) {
    secondStr = secondsLeft + " Seconds -";
  } else if (secondsLeft == 1) {
    secondStr = secondsLeft + " Second -";
  } else if (secondsLeft == 0) {
    secondStr = secondsLeft + " Second -";
  }

  document.getElementById("memento-lg").innerText = yearStr + monthStr + dayStr;
  document.getElementById("memento-sm").innerText = hourStr + minuteStr + secondStr;

  // Refresh memento every 1000ms (1 second) to simulate a live clock
  var age = setTimeout(function () {
    currentAge();
  }, 1000);
}

// Clock display - may or may not use in production version
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


function renderTimers() {
  currentAge();
  //currentTime();
}
