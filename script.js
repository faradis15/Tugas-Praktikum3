const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('newTask');
const ubahWarnaBtn = document.getElementById('ubahWarna');
const ubahUkuranFont = document.getElementById('ubahUkuranFont');
const ubahModeBtn = document.getElementById('ubahMode');
const ubahGayaFontBtn = document.getElementById('ubahGayaFont');
const paragraf = document.querySelector('p');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskInputValue = taskInput.value.trim();

    if (taskInputValue === '') {
        alert('Please enter a task.');
        return;
    }

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
let isDarkMode = false;
let fontStyle = 'serif';
const warna = ['lightblue', 'orange', 'chocolate', 'grey', 'pink'];

ubahWarnaBtn.addEventListener('click', () => {
  const warnaAcak = warna[Math.floor(Math.random() * warna.length)];
  document.body.style.backgroundColor = warnaAcak;
});

ubahUkuranFont.addEventListener('input', () => {
  document.body.style.fontSize = ubahUkuranFont.value + 'px';
});

ubahModeBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
  document.body.style.color = isDarkMode ? 'white' : 'black';

  judul.style.color = isDarkMode ? 'white' : 'black';
  paragraf.style.color = isDarkMode ? 'white' : 'black';
});

ubahGayaFontBtn.addEventListener('click', () => {
  fontStyle = fontStyle === 'serif' ? 'sans-serif' : 'serif';
  document.body.style.fontFamily = fontStyle;
});
