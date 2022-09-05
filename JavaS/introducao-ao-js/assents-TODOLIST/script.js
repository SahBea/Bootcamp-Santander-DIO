const form = document.getElementById('task-form');
const talkList =document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputfield = document.getElementById('task-input');
    addTask(inputfield.value);
    form.requestFullscreen();
}

function addTask(description){
    const taskContainer =document.createElement('div');
    const newTask =document.createElement('input');
    const taskLabel =document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name','description');
    newTask.setAttribute('id','description');

    taskLabel.setAttribute('for','description');
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    talkList.appendChild(taskContainer);
}