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