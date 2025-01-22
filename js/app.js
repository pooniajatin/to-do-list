const taskInput = document.querySelector('input[name="task"]');
const statusInput = document.querySelector('input[name="Task Status"]');
const addButton = document.querySelector('button');

addButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    const task = taskInput.value.trim();
    const status = statusInput.value.trim() || 'Unfinished';

    if (task === '') {
        alert('Please enter a task!');
        return;
    }
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push({ task, status });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';
    statusInput.value = '';

    window.location.href = './pages/view.html';
});
