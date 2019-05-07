let todos = localSotrageData()

renderTodo(todos)

document.querySelector('#addForm').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push(e.target.addTodo.value)
    saveTodo()
    renderTodo(todos)
})