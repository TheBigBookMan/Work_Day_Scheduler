# Work Day Scheduler Starter Code

## Introduction
Within this project the user will be able to access the current time and list any activities they need to do for the day at certain time-points. If the hour of the day is the same as on the page then the textarea will be color red, if it's past that certain time then it's grey and if it hasn't past it yet then it's green. Their activity will be saved within the local storage and can be accessed still even when refreshing our closing the browser.

## Functionality
There are multiple parts of this project which help make it work logically.
### DateTime
Within the header I was able to use moment.js to select the current date and time and storing it into text. I was also able to select a specific format for the time which was required.

### Rows
There are 9 rows within the project and each one is representative of each hourly block of time within the day. This can be changed by the user to suit their daily schedule by changing the time integers within the hourArray array.

### Timeblock 
The timeblocks are on the left of the row and they are integers that were taken from the hourArray array and turned into hourly times with the matching AM or PM according to the number.

### Textarea
The textarea is where the user is able to insert text of any activity they want listed in the scheduler. It will then also be showed up in this same spot after refreshing or reopening the page. The textarea will be a color of red for the row that is matched to the current time, grey color for past time and green for future time.

### Save Button
The save button is on the right and is connected to the textarea through local storage selectors. This allows the user to click the button and then save the text that is in the textarea. The user can overwrite or erase text and then save and it will be overwritten or erased. 

#### Logic
Within the project, the moment.js hour function would only get the current hour in 24 hour format. So for this to work in a 12 hour format I needed to create an algorithm that would change the hour variable into a different one that would stop the past, present or future categories getting unexpectedly triggered by incorrect numbers from the 24 hour format.

## Screenshot


## Deployed URL
https://thebigbookman.github.io/Work_Day_Scheduler/