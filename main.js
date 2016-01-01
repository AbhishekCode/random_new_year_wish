var msgs = [
    "Many years have passed with big resolutions & regrets. Let this be the year you make a difference to your life & lifes around you #Happy2016",
    "Happy New year, have a blast",
    "Ten, nine, eight, seven, six, five, four, three, two, one, yippee! It’s a New Year! Happy New Year, my beloved friend.",
    "May your hair, your teeth, your face-lift, your abs and your stocks not fall, and may your blood pressure, your triglycerides, your cholesterol, your white blood count and your mortgage interest never rise.",
    "Many people await New Year’s Day to make a new start to their old habits. I wish you otherwise. Happy New Year.",
    "HCounting my blessings and wishing you more. Hope you enjoy the New Year in store. Have a joyous New Year, my dear friend!",
    "Out with the old, in with the new: may you be happy the whole year through. Happy New Year!",
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
   document.getElementById("demo").innerHTML = msgs[index]; 
     stWidget.addEntry({
                 "service":"sharethis",
                 "element":document.getElementById('button_1'),
                 "url":"http://sharethis.com",
                 "title":"sharethis",
                 "type":"large",
                 "text":"ShareThis" ,
                 "image":"http://www.softicons.com/download/internet-icons/social-superheros-icons-by-iconshock/png/256/sharethis_hulk.png",
                 "summary":"this is description1"
         });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function copyText () {
      var holdtext =  document.getElementById("demo").innerText;
      Copied = holdtext.createTextRange();
      Copied.execCommand("Copy");
}