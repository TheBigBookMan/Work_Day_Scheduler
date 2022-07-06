// variables
var timerId = $('#currentDay');
var containerId = $('.container')

// Setting the date with momentjs
var dateTime = moment();
timerId.text(dateTime.format("dddd, MMMM Do Y"))


// CREATE THE TIME BLOCKS FOR BUSINESS HOURS BETWEEN 9AM to 5PM COLOR CODED- GREY= EVENT HAPPENED, PINK= CURRENT HOUR, GREEN= UPCOMING. EACH TIMEBLOCK IS A TEXT AREA WHERE USER CAN ENTER TEXT USE TEXT AREA CLASS FROM CSS

createRow = (time) => {
    // row
    var rowContainer = $('<div>');
    rowContainer.addClass('row');
    rowContainer.css('display', 'flex');
    rowContainer.css('justify-content', 'space-between');
    containerId.append(rowContainer);



    // timeblock 
    var timeBlock = $('<div>');
    timeBlock.addClass('time-block');
    timeBlock.text(time);
    timeBlock.css('width', '15%');
    rowContainer.append(timeBlock);



    // textarea
    var textArea = $('<textarea>');
    textArea.text("Hello there I have a meeting at this time"); //placeholder
    textArea.css('width', '70%');
    rowContainer.append(textArea);



    // save btn
    var saveBtn = $('<button>');
    saveBtn.addClass('saveBtn');
    saveBtn.text('Save'); //placeholder put logo in
    saveBtn.css('width', '15%')
    rowContainer.append(saveBtn);
};




// INFO IS STORED IN LOCAL FILE AND IT COMES BACK UP ON THE SCREEN ONCE ITS REFRESHED


// JQUERY AND THE SAVE BUTON IS PAIRED TO THE SIBLING OF THE INFO/TEXT BLOCK OF TIME


createRow("9:00 am")
createRow("10:00 am")
createRow("11:00 am")
createRow("12:00 pm")
createRow("13:00 pm")
createRow("14:00 pm")
createRow("15:00 pm")
createRow("16:00 pm")
createRow("17:00 pm")