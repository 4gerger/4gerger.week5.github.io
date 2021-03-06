$(document).ready(function(){

// Setting the date format for the element with ID currentDay 
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Comparing current hour with timeblocks 
 setInterval(function() {
    let timeBlock = 9;
    let currentHour = moment().hour();
    $("div[id^='hour-']").each(function(){
        if (currentHour > timeBlock) {
            $(this).children("textarea").addClass("past");
        } else if (currentHour < timeBlock) {
            $(this).children("textarea").addClass("future");
        } else {
            $(this).children("textarea").addClass("present");
        }
        timeBlock += 1;
    });
 }, 1000); 

// Use localStorage to save the text input when save button is clicked
$(".saveBtn").on("click", function(){
let savedText = $(this).prev().val();
let hourBlock = $(this).parent().attr('id');
localStorage[hourBlock + "-schedule"] = savedText;
});

// Set timeBlock's textarea to stored text automatically
setTextInTimeBlock();

function setTextInTimeBlock() {
for(let i = 0; i < 9; i++ ){
    $("div[id^='hour-"+[i+9]+"']").children("textarea").text(localStorage.getItem("hour-"+[i+9]+"-schedule"));
}
}
});


