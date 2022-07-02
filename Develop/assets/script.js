var today = moment();

$("#currentDay").text(today.format("dddd, MMM Do, YYYY")) //displays current time including day of the week 

function saveBtn(saveInfo) { //this function will target the savew button and all of its siblings to enable saving
    console.log(saveInfo.target.id)
    var save = $(saveInfo.target.id)
    console.log(save)
    saveSiblings = save.siblings().val()
    console.log(saveSiblings)
}

var button = document.querySelectorAll(".saveBtn") //makes the save button clickable 
console.log(button)
for (let index = 0; index < button.length; index++) {
    const element = button[index];
    element.addEventListener("click", saveBtn)
}
function keys(Arr) { //saves items to locl storage
    var strings = JSON.stringify(Arr)
    localStorage.setItem("information", strings)
    
}

var hour9 = $(".9") //declares the time slots variables to make them usable for the time function
var hour10 = $(".10")
var hour11 = $(".11")
var hour12 = $(".12")
var hour13 = $(".1")
var hour14 = $(".2")
var hour15 = $(".3")
var hour16 = $(".4")
var hour17 = $(".5")

function timeSlot(before, after) { //a function to check what time it is against the time variables so slots are properly color coded
    var currentTime = moment().format("h")
    console.log(currentTime, before, after)
    if (currentTime == before) {
        after.addClass("present");
    }   else if (currentTime < before) {
        after.addClass("future");
    }   else if (currentTime > before) {
        after.addClass("past")
    }
};

timeSlot(9, hour9) // variables put into the function
timeSlot(10, hour10)
timeSlot(11, hour11)
timeSlot(12, hour12)
timeSlot(1, hour13)
timeSlot(2, hour14)
timeSlot(3, hour15)
timeSlot(4, hour16)
timeSlot(5, hour17)