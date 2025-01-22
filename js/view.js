document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((taskObj, index) => {
        const row = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = taskObj.task;

        const statusCell = document.createElement('td');
        statusCell.textContent = taskObj.status;

        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete task';

        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1); 
            localStorage.setItem('tasks', JSON.stringify(tasks)); 
            location.reload(); 
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(taskCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell);
        table.appendChild(row);
    });
});