// ASSIGNMENT CODE
var currentHour = new Date().getHours();
var activity= this.siblings('.description').val().localStorage.setItem(currentHour);
function init() {
        for (var i = 9; i < 18; i++) {
        var colorKey = "";
            if (currentHour > i) {
         colorKey = "past";
            } else if (currentHour === i) { 
             colorKey = "present";
             } else {
              colorKey = "future";
             }}
        var hourDisplay = "";
        if (i < 12) {
            hourDisplay = i + "AM";
            } else if (i === 12) {
            hourDisplay = i + "PM";
            } else {
            hourDisplay = i - 12 + "PM"; 
            }   
    var row = $("<div>").addClass("row time-block");
    var hour = $("<div>").addClass("col-2 hour").text(hourDisplay);
    var textArea = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i));$(".container").append(row.append(hour, textArea));
    var saveBtn = $(`<button>`).addClass('col-2 saveBtn').click(function(){ 
        localStorage.setItem(currentHour, activity);
    })
  };

// INITIALIZATION
init();
