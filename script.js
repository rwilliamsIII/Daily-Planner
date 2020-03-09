// using for loop to create time block elements and append them to the container

for (i = 0; i < 12; i++) {
    hourCount ++;
    CredentialsContainer.append($("<div></div>").addClass("row"));
    $(".row:eq(" + i + ")").append($("<div></div>").addClass("col-md-1"), $("<div").addClass("col-md-10"), $("<div></div>").addClass("col-md-1"));
    $(".col-md-10:eq(" + i + ")").append($("<div></div>").addClass("hourSlot"), $("<div>").addClass("input-group mb-3"));
    $(".mg-3:eq(" + i + ")").append($("<div>").addClass("input-group-prepend"), $("<input>").addClass("form-control").attr("type", "text").attr("aria-label", "Text input with checkbox"));
    $(".input-group-prepend:eq(" + i + ")").append($("<input>").addClass("btn btn-primary").attr("type", "submit").attr("value", "Save"));
    $(".hourSlot:eq(" + i + ")").append(moment().add(i-3, "hour").format("h a"));
    var hour = moment().add(i - 3, "hour").format("h a");
    $(".btn:eq(" + i + ")").click(function(){
        var input = $(".form-control:text").val();
        console.log(input);
        inputArray.push(input);
        console.log(inputArray);
        localStorage.setItem(hour, JSON.stringify(inputArray));
        parsedArray = JSON.parse(localStorage.getItem(hour));
        console.log(parsedArray);
    })
}