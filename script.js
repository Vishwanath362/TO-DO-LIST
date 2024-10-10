let task_enter = document.getElementById("taskInput");
let checkbox;
task_enter.addEventListener("keydown", function(event) {
    const input = document.getElementById('taskInput');
    if (event.key === "Enter") {
        const value = input.value.trim(); 
        if (value !== "") {
            let addingtasks = document.getElementById("tasks");
            let newelement = document.createElement('li');
            checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            newelement.appendChild(checkbox);
            let taskText = document.createTextNode(" " + value);
            newelement.appendChild(taskText);
            addingtasks.appendChild(newelement);
            input.value = '';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    addingtasks.removeChild(newelement); // Remove the list item directly
                }
            });
        }
    }
});


