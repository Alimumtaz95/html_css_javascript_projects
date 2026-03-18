let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");


addBtn.addEventListener("click", function () {
    // alert("Task Added")
    let newTask = document.createElement("li");
    newTask.textContent = taskInput.value + " " + "(Delete Task)";
    let newTaskBullet = document.getElementById("task-list");
    newTask.addEventListener("click", function () {
        this.remove();
    });
    newTaskBullet.appendChild(newTask);
    taskInput.value = "";
});