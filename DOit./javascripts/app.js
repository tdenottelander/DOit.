var main = function () {
    "use strict";
    
    var addCommentFromInputBox = function(){
        var $new_comment;
        if ($(".comment-input input").val() !== ""){
            $new_comment = $("<p>").text($(".comment-input input").val()).hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    }
    
    $(".comment-input button").on("click", function(event) {
        addCommentFromInputBox();
    });
    
    $(".comment-input input").on("keypress", function (event) { 
        if(event.keyCode === 13){
            addCommentFromInputBox();
        }
    });
    
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
}

$(document).ready(main);