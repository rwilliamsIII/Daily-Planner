var showDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
var hourCount = 0;
var inputArray = [];
var input = "";



$(document).ready(function() {
    displayDate();
    generatePlanner();
});


// function to display date and time in jumbotron
function displayDate(){
$("#currentDay").html(showDate);
console.log(showDate);
};

// created variables for the creation of dynamic html content
    var timeBlockBox = document.querySelector(".container")
    var timeBlock = $("<div>", {"class": "row"});
    var hourBlock = $("<div>", {"class": "col-md-1"});
    var textBlock = $("<div>", {"class": "col-md-10"});
    var saveBlock = $("<div>", {"class": "col-md-1"});
    var saveButton = $("<button>", {"class": "savebtn"});
    // assigned classes to the the created variables
    // $(timeBlock).addClass("time-block");
    // $(hourBlock).addClass("hour");
    // $(textBlock).addClass("textarea");
    // $(saveBlock).html(saveButton);
    // $(timeBlock).html(hourBlock, textBlock, saveBlock);
    

// using for loop to create time block elements and append them to the container
function generatePlanner(){

    for (i = 0; i < 12; i++) {
        hourCount ++;

        $(timeBlockBox).append(timeBlock).addClass("time-block");
        $(timeBlock).append(hourBlock).addClass("hour");
    };
};