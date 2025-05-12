 //function to clear all task items
 function clearAllTasks() {
    let taskManager = document.getElementById('taskManager');
    taskManager.innerHTML = ""; // This will remove all list items from the task list
}

//event listener for button click to clear all task items
 document.getElementById('clearAllButton').addEventListener('click', clearAllTasks);

//DOM fully loaded before adding listeners
document.addEventListener("DOMContentLoaded", function() {
    
    //event listener for button click
    document.getElementById('addTaskButton').addEventListener('click', addNewTask);

    //function to add a new task to the list
    function addNewTask() {
        let taskInput = document.getElementById('taskInput'); // Get the input element by the updated ID
        let taskText = taskInput.value.trim(); // Get the input value and remove extra spaces

        //if input is empty, do nothing
        if (taskText === "") {
            return; // Don't do anything if the input is empty
        }
        
        //create new list item (li)
        let li = document.createElement("li");
        li.textContent = taskText; // Set the text of the li element

         //create 'X' button
         let deleteButton = document.createElement("button");
         deleteButton.textContent = "x";
         deleteButton.classList.add("deleteButton"); // Add a class for styling
 
         //add event listener for 'x' button to remove task item
         deleteButton.addEventListener('click', function() {
             li.remove(); // Remove the list item when the 'X' is clicked
         });
 
         //append 'x' button to the list item
         li.appendChild(deleteButton);

        //add an event listener to toggle 'complete' class when item is selected
        li.onclick = function () {
            this.classList.toggle("complete"); // Toggle 'complete' and strikethrough
        };

        //append new task to task manager list
        document.getElementById("taskManager").appendChild(li);

        //clear input field after adding the task
        taskInput.value = "";
    }
});









