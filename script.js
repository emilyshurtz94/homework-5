var jumbotronEl=document.querySelector('jumbotron');
var displayThreeEl= document.querySelector('display-3');
var leadEl=document.querySelector('lead');



// current day displayed at top of calendar
var now = moment().format("ddd, MMM Do YYYY");
$("#currentDay").text(now);

var currentTime= moment().hours()
$(".time-block").each(function(){
    var block=parseInt($(this).attr('id'))
    console.log(block)
    console.log(currentTime)
    if (block<currentTime){
        $(this).addClass("past")
    }else if (block===currentTime) {
        $(this).addClass("present");
    }else{
        $(this).addClass("future");
    };
    
})

// save button-- save in local storage
function saveData(){
    var inputValueEl =$(this).parent().siblings(".col-6").children().val()
    var hours= $(this).parent().siblings(".col-3").attr("id")
    localStorage.setItem(hours,inputValueEl)
    
    }
    $('.btn').click(saveData)

//  refresh-saved-- items shown

$("#hour-09").siblings(".col-6").children().val(localStorage.getItem("hour-09"));
$("#hour-10").siblings(".col-6").children().val(localStorage.getItem("hour-10"));
$("#hour-11").siblings(".col-6").children().val(localStorage.getItem("hour-11"));
$("#hour-12").siblings(".col-6").children().val(localStorage.getItem("hour-12"));
$("#hour-13").siblings(".col-6").children().val(localStorage.getItem("hour-13"));
$("#hour-14").siblings(".col-6").children().val(localStorage.getItem("hour-14"));
$("#hour-15").siblings(".col-6").children().val(localStorage.getItem("hour-15"));
$("#hour-16").siblings(".col-6").children().val(localStorage.getItem("hour-16"));
$("#hour-17").siblings(".col-6").children().val(localStorage.getItem("hour-17"));
$("#hour-18").siblings(".col-6").children().val(localStorage.getItem("hour-18"));