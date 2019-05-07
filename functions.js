function localSotrageData(todos) {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return todos = JSON.parse(todoJSON)
    } else {
        return []
    }
}

function saveTodo() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function renderTodo(todos) {
    const todoDisplay = document.querySelector('#todoDisplay')
    todoDisplay.innerHTML = ''

    todoDisplay.appendChild(generateHeader(todos))

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
    a.textContent = todo.title
    li.appendChild(a)
    return ul
}

function generateHeader(todos) {
    const unfinishedTodo = todos.filter(function (todo) {
        return !todo.completed
    })
    const h3 = document.createElement('h3')
    h3.textContent = `You have ${unfinishedTodo.length} unfinished todo/s`
    return h3
}