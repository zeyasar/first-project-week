let newTask = document.querySelector('#new-task');
let addButton = document.querySelector('.add_area');
let taskList = document.querySelector('.ul_items');
let deleteAll = document.querySelector('.deleteAll_item');



addButton.addEventListener('click', addNewItem);

function addNewItem() {
    if (newTask.value === '') {
        alert('Add new item!')
        return;
    }
    let li = document.createElement('li');
    li.className = 'list_items'
    li.appendChild(document.createTextNode(newTask.value));
    let a = document.createElement('a');
    a.className = 'delete_item'
    a.innerHTML = '❌';
    a.setAttribute('href', '#');
    li.appendChild(a);
    taskList.appendChild(li);
    newTask.value = ''; 

}


taskList.addEventListener('click', deleteItem);

function deleteItem () {
    let oneDelete = document.querySelector('.delete_item');
    oneDelete.parentElement.remove();
}


deleteAll.addEventListener('click', deleteAllItems);

function deleteAllItems () {
    if (taskList.innerHTML == '') {
       return; 
    }else if (confirm('Are you sure?')) {
        taskList.innerHTML = '';
    }
    
}

