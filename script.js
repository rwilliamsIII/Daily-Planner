var showDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
var hourCount = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm"
];
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

    // var timeBlockBox = document.querySelector(".container")
    // var timeBlock = $("<div>", {"class": "row"});
    // var hourBlock = $("<div>", {"class": "col-md-1"});
    // var textBlock = $("<div>", {"class": "col-md-10"});
    // var saveBlock = $("<div>", {"class": "col-md-1"});
    // var saveButton = $("<button>", {"class": "savebtn"});

    // assigned classes to the the created variables

    // $(timeBlock).addClass("time-block");
    // $(hourBlock).addClass("hour");
    // $(textBlock).addClass("textarea");
    // $(saveBlock).html(saveButton);
    // $(timeBlock).html(hourBlock, textBlock, saveBlock);


    // added content to newly created div

    // $(hourBlock).text(hour);
    // $()
    

// using for loop to create time block elements and append them to the container
function generatePlanner(){
    for (i = 0; i < 12; i++) {
        hourCount ++;

        $(".container").append($("<div></div>").addClass("row"));
        $(".row:eq(" + i + ")").append($("<div></div>").addClass("col-md-1"), $("<div>").addClass("col-md-10"), $("<div></div>").addClass("col-md-1"));
        $(".col-md-10:eq(" + i + ")").append($("<div></div>").addClass("hourSlot"), $("<div>").addClass("input-group mb-3"));
        $(".mb-3:eq(" + i + ")").append($("<div>").addClass("input-group-prepend"), $("<input>").addClass("form-control").attr("type", "text").attr("aria-label", "Text input with checkbox"));
        $("input-group-prepend:eq(" + i + ")").append($("<input>").addClass("btn btn-primary").attr("type", "submit").attr("value", "Save"));
        $(".hourSlot:eq(" + i + ")").append(moment().add(i - 3, "hour").format("h a"));

        var hour = moment().add(i - 3, "hour").format("h a");
        $(".btn:eq(" + i + ")").click(function() {
            var input = $(".form-control:text").val();
            console.log(input);
            inputArray.push(input);
            console.log(inputArray);
            localStorage.setItem(hour, JSON.stringify(inputArray));
            parsedArray = JSON.parse(localStorage.getItem(hour));
            console.log(parsedArray);
        });
    };
    
};





    // $.each(hourCount, function(i, hour) {
       
        // })