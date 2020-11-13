
var timeOfDay = moment();
console.log(timeOfDay);

$("#currentDay").text(`${timeOfDay.format('dddd,MMMMM Do')}`);

$(document).ready(function(){
    $(".row").hover(function(){
      $(this).css("background-color", "orange");
      }, function(){
      $(this).css("background-color", "grey");
    });
  });

  $(".container);