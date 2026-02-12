// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter is pressed
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Main function
function addTask() {

    const taskText = taskInput.value.trim();

    // Check if empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Add delete button to task
    li.appendChild(deleteBtn);

    // Add task to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
