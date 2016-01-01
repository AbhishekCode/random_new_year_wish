var msgs = [
    "Many years have passed with big resolutions & regrets. Let this be the year you make a difference to your life & lifes around you #Happy2016",
    "Happy New year, have a blast",
    "Happy new year to all you lovely people.",
    "Today, is the first blank page of a 365-page book. Write a good one.",
    "HAPPY NEW YEAR! MAKE SURE TO SPREAD POSITIVITY AND MAKE THIS YEAR A GOOD ONE! #HappyNewYear",
    "Bye bye 11111011111. Hello 11111100000. Happy New Year from all of us at 101010.",
    "wish you all a very happy and prosperous new year 2016 ‪#HappyNewYear‬",
    "#In2016 May your joy be so contagious you only attract those who enhance it.. #HappyNewYear",
    "May this 2016 New Year Give you lot of joy and happiness and fill your home with lot of love...Wish you a great New Year...!!",
    "#Happy2016 Spend less time outraging, and ranting, more time in study, learning and gaining knowledge"
];



function getMessage () {
    var index = getRandomInt(0 , this.msgs.length-1);
   document.getElementById("demo").innerHTML = msgs[3]; 
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}