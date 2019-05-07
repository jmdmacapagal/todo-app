let todos = localSotrageData()

renderTodo(todos)

document.querySelector('#addForm').addEventListener('submit', function(e) {
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

document.querySelector('#searchTodo').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodo(todos, filters)
})