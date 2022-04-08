//moment.js today's date 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//save inputs to local storage upon save button click 
function saveToLocalStorage(event) {
    var hour = event.target.dataset.hour;
    var valueOfText = $("#text-"+hour).val();

    localStorage.setItem(hour, valueOfText)
    
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


function colorUpdate(){
    
}


