const todos = [
    'Study JS',
    'Study REACT',
    'Sleep'
]

renderTodo(todos)

function renderTodo(todos) {
    const todoDisplay = document.querySelector('#todoDisplay')
    todoDisplay.innerHTML = ''
    
    todos.forEach(function(todo) {
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

document.querySelector('#addForm').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push(e.target.addTodo.value)
    renderTodo(todos)
})