//display the current date on the page
//find the date element
  var findDateEl = $( "#currentDay" );
//find correct date in the requested format
  var currentDate = moment().format('dddd [,] MMMM Do')
//append current date to the page id
  $("#currentDay").append(currentDate);



//conditional highlight of divs

// var row1Time = 9;
// var row2Time = 10;
// var row3Time = 11;
// var row4Time = 12;
// var row5Time = 13;
// var row6Time = 14;
// var row7Time = 15;
// var row8Time = 16;

// var currentTimeInHours = moment().format("H")
// console.log(currentTimeInHours);
// if(currentTimeInHours < row1Time || currentTimeInHours < row2Time || currentTimeInHours < row3Time || currentTimeInHours < row4Time || currentTimeInHours < row5Time || currentTimeInHours < row6Time || currentTimeInHours < row7Time || currentTimeInHours < row8Time  ) {
//     console.log("time is in future");
//     $("#row1col2").addClass("future");
// }
// else if (currentTimeInHours = row1Time) {
//     console.log("current time");
//     $("#row1col2").addClass("present");

// }
// else if (currentTimeInHours > row1Time) {
//     console.log("time is in the past")
//     $("#row1col2").addClass("past")
// }




//Type in task and save task when clicking outside of the task

// var tasks = {}
    // timeinDay : [],
    // taskDetail : []


// var saveTasks = function() {
//     console.log(tasks);
//     var inputValue = tasks.inputValue
    
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };


//   function getInputValue(){
//     // Selecting the input element and get its value 
//     var inputVal = document.getElementById(".row1col2").value;
    
//     // Displaying the value
//     alert(inputVal);
// }



// $("#btn-row-1").click(function(){
//     var values = [];
//     var str = $("#row1col2")
//     .val()
//     .text();
//     console.log(str);
//     alert(str);
// });

// tasks = {

// }

// var inputValue = $("#row1col2input");
// var valuesValue = inputValue.val();
// valuesValue;
// console.log(valuesValue);




// var inputDataArray = []

// inputDataArray.push(inputValue)

// function pushData () {
//     //get value from the inout text
//     var in
// }

// $(document").on("click", function(){
//     // var inputValue = document.getElementById("row1col2").value
//     console.log("working");
   
//     var inputValue = $("#row1col2input");
//     var valuesValue = inputValue.val();
//     valuesValue;

    // // .text()
    // .val();

    // console.log(valuesValue);
    // .trim();

    // var text = $(this)
    // .find("input")
    // .text()
    // .trim()


//     var tasks = {}

//     // console.log(text);
//         // task : getElementById('row1col2'), 
//         // id:  getElementById('id')
    

//         // Put the object into the storage

//     // localStorage.setItem('tasks', JSON.stringify(tasks));

//     // localStorage.setItem('inputValue', JSON.stringify(inputValue));

// })

//   $("#row1col2").click(function() {
//       var inputValue = $(this)
//     //   .find("input")
//       .text()
//       .trim()
//       .inputValue();

//       console.log(inputValue);

//       localStorage.setItem("tasks", JSON.stringify(tasks));

//   })


//   var tasks = {};

//   var createTask = function(taskText, taskDate, taskList) {
//     // create elements that make up a task item
//     // var taskLi = $("<li>").addClass("list-group-item");
//     // var taskSpan = $("<span>")
//     //   .addClass("badge badge-primary badge-pill")
//     //   .text(taskDate);
//     // var taskP = $("<p>")
//     //   .addClass("m-1")
//     //   .text(taskText);
  
//     // // append span and p element to parent li
//     // taskLi.append(taskSpan, taskP);
  
//     // //CHECK DUE DATE
//     // auditTask(taskLi);
  
  
//     // append to ul list on the page
//     $("#row1col2").append(tasks);
//   };








      var renderOneTodo = function(toDoTask1) {
        var toDoTask1 = $("#row1col2input")
        .val()
        .trim();
        // Create a new variable that will hold a "<p>" tag.
        // Then give it an ID in the following form:
        // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
        // Then set the to-do "value" as text to this <p> element.

        var toDoItem = $("<input>");
        console.log(toDoItem)
        toDoItem.attr("id", "item-" + toDoCount);
        toDoItem.text(toDoTask1);

        // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
        // Give your button a data attribute called data-to-do and a class called "checkbox".
        // Lastly add a checkmark inside.
        //var toDoClose = $("<button>");
        // toDoClose.attr("data-to-do", toDoCount);
        // toDoClose.addClass("checkbox");
        // toDoClose.text("✓");
        // Append the button to the to do item
        // toDoItem = toDoItem.prepend(toDoClose);
        // Add the button and to do item to the to-dos div
        $("#row1col2input").append(toDoTask1);
        // Clear the textbox when done
        // $("#row1col2input").val("");
      }

      var todosStr = localStorage.getItem("todoList") || ""  ;
      var todos = todosStr.split(" ");
      for (var i = 0; i < todos.length; i++) {
          var currentTodo = todos[i];
          if (currentTodo != "") {
              renderOneTodo(currentTodo);
          }
      }



      var toDoCount = 0;
      var todos = [];

  // Click on ROW 1 button and save data in localStorage

        $("#row-1").on("click", "#row1col3btn",  function(event) {
          event.preventDefault();
          // Get the to-do "value" from the textbox and store it a variable          
          var toDoTask1 = $("#row1col2input")
            .val()
            .trim()
  
          console.log(toDoTask1);  
          todos.push(toDoTask1);
  
  
  
          localStorage.setItem("todoList", JSON.stringify(todos));
          renderOneTodo(toDoTask1);
          // Add to the toDoCount
          toDoCount++;
        });


  // Click on ROW 2 button and save data in localStorage

        $("#row-2").on("click", "#row2col3btn", function(event) {
            event.preventDefault();
            // Get the to-do "value" from the textbox and store it a variable
            var toDoTask2 = $("#row2col2input")
              .val()
              .trim();
    
            console.log(toDoTask2);  
            todos.push(toDoTask2);
    
    
            localStorage.setItem("todoList", JSON.stringify(todos));
            renderOneTodo(toDoTask2);
            // Add to the toDoCount
            toDoCount++;
          });    



      // Click on ROW 3 button and save data in localStorage

      $("#row-3").on("click", "#row3col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask3 = $("#row3col2input")
          .val()
          .trim();

        console.log(toDoTask3);  
        todos.push(toDoTask3);


        localStorage.setItem("todoList", JSON.stringify(todos));
        renderOneTodo(toDoTask3);
        // Add to the toDoCount
        toDoCount++;
      });  
      
      
    
      // Click on ROW 4 button and save data in localStorage


      $("#row-4").on("click", "#row4col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask4 = $("#row4col2input")
          .val()
          .trim();

        console.log(toDoTask4);  
        todos.push(toDoTask4);


        localStorage.setItem("todoList", JSON.stringify(todos));
        renderOneTodo(toDoTask4);
        // Add to the toDoCount
        toDoCount++;
      });  


    // Click on ROW 5 button and save data in localStorage

      $("#row-5").on("click", "#row5col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask5 = $("#row5col2input")
          .val()
          .trim();

        console.log(toDoTask5);  
        todos.push(toDoTask5);


        localStorage.setItem("todoList", JSON.stringify(todos));
        renderOneTodo(toDoTask5);
        // Add to the toDoCount
        toDoCount++;
      });  


    
    // Click on ROW 6 button and save data in localStorage
    
      $("#row-6").on("click", "#row6col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask6 = $("#row6col2input")
          .val()
          .trim();

        console.log(toDoTask6);  
        todos.push(toDoTask6);


        localStorage.setItem("todoList", JSON.stringify(todos));
        renderOneTodo(toDoTask6);
        // Add to the toDoCount
        toDoCount++;
      });  


    
    // Click on ROW 7 button and save data in localStorage
    
      $("#row-7").on("click", "#row7col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask7 = $("#row7col2input")
          .val()
          .trim();

        console.log(toDoTask7);  
        todos.push(toDoTask7);


        localStorage.setItem("todoList", JSON.stringify(todos));
        renderOneTodo(toDoTask7);
        // Add to the toDoCount
        toDoCount++;
      });  


    // Click on ROW 8 button and save data in localStorage
    
        $("#row-8").on("click", "#row8col3btn", function(event) {
            event.preventDefault();
            // Get the to-do "value" from the textbox and store it a variable
            var toDoTask8 = $("#row8col2input")
              .val()
              .trim();
    
            console.log(toDoTask8);  
            todos.push(toDoTask8);
    
    
            localStorage.setItem("todoList", JSON.stringify(todos));
            renderOneTodo(toDoTask8);
            // Add to the toDoCount
            toDoCount++;
          });  

    // Click on ROW 9 button and save data in localStorage
    
    $("#row-9").on("click", "#row9col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask9 = $("#row9col2input")
          .val()
          .trim();

        console.log(toDoTask9);  
        todos.push(toDoTask9);


        localStorage.setItem("todoList", JSON.stringify(todos));
        renderOneTodo(toDoTask9);
        // Add to the toDoCount
        toDoCount++;
      });  







          

















    // //   for (var i = 0; i < localStorage.length ; i++ ) {
    // //     //   const key = localStorage.key[i];
    // //       var key = localStorage.getItem("key");
          
    // //       console.log(key);


    // //     //   var outPutData = localStorage.getItem([i])
    // //     //   console.log(outPut);
    // //   }

    // var key = localStorage.getItem("key");
    // key = JSON.parse(key)
          
    // console.log(key);
