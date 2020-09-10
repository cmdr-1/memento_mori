// This is the clock display
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
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
  
  currentTime(); /* calling currentTime() function to initiate the process */
  
//-----------------------------------------------------------------------//
// This is the the age calculator 

var DOB = "August 1, 1992";
// Date.parse() returns the number of milliseconds between the argument and Jan 1 1970
var msecBetweenDOBAnd1970 = Date.parse(DOB);
// Date.now() returns the number of milliseconds between the the current time and Jan 1 1970
var msecBetweenNowAnd1970 = Date.now();
var ageInMsec = msecBetweenNowAnd1970-msecBetweenDOBAnd1970;
//--We will leverage Date.parse and now method to calculate age in milliseconds refer here https://www.w3schools.com/jsref/jsref_parse.asp

  var msec = ageInMsec;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30; 
/* using 30 as base as months can have 28, 29, 30 or 31 days depending a month in a year it itself is a different piece of comuptation  */
  var year = day * 365;

//let the age conversion begin
var years = Math.floor(msec/year);
var months = Math.floor((msec/year - years) * 12);
var days = Math.floor((((msec/year - years) * 12) - months) * 30);
var hours = Math.floor((((((msec/year - years) * 12) - months) * 30) - days) * 24);
var minutes = Math.floor((((((((msec/year - years) * 12) - months) * 30) - days) * 24) - hours) * 60);
var seconds = Math.round((((((((((msec/year - years) * 12) - months) * 30) - days) * 24) - hours) * 60) - minutes) * 60);

  
function printResults() {
  var message = "Years : " + years +
     " | Months : " + months +
     " | Days : " + days +
     " | Hours : " + hours +
     " | Minutes: " + minutes + 
     " | Seconds : " + seconds
  document.getElementById('placeholder').innerHTML = message;
}

window.onload = printResults();

function currentAge() {
    myear = updatetime(years);
    mmonth = updateTime(months);
    mday = updateTime(days);
    mhour = updateTime(hours);
    mmin = updateTime(mins);
    mseconds = updateTime(seconds);
    document.getElementById("memento").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
      var t = setTimeout(function(){ currentAge() }, 1000); /* setting timer */
  }

  currentAge();