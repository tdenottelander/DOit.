var main = function () {
    "use strict";
    
    var addToDoItem = function(){
        var $new_Div;
        var $new_ToDo;
        var $new_Checkbox;
        var $new_Date;
        var $new_AlarmDate;
        var $new_AlarmTime;
        var $new_DeleteButton;
        var $new_importance
        if ($(".todo-input input").val() !== ""){
            //We still need to check if alarm is before date of ToDo.
            $new_Div = $("<div>").addClass("List");
            $new_Checkbox = $("<input type = checkbox>");
            $new_importance = $(".todo-input select").val() + " | ";
            $new_Date = " " + $(".todo-input input[title=dateInput]").val() + " | ";
            $new_ToDo = $(".todo-input input[title=textInput]").val() + " | ";
            $new_AlarmDate = $(".todo-input input[title=alarmInputDate]").val() + " ";
            $new_AlarmTime = $(".todo-input input[title=alarmInputTime]").val() + " | ";
            $new_DeleteButton = $("<img/>").attr('src', 'Images/icon_delete.png').attr('alt', 'Delete icon');
            
            $new_Div.append($new_Checkbox, $new_importance, $new_Date, $new_ToDo, $new_AlarmDate, $new_AlarmTime, $new_DeleteButton);
            $(".List1").append($new_Div);
            $(".todo-input input").val("");
        }
    }
    
    $(".todo-input button").on("click", function(event) {
        addToDoItem();
    });
    
    $(".todo-input input").on("keypress", function (event) { 
        if(event.keyCode === 13){
            addToDoItem();
        }
    });
    
    var addList = function(){
        var $new_Div;
        var $new_List;
        
        $new_Div = $(HTMLDivElement()).addClass("List");
        
    
    }
    
    /*
    // create and hide our content as a div
    var $content = $("<div>Hello World!</div>").hide();
    var $moreContent = $("<div>Goodbye World!</div>").hide();
    // append the content to the body element
    $("body").append($content);
    // slide the content down for 2 seconds
    $content.slideDown(2000);
    // append the second content to the body
    $("body").append($moreContent);
    // fade in the second content
    $moreContent.fadeIn();
    */
    
    var addToDoFromInputBox = function(){
        var $new_comment
        if($(".addToDo input") !== ""){
            $new_comment = $("<p>").text($(".addToDo text").value()).hide();
            $(".List1").append($new_comment);
        }
    }
    
    $(".addtask button").on("click", function(event) {
        addToDoFromInputBox();
    });
    
}

$(document).ready(main);