document.getElementById('add-task').addEventListener('click', addTask);

let editMode = false;
let taskToEdit = null;

function addTask() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;

    // Check if inputs are empty
    if (title === "" || desc === "") {
        alert("Please fill in both fields.");
        return;
    }

    if (editMode) {
        // Edit the task
        taskToEdit.querySelector('.task-title').textContent = title;
        taskToEdit.querySelector('.task-desc').textContent = desc;
        editMode = false;
        taskToEdit = null;
        document.getElementById('add-task').textContent = "Add Task";
    } else {
        // Create a new task item
        const taskItem = document.createElement('li');
        
        // Create task info div (title + description)
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');

        const taskTitle = document.createElement('span');
        taskTitle.textContent = title;
        taskTitle.classList.add('task-title');

        const taskDesc = document.createElement('span');
        taskDesc.textContent = desc;
        taskDesc.classList.add('task-desc');

        taskInfo.appendChild(taskTitle);
        taskInfo.appendChild(taskDesc);

        // Create Edit and Delete buttons
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', function () {
            editTask(taskItem, title, desc);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
        });

        // Append task info and buttons to task item
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);

        // Append task item to the list
        document.getElementById('task-list').appendChild(taskItem);
    }

    // Clear inputs
    document.getElementById('task-title').value = "";
    document.getElementById('task-desc').value = "";
}

function editTask(taskItem, title, desc) {
    // Set the input fields with the task's current values
    document.getElementById('task-title').value = title;
    document.getElementById('task-desc').value = desc;

    // Set the button text to "Edit Task"
    document.getElementById('add-task').textContent = "Edit Task";

    // Set edit mode and the current task to edit
    editMode = true;
    taskToEdit = taskItem;
}
