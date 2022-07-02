# work-day-schedule

## [View my work](https://milocolo.github.io/work-day-schedule/)

This is a handy work day scheduler to help the every day worker sort out their day. By using color coded time slots, and easy to navigate styling, an average worker with a busy work day can easily plan out their schedule. 

## Technologies used:

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap
* moment.js

## Code snippet:

````javascript
function timeSlot(before, after) { 
    var currentTime = moment().format("h")
    console.log(currentTime, before, after)
    if (currentTime == before) {
        after.addClass("present");
    }   else if (currentTime < before) {
        after.addClass("future");
    }   else if (currentTime > before) {
        after.addClass("past")
    }
}
````

## License

This uses a standard MIT license.