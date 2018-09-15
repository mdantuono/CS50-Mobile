const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const check = document.getElementsByClassName('check')

var count = 0
itemCountSpan.innerHTML = count

var uncheckedCount = 0
uncheckedCountSpan.innerHTML = uncheckedCount

function newTodo() {
  count++
  itemCountSpan.innerHTML = count
  uncheckedCount++
  uncheckedCountSpan.innerHTML = uncheckedCount

  // Input for new todo
  var toDo = prompt("New To-Do")

  // Create checkbox
  const checkBox = list.appendChild(document.createElement('input'))
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('class', 'check')

  // Create list element
  const listElement = list.appendChild(document.createElement('li'))
  listElement.setAttribute('class', 'todo-element')


  // Assign text to todo
  listElement.innerHTML = toDo

  // Create delete button
  // const deleteButton = listElement.appendChild(document.createElement('button'))
  // deleteButton.setAttribute('class', 'button')
  // deleteButton.innerHTML = "x"
  // deleteButton.setAttribute('onClick', 'deleteTodo()')
}

if (checkBox.checked == true) {
  uncheckedCount--
  uncheckedCountSpan.innerHTML = uncheckedCount
}

// function deleteTodo() {
//   deleteButton.parentNode.parentNode.removeChild()
// }
