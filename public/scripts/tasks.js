$(async () => {
    try {
        const res = await fetch('/api/tasks/')
        const tasks = await res.json()
        tasks? render_tasks(tasks): render_error()
    } catch (error) {
        console.error(error);    
    }
});


function render_error(){
    $('#content').append(`<p>sorry nothing to show hear</p>`)
}

function render_tasks(tasks){
    tasks.forEach(task => {
        let note = `
        <li>
            ${task.note}
        </li>
        `
        $('#content').append(note);
    });
}