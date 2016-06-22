$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var leapYear = function(year) {
      if (year % 100 === 0) {
        return false;
      } else if (year % 4 ===0){
        return true;
      } else {
      return false;
      }
    };
    var result = leapYear(year);
    $("#result").text(result);
  });
});
