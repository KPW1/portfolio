function now() {
  let now = new Date();
  let today = "";
  let AM = "";
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  if (hour > 12) {
    hour = hour - 12;
    AM = "PM";
  } else if (hour < 13) {
    AM = "AM";
  }
  today = `${hour}:${min} ${AM} KST`;
  return today;
}

$(function () {
  $("#date").text(now());
});
