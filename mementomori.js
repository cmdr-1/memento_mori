// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

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

  document.getElementById("memento").innerText = years + yearStr + months + monthStr + "\n" + days + dayStr + hours + hourStr 
                                                  + "\n" + minutes + minuteStr + seconds + secondStr;
  
  // Refresh memento every 1000ms (1 second)
  var age = setTimeout(function(){ currentAge() }, 1000); 
}


  // storage.sync to have the stored date of birth persist to all instances of the browser.
  // storage.StorageArea - an object representing a storage area
  // storage.onChanged is the event that fires when there's a change in the storage area.