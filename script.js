var jumbotronEl=document.querySelector('jumbotron');
var displayThreeEl= document.querySelector('display-3');
var leadEl=document.querySelector('lead');



// current day displayed at top of calendar
var now = moment().format("ddd, MMM Do YYYY");
$("#currentDay").text(now);

var currentTime= moment().format("h:mm")
var block=document.querySelectorAll('#hour')

if (block<currentTime){
$(".container").addClass(".past")
}else if (block=currentTime) {
    $(".container").addClass(".present");
}else {block>currentTime,
    $(".container").addClass(".future");
};


// save button-- save in local storage
function saveData(){
    var inputValueEl =$(this).parent().siblings(".col-6").children().val()
    var hours= $(this).parent().siblings(".col-3").attr("id")
    localStorage.setItem(hours,inputValueEl)
    
    }
    $('.btn').click(saveData)

//  refresh-saved-- items shown

$("#hour-09").val(localStorage.getItem("#hour-09"));
$("#hour-10").val(localStorage.getItem("#hour-10"));
$("#hour-11").val(localStorage.getItem("#hour-11"));
$("#hour-12").val(localStorage.getItem("#hour-12"));
$("#hour-13").val(localStorage.getItem("#hour-13"));
$("#hour-14").val(localStorage.getItem("#hour-14"));
$("#hour-15").val(localStorage.getItem("#hour-15"));
$("#hour-16").val(localStorage.getItem("#hour-16"));
$("#hour-17").val(localStorage.getItem("#hour-17"));
$("#hour-18").val(localStorage.getItem("#hour-18"));