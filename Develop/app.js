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
    textArea.css('color', 'black');
    textArea.css('width', '70%');
    textArea.addClass('text-input');
    textArea.addClass(`text-${timeInt}`);
    rowContainer.append(textArea);

    // save btn
    saveBtn.addClass('saveBtn');
    saveBtn.addClass(`saveBtn-${timeInt}`);
    var saveIcon = $('<span>');
    saveIcon.addClass("material-symbols-outlined")
    saveIcon.text('save')
    saveBtn.append(saveIcon);
    saveBtn.css('width', '15%')
    rowContainer.append(saveBtn);

    var timeNew;
    // if statement to convert the immutable moment.hour() function from 24 hour time to 12 hour time
    if (hour >= 12) {
        if (timeInt >= 1 && timeInt < 8) {  
            timeNew = timeInt + 12
        } else {
            timeNew = timeInt;
        };
    } else {
        if (timeInt >= 1 && timeInt < 8) {  
            timeNew = timeInt + 12
        } else {
            timeNew = timeInt;
        }
    };
    
    // decide if the time is past, present or future compared to the schedule times
    if (timeNew === hour) {
        textArea.addClass('present');
    } else if (timeNew < hour) {
        textArea.addClass('past')
    } else {
        textArea.addClass('future')
    }

};

// This function takes in the hour and then assigns it the AM or PM period and calls the row creator function
const amOrPm = function(hourInt) {
    if(hourInt > 8 && hourInt < 12) {
        finalTime = hourInt + "AM";
        createRow(finalTime, hourInt);
        
    } else {
        finalTime = hourInt + "PM";
        createRow(finalTime, hourInt);
    };
};

// This for loop iterates through the hour array and calls the amOrPm function
for (var i = 0; i < hourArray.length; i++) {
    amOrPm(hourArray[i]);
};

// INFO IS STORED IN LOCAL FILE AND IT COMES BACK UP ON THE SCREEN ONCE ITS REFRESHED

// init function that initialises the local storage text on the page
var appearText;
const init = function() {
    appearText = localStorage.getItem('text9');
    $('.text-9').text(appearText);
    appearText = localStorage.getItem('text10');
    $('.text-10').text(appearText);
    appearText = localStorage.getItem('text11');
    $('.text-11').text(appearText);
    appearText = localStorage.getItem('text12');
    $('.text-12').text(appearText);
    appearText = localStorage.getItem('text1');
    $('.text-1').text(appearText);
    appearText = localStorage.getItem('text2');
    $('.text-2').text(appearText);
    appearText = localStorage.getItem('text3');
    $('.text-3').text(appearText);
    appearText = localStorage.getItem('text4');
    $('.text-4').text(appearText);
    appearText = localStorage.getItem('text5');
    $('.text-5').text(appearText);
};

init();

// event listener for the save button to call the function of getting the info from local storage
var inputText;
$('.saveBtn-9').on('click', event => {
    event.preventDefault();
    inputText = $('.text-9').val();
    localStorage.setItem('text9', inputText);
    console.log(inputText)
});

$('.saveBtn-10').on('click', event => {
    event.preventDefault();
    inputText = $('.text-10').val();
    localStorage.setItem('text10', inputText);
    console.log(inputText)
});

$('.saveBtn-11').on('click', event => {
    event.preventDefault();
    inputText = $('.text-11').val();
    localStorage.setItem('text11', inputText);
    console.log(inputText)
});

$('.saveBtn-12').on('click', event => {
    event.preventDefault();
    inputText = $('.text-12').val();
    localStorage.setItem('text12', inputText);
    console.log(inputText)
});

$('.saveBtn-1').on('click', event => {
    event.preventDefault();
    inputText = $('.text-1').val();
    localStorage.setItem('text1', inputText);
    console.log(inputText)
});

$('.saveBtn-2').on('click', event => {
    event.preventDefault();
    inputText = $('.text-2').val();
    localStorage.setItem('text2', inputText);
    console.log(inputText)
});

$('.saveBtn-3').on('click', event => {
    event.preventDefault();
    inputText = $('.text-3').val();
    localStorage.setItem('text3', inputText);
    console.log(inputText)
});

$('.saveBtn-4').on('click', event => {
    event.preventDefault();
    inputText = $('.text-4').val();
    localStorage.setItem('text4', inputText);
    console.log(inputText)
});

$('.saveBtn-5').on('click', event => {
    event.preventDefault();
    inputText = $('.text-5').val();
    localStorage.setItem('text5', inputText);
    console.log(inputText)
});

// JQUERY AND THE SAVE BUTON IS PAIRED TO THE SIBLING OF THE INFO/TEXT BLOCK OF TIME
