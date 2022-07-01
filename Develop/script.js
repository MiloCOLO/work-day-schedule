var today = moment();

$("#currentDay").text(today.format("dddd, MMM Do, YYYY")) //displays current time including day of the week 

const








function saveBtn(saveInfo) {
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

{
    key: "information"
}
function keys(Arr) {
    var strings = JSON.stringify(Arr)
    localStorage.setItem("information", strings)
    return 
}


function timeSlot(before, after) {
    if (hour == before) {
        after.addClass("present");
    }   else if (hour < before) {
        after.addClass("future");
    }   else if (hour > before) {
        after.addClass("past")
    }
}

timeSlot;