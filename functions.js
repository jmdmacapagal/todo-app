function localSotrageData(todos) {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return todos = JSON.parse(todoJSON)
    }
}

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function renderTodo(todos) {
    const todoDisplay = document.querySelector('#todoDisplay')
    todoDisplay.innerHTML = ''

    todos.forEach(function (todo) {
        todoDisplay.appendChild(renderTodoList(todo))
        console.log(todo)
    })

}

function renderTodoList(todo) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const a = document.createElement('a')
    ul.appendChild(li)
    a.textContent = todo
    li.appendChild(a)
    return ul
}