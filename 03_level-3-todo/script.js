let taskDB = [];
let savedData = localStorage.getItem("myLocalStorageDB");

if (savedData !== null) {
    let workingArray = JSON.parse(savedData);
    taskDB = workingArray;
}

taskDB.forEach(function (item) {
    let restoredTask = document.createElement("li");
    restoredTask.textContent = item + " (Delete Task)";
    restoredTask.addEventListener("click", function () {
        this.remove();
        let positionForEach = taskDB.indexOf(item);
        taskDB.splice(positionForEach, 1);
        let textVersion = JSON.stringify(taskDB);
        localStorage.setItem("myLocalStorageDB", textVersion);
    });
    let list = document.getElementById("task-list");
    list.appendChild(restoredTask);
});

let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");


addBtn.addEventListener("click", function () {
    // alert("Task Added")
    let newTask = document.createElement("li");
    newTask.textContent = taskInput.value + " " + "(Delete Task)";
    taskDB.push(taskInput.value);
    let textVersion = JSON.stringify(taskDB);
    localStorage.setItem("myLocalStorageDB", textVersion);
    let newTaskBullet = document.getElementById("task-list");
    newTask.addEventListener("click", function () {
        this.remove();
        let position = taskDB.indexOf(taskInput.value);
        taskDB.splice(position, 1);
        let textVersion = JSON.stringify(taskDB);
        localStorage.setItem("myLocalStorageDB", textVersion);
    });
    newTaskBullet.appendChild(newTask);
    taskInput.value = "";
});