let todos = localSotrageData()

renderTodo(todos)

document.querySelector('#addForm').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        title: e.target.addTodo.value,
        completed: false,
        created: ''
    })
    saveTodo()
    renderTodo(todos)
})