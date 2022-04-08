//current hour of the day
var currentHour = moment().hour(); 

//moment.js today's date at top of header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//save inputs to local storage upon save button click 
function saveToLocalStorage(event) {
    var time = event.target.dataset.hour;
    var valueOfText = $("#text-"+time).val();

    localStorage.setItem(time, valueOfText)  
}
$(document).on("click", "button", saveToLocalStorage)

//keeps values on page after refresh
$("#9 .information").val(localStorage.getItem("9"))
$("#10 .information").val(localStorage.getItem("10"))
$("#11 .information").val(localStorage.getItem("11"))
$("#12 .information").val(localStorage.getItem("12"))
$("#13 .information").val(localStorage.getItem("13"))
$("#14 .information").val(localStorage.getItem("14"))
$("#15 .information").val(localStorage.getItem("15"))
$("#16 .information").val(localStorage.getItem("16"))
$("#17 .information").val(localStorage.getItem("17"))


//changes color based on time of day (adds css classes comparing to current hour)
function colorUpdate(){
for (let i = 9; i < 18; i++) {
    //template literal turns 'i' id into string
    const entry = document.getElementById(`${i}`);
    if (currentHour > i) {
        $(entry).addClass("past");
    } else if (currentHour < i) {
        $(entry).addClass("future")
    } else {
        $(entry).addClass("present")
    }
    }
    }

    colorUpdate();