
var timeOfDay = moment();
console.log(timeOfDay);

$("#currentDay").text(`${timeOfDay.format('dddd,MMMMM Do')}`);

var hourslot = moment().hour();
console.log(hourslot);


$(document).ready(function(){
    $(".row").hover(function(){
      $(this).css("background-color", "orange");
      }, function(){
      $(this).css("background-color", "grey");
    });
  });

 

var hourtimes = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
    hourtimes.forEach(function(hourslot){
    console.log(hourslot);
});
    
    

function oclock() {
    var n = document.getUTChours()+1;
    var hourslot;
    console.log(hourslot);
    if (n = n) {
        $(".saveBtn").addClass(btn)
    }
    
}



