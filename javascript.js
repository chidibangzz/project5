
var timeOfDay = moment();
console.log(timeOfDay);

$("#currentDay").text(`${timeOfDay.format('dddd,MMMMM Do')}`);

