const input = document.getElementById('task')
const btn = document.querySelector('#btn')
const task_list = document.querySelector('ul')

// load data from the storage of browser 
const tasks = JSON.parse(localStorage.getItem('todo')) || []

const taskSave = () => {
    localStorage.setItem('todo', JSON.stringify(tasks))
}

const showTask = () => {
    task_list.innerHTML = ''
    tasks.forEach((item, i) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <strong>${i+1}.&nbsp;${item}</strong>
        <button class="del-btn" data-index="${i}">Delete</button>
        `
        task_list.appendChild(li)
    })
    // delete task 
    const deleteBtn = document.querySelectorAll('.del-btn')
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dataIndex = e.target.getAttribute('data-index')
            tasks.splice(dataIndex, 1)
            taskSave()
            showTask()
        })
    })
}



// add task
btn.addEventListener('click', () => {
    const task_content = input.value
    if (task_content != '') {
        tasks.push(task_content)
        taskSave()
        showTask()
        input.value = ''
    }
})

showTask()