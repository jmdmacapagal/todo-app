const todos = [
    'Study JS',
    'Study REACT',
    'Sleep'
]

document.querySelector('#addForm').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push(e.target.addTodo.value)
})