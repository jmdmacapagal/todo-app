const filters = {
    searchText: ''
}


function main() {
    renderTodo(todos)

    document.querySelector('#addForm').addEventListener('submit', (e) => {
        e.preventDefault()
        todos.push({
            id: generateRandomId(),
            title: e.target.addTodo.value,
            completed: false,
            created: ''
        })
        saveTodo()
        renderTodo(todos, filters)
    })

    document.querySelector('#searchTodo').addEventListener('input', (e) => {
        filters.searchText = e.target.value
        renderTodo(todos, filters)
    })
}

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

function removeTodo(id) {
    const index = todos.findIndex(todo => {
        return todo.id === id
    })

    if (index > -1) {
        console.log(index)
        todos.splice(index, 1)
    }
}

function renderTodo(todos) {
    const filteredTodo = todos.filter(todo => {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //populate todoDisplay
    const todoDisplay = document.querySelector('#todoDisplay')
    todoDisplay.innerHTML = ''

    todoDisplay.appendChild(generateHeader(filteredTodo))

    filteredTodo.forEach(todo => {
        todoDisplay.appendChild(renderTodoList(todo))
    })
}

function renderTodoList(todo) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const a = document.createElement('a')
    const span = document.createElement('span')
    const img = document.createElement('img')
    ul.appendChild(li)
    a.textContent = todo.title
    li.appendChild(a)

    img.setAttribute('src', './img/delete.png')
    img.setAttribute('class', 'deleteImg')
    img.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTodo(todos, filters)
    })
    span.appendChild(img)
    li.appendChild(span)
    return ul
}

function generateHeader(todos) {
    const unfinishedTodo = todos.filter(todo => {
        return !todo.completed
    })
    const h3 = document.createElement('h3')
    h3.textContent = `You have ${unfinishedTodo.length} unfinished todo/s`
    return h3
}

function generateRandomId() {
    let random = Math.floor(Math.random() * 9999999999999)
    return random
}