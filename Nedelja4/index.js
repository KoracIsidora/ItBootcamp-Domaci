const addTaskButton = document.querySelector('#btn-add');
const taskListContainer = document.querySelector("#tasks-container");
const textBoxTitle = document.querySelector('#txt-title');
const removeSelectedButton = document.querySelector("#rmv-selected-btn");
const invertSelected = document.querySelector("#btn-invert");

console.log(taskListContainer);
console.log(addTaskButton);

console.log(addTaskButton.parentElement);
console.log(addTaskButton.parentNode);

addTaskButton.addEventListener('click', buttonAddCLick);
textBoxTitle.addEventListener('keyup', txtKeyUp);
removeSelectedButton.addEventListener('click', removeSelected);
invertSelected.addEventListener('click', invertSelectedFunction);


function buttonAddCLick(e) {
    console.log(e);
    console.log(e.target);
    addItem();
}

function txtKeyUp(e) {
    console.log(e);
    if (e.keyCode == 13) {
        addItem();
    }
}

function addItem() {

    let txtBox = document.querySelector('#txt-title');

    let text = txtBox.value;
    if (text.trim() == "") {
        alert('Task title can not be empty');
        return;
    }

    let itemContainer = document.createElement("div");
    itemContainer.className = 'task-item';
    let itemText = document.createElement('p');
    itemText.innerHTML = text;
    itemText.className = 'task-title';
    console.log(itemText);

    let priority = document.querySelector('#select-list');
    itemText.innerHTML = text + " " + priority.value;

    let checkContainer = document.createElement('div');
    checkContainer.className = 'task-check';
    let removeBtn = document.createElement('button');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask);
    removeBtn.innerHTML = 'X';

    let chkDone = document.createElement('input');
    chkDone.type = 'checkbox';
    chkDone.className = 'chk-state';
    chkDone.value = 'done';
    chkDone.addEventListener('change', handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);

    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    itemContainer.style.textDecoration = 'line-through';
    taskListContainer.appendChild(itemContainer);

}

function handleCheckChange(e) {
    console.log(e);
    let chkBox = e.target;
    let checkContainer = chkBox.parentElement;
    let itemContainer = checkContainer.parentElement;

    if (chkBox.checked) {
        itemContainer.children[0].style.textDecoration = 'line-through';
    } else {
        itemContainer.children[0].style.textDecoration = 'none';
    }
   
}

function removeTask(e) {
    console.log(e);
    console.log(e.target);
    if (!confirm('Are you sure?')) {
        return;
    }

    let buttonToRemove = e.target;
    let divToRemove = buttonToRemove.parentElement.parentElement
    console.log(divToRemove);
    divToRemove.remove();
}


function removeSelected() {
    if (!confirm('Are you sure?')) {
        return;
    }

    let rmv = document.querySelectorAll(".chk-state");

    for (let i = 0; i < rmv.length; i++) {
        if (rmv[i].checked) {
            rmv[i].parentElement.parentElement.remove();
        }
    }
}


function invertSelectedFunction() {
    if (!confirm('Are you sure?')) {
        return;
    }

    let invert = document.querySelectorAll(".chk-state");

    for (let i = 0; i < invert.length; i++) {
        if (invert[i].checked) {
            invert[i].checked = false;
        } else {
            invert[i].checked = true;
        }
    }

}









