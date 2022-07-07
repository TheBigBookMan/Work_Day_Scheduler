// variables
var timerId = $('#currentDay');
var containerId = $('.container')
var rowContainer = $('<div>');
var timeBlock = $('<div>');
var textArea = $('<textarea>');
var saveBtn = $('<button>');  


var dateTime;
var hour = moment().hour();
var hourArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var finalTime;

// Setting the date with momentjs
setInterval(function() {
    dateTime = moment();
    timerId.text(dateTime.format("dddd, MMMM Do Y HH:mm"))
}, 1000);

// function that creates the rows of schedules
createRow = (timeString, timeInt) => {
    rowContainer = $('<div>');
    timeBlock = $('<div>');
    textArea = $('<textarea>');
    saveBtn = $('<button>');        

    // row
    rowContainer.addClass('row');
    rowContainer.css('display', 'flex');
    rowContainer.css('justify-content', 'space-between');
    containerId.append(rowContainer);

    // timeblock 
    timeBlock.addClass('hour');
    timeBlock.text(timeString);
    timeBlock.css('width', '15%');
    rowContainer.append(timeBlock);

    // textarea
    textArea.text("Hello there I have a meeting at this time"); //placeholder
    textArea.css('width', '70%');
    rowContainer.append(textArea);

    // save btn
    saveBtn.addClass('saveBtn');
    saveBtn.text('Save'); //placeholder put logo in
    saveBtn.css('width', '15%')
    rowContainer.append(saveBtn);

    var timeNew;
    // if statement to convert the immutable moment.hour() function from 24 hour time to 12 hour time
    if (hour >= 12) {
        if (timeInt >= 1 && timeInt < 8) {  
            timeNew = timeInt + 12
            console.log(timeNew)
        } else {
            timeNew = timeInt;
            console.log(timeNew)
        };
    } else {
        if (timeInt >= 1 && timeInt < 8) {  
            timeNew = timeInt + 12
            console.log(timeNew)
        } else {
            timeNew = timeInt;
        }
    };
    
    // decide if the time is past, present or future compared to the schedule times
    if (timeNew === hour) {
        textArea.addClass('present');
        console.log("equal" + timeNew)
        console.log(hour)
    } else if (timeNew < hour) {
        textArea.addClass('past')
        console.log("past" + timeNew)
        console.log(hour)
    } else {
        textArea.addClass('future')
        console.log("future" + timeNew)
        console.log(hour)
    }

};



// INFO IS STORED IN LOCAL FILE AND IT COMES BACK UP ON THE SCREEN ONCE ITS REFRESHED


// JQUERY AND THE SAVE BUTON IS PAIRED TO THE SIBLING OF THE INFO/TEXT BLOCK OF TIME


// function that tajes in time and assigns it the past,present,future




// This function takes in the hour and then assigns it the AM or PM period and calls the row creator function
const amOrPm = function(hourInt) {
    if(hourInt > 8 && hourInt < 12) {
        finalTime = hourInt + "AM";
        console.log(finalTime)
        // pastPresentFuture(hourInt)
        createRow(finalTime, hourInt);
        
    } else {
        finalTime = hourInt + "PM";
        console.log(finalTime)
        // pastPresentFuture(hourInt)
        createRow(finalTime, hourInt);
    };
};

// This for loop iterates through the hour array and calls the amOrPm function
for (var i = 0; i < hourArray.length; i++) {
    
    amOrPm(hourArray[i]);
    
};

