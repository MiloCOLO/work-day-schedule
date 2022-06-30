var today = moment();

$("#currentDay").text(today.format("MMM Do, YYYY")) //include day of the week 

function saveBtn(saveInfo) {
    console.log(saveInfo.target.id)
}

var button = document.querySelectorAll(".saveBtn")
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

}
