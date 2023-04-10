// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $(".saveBtn").on("click", function(){
    var description = $(this).siblings(".description").val()
    console.log(description);
    var timeBlock = $(this).parent(".time-block").attr("id")
    console.log(timeBlock);
    localStorage.setItem(timeBlock, description)
  })

$("#9").children("textarea").val(localStorage.getItem("9"))
$("#10").children("textarea").val(localStorage.getItem("10"))
$("#11").children("textarea").val(localStorage.getItem("11"))
$("#12").children("textarea").val(localStorage.getItem("12"))
$("#1").children("textarea").val(localStorage.getItem("1"))
$("#2").children("textarea").val(localStorage.getItem("2"))
$("#3").children("textarea").val(localStorage.getItem("3"))
$("#4").children("textarea").val(localStorage.getItem("4"))
$("#5").children("textarea").val(localStorage.getItem("5"))

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var now = dayjs();
  console.log("Now: ", now.format());
  var currenthour = dayjs().hour();
  const currentDate = dayjs().format('MM-DD-YYYY');
  //document.querySelectorAll();
  // what if we test against the current HOUR?

  $(".time-block").each(function () {
    var id = $(this).attr("id")
    console.log(id)

    // we need to pull out the ID Number portion of the ID
    if (id < currenthour) {
      $(this).addClass('past');
    }
    else if (id == currenthour) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future')
    }

  })
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(currentDate)

});
