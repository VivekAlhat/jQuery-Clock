function clock() {
  var currDate = new Date();
  var hour = currDate.getHours();
  var minute = currDate.getMinutes();
  var seconds = currDate.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  } else if (minute < 10) {
    minute = "0" + minute;
  } else if (hour < 10) {
    hour = "0" + hour;
  }

  $(".hour").text(hour);
  $(".minute").text(minute);
  $(".second").text(seconds);

  setTimeout(function () {
    clock();
  }, 500);
}

clock();
