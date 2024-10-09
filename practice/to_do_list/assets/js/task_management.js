const task_button = document.querySelector("#add_task")

task_button.addEventListener("click", function() {
    let current_task = document.getElementById("current_task").value.trim()

    if(current_task == "") 
        alert("enter a task")
    else {
        let task_list = document.getElementById("task_list")

        let task = document.createElement("li")
        task.innerHTML = current_task

        task_list.append(task)
    }
})