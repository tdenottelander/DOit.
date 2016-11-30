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
        this.checkedOff = false;
        
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
        if ($(".todo-input input").val() !== ""){
            //We still need to check if alarm is before date of ToDo.
            var task = $(".todo-input input[title=textInput]").val();
            var date = $(".todo-input input[title=dateInput]").val();
            var alarmDate = $(".todo-input input[title=alarmInputDate]").val();
            var alarmTime = $(".todo-input input[title=alarmInputTime]").val();
            var importance = $(".todo-input select").val();
            
            var new_Div = $("<div>").addClass("ToDo");
            var new_Checkbox = $("<input type=checkbox>");
            var new_deleteButton = $('<img id=deletebutton src="Images/icon_delete.png" />');
            new_deleteButton.on("click", function(event){
                new_Div.remove();
            })
            
            var newToDo = new toDo(task, date, alarmDate, alarmTime, importance);
            new_Checkbox.on("click", function(event){
                if(newToDo.checkedOff === true){
                    newToDo.checkedOff = false;
                    window.alert(newToDo.task + "checkedoff set to false");
                } else if (newToDo.checkedOff === false){
                    newToDo.checkedOff = true;
                    window.alert(newToDo.task + "checkoff set to true");
                    /*var achievementImage = $('<img id=achievementImage src="images/Snap.jpg" height=100/>');
                    $new_Div.append(achievementImage);
                    delay(function(){achievementImage.remove();}, 500);
                    */
                }
            })
            var toDoString = ToDoToString(newToDo);
            new_Div.append(new_Checkbox, toDoString, new_deleteButton);
            list1.push(new_Div);
            $(".List1").append(new_Div);
                    
            $(".todo-input input").val("");
        }
    }
    
    var ToDoToString = function(ToDo){
        var new_importance = ToDo.importance + " | ";
        var new_date = ToDo.date.toString() + " | ";
        var new_task = ToDo.task + " | ";
        var new_alarmDate = ToDo.alarmDate;
        var new_alarmTime = ToDo.alarmTime + " | ";

        var new_ToDo = new_importance + new_date + new_task + new_alarmDate + new_alarmTime;

        return new_ToDo;
    }
    
    /*
    var ToString = function(){
       // to string method for one todo in an array
        var res;
        var res = task.toString();
        return res;
        
    }
    */
    
     
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