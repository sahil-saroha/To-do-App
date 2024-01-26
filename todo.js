let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let inputTask = document.querySelector("input");

function addTask() {
    if (inputTask.value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.innerText = inputTask.value;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete");

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        inputTask.value = "";
    }
}

addTaskBtn.addEventListener("click", addTask);

inputTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
