const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('newTask');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskInputValue = taskInput.value.trim(); // Ambil nilai dari input dan hapus spasi di awal/akhir

    if (taskInputValue === '') {
        alert('Please enter a task.');
        return;
    }

    // Membuat elemen baris tabel (tr) dan kolom (td)
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${taskInputValue}</td>
        <td class="task-buttons">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="close" onclick="deleteTask(this)">Delete</button>
        </td>
    `;

    taskList.appendChild(tr);

    taskInput.value = '';
}

function deleteTask(element) {
    const tr = element.parentElement.parentElement;
    tr.remove();
}

function editTask(element) {
    const taskTd = element.parentElement.previousElementSibling;
    const newTask = prompt('Edit your task:', taskTd.textContent);

    if (newTask !== null && newTask.trim() !== '') {
        taskTd.textContent = newTask;
    }
}