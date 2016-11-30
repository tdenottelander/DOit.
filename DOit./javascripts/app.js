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
        window.alert(lists);
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
                    //window.alert(newToDo.task + "checkedoff set to false");
                } else if (newToDo.checkedOff === false){
                    newToDo.checkedOff = true;
                    //window.alert(newToDo.task + "checkoff set to true");
                    /*var achievementImage = $('<img id=achievementImage src="images/Snap.jpg" height=100/>');
                    $new_Div.append(achievementImage);
                    delay(function(){achievementImage.remove();}, 500);
                    */
                }
            })
            var toDoString = ToDoToString(newToDo);
            new_Div.append(new_Checkbox, toDoString, new_deleteButton);
            
            list1.push(newToDo);
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


    function compare(a,b) {
        if (a.task < b.task)
            return -1;
        if (a.task > b.task)
            return 1;
            return 0;
}
    
    function compareOnImp(a,b) {
        if (a.importance < b.importance)
            return -1;
        if (a.importance > b.importance)
            return 1;
            return 0;
}

    var sort = function(){      
        var $new_Div;
        
        $new_Div = $("<div>").addClass("SL1"); 
        var $new_title = $("<h4>").text("Sorted List On Task");
        $new_Div.append($new_title);
         $(".sortedlist").append($new_Div);
    
        var x = list1.sort(compare);
        var arraylength = x.length;
        for (var i = 0; i < arraylength; i++){
               $new_Div = $("<div>").addClass("SL1"); 
          var  $new_Checkbox = $("<input type = checkbox>");
          var  $new_importance = x[i].importance.toString();
          var  $new_Date = " " + x[i].date.toString() + " | ";
          var  $new_ToDo = x[i].task.toString();
          var  $new_AlarmDate = x[i].alarmDate + " ";
          var  $new_AlarmTime = x[i].alarmTime;
          var  $new_DeleteButton = $('<img id=deletebutton src="Images/icon_delete.png" />');
               
                
             $new_Div.append($new_Checkbox, $new_importance, $new_Date, $new_ToDo, $new_AlarmDate, $new_AlarmTime, $new_DeleteButton);
             $new_DeleteButton.on("click", function(event){
                $new_Div.remove();
                
            })
            
              $(".sortedlist").append($new_Div);
            
            }
     
      
    
    }
    
       var sortingOnImportance = function(){      
        var $new_Div;
        
        $new_Div = $("<div>").addClass("SL1"); 
        var $new_title = $("<h4>").text("Sorted List On Importance");
        $new_Div.append($new_title);
         $(".sortedImplist").append($new_Div);
    
        var x = list1.sort(compareOnImp);
        var arraylength = x.length;
        for (var i = 0; i < arraylength; i++){
               $new_Div = $("<div>").addClass("SL1"); 
          var  $new_Checkbox = $("<input type = checkbox>");
          var  $new_importance = x[i].importance.toString() + " | ";
          var  $new_Date = " " + x[i].date.toString() + " | ";
          var  $new_ToDo = x[i].task.toString();
          var  $new_AlarmDate = x[i].alarmDate + " ";
          var  $new_AlarmTime = x[i].alarmTime + " | ";
          var  $new_DeleteButton = $('<img id=deletebutton src="Images/icon_delete.png" />');
                   $new_DeleteButton.on("click", function(event){
                $new_Div.remove();
                
            })
                
             $new_Div.append($new_Checkbox, $new_importance, $new_Date, $new_ToDo, $new_AlarmDate, $new_AlarmTime, $new_DeleteButton);
            
              $(".sortedImplist").append($new_Div);
            
            }
     
      
    
    }

      
      

    
      $("#sorttest").on("click", function(event) {
           if($(".sortertest select").val() == 1)
              sort();
          if($(".sortertest select").val() == 2)
              sortingOnImportance();
           
    });
    
        
   
    
    $(".todo-input button").on("click", function(event) {
       addToDoItem();
    });
    
    $(".todo-input input").on("keypress", function (event) { 
        if(event.keyCode === 13){
            addToDoItem();
        }
    });
    
  
    
 
    
}

$(document).ready(main);