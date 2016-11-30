var main = function () {
    "use strict";
    
    //Variable that contains all lists
    var lists = [];

    //toDo constructor
    function toDo(task, date, alarmDate, alarmTime, importance){
        this.task = task
        this.date = date;
        this.alarmDate = alarmDate;
        this.alarmTime = alarmTime;
        this.importance = importance;
    }
    
    //Make todo1 and todo2 and add it to list 1.
  //  var toDo1 = new toDo("task", "date", "alarmdate", "alarmtime", "importance");
  //  var toDo2 = new toDo("task", "date", "alarmdate", "alarmtime", "importance");
    var list1 = [];
    lists.push(list1);
    
        //Add a new list
    var addList = function(){
        var newList = [];
        lists.push(newList);
    }
  
    //Add ToDo item
    var addToDoItem = function(){
        var $new_Div;
        var $new_ToDo;
        var $new_Checkbox;
        var $new_Date;
        var $new_AlarmDate;
        var $new_AlarmTime;
        var $new_DeleteButton;
        var $new_importance;
        if ($(".todo-input input").val() !== ""){
            //We still need to check if alarm is before date of ToDo.
            $new_Div = $("<div>").addClass("List");
            $new_Checkbox = $("<input type = checkbox>");
            $new_importance = $(".todo-input select").val() + " | ";
            $new_Date = " " + $(".todo-input input[title=dateInput]").val() + " | ";
            $new_ToDo = $(".todo-input input[title=textInput]").val() + " | ";
            $new_AlarmDate = $(".todo-input input[title=alarmInputDate]").val() + " ";
            $new_AlarmTime = $(".todo-input input[title=alarmInputTime]").val() + " | ";
            $new_DeleteButton = $('<img id=deletebutton src="Images/icon_delete.png" />');
            $new_DeleteButton.on("click", function(event){
                $new_Div.remove();
                
            })
            
            var newToDo = new toDo($new_ToDo, $new_Date, $new_AlarmDate, $new_AlarmTime, $new_importance);
            list1.push(newToDo);
            
            $new_Div.append($new_Checkbox, $new_importance, $new_Date, $new_ToDo, $new_AlarmDate, $new_AlarmTime, $new_DeleteButton);
            $(".List1").append($new_Div);
            $(".todo-input input").val("");
        }
    }
    
    var ToString = function(){
       // to string method for one todo in an array
        var res;
        var res = task.toString();
        return res;
     
        
        
    }
    
     
    function compare(a,b) {
        if (a.task < b.task)
            return -1;
        if (a.task > b.task)
            return 1;
            return 0;
}

    var sort = function(){      
        var $new_Div;
        
        $new_Div = $("<div>").addClass("SL1"); 
        var $new_title = $("<h4>").text("Sorted List");
        $new_Div.append($new_title);
    
        var x = list1.sort(compare);
        var arraylength = x.length;
        for (var i = 0; i < arraylength; i++){
       
            $new_Div.append(x[i].ToString());
            }
     
        $(".sortedlist").append($new_Div);
    
    }
        
        
    
    
    $(".todo-input button").on("click", function(event) {
       addToDoItem();
    });
    
    $(".todo-input input").on("keypress", function (event) { 
        if(event.keyCode === 13){
            addToDoItem();
        }
    });
    
  
    
    $("#Sort").on("click", function(event) {
           sort();
    });
    
    /*
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
    */
    
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
    
}

$(document).ready(main);