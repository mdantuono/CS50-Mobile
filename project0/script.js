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

var unchecked = 0
uncheckedCountSpan.innerHTML = unchecked

function newTodo() {
  count++
  itemCountSpan.innerHTML = count
  unchecked++
  uncheckedCountSpan.innerHTML = unchecked

  var toDo = prompt("New To-Do")
  const checkBox = list.appendChild(document.createElement('input'))
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('class', 'check')
  const listElement = list.appendChild(document.createElement('li'))
  listElement.innerHTML = toDo;

  // const deleteButton = listElement.appendChild(document.createElement('button'))
  // deleteButton.setAttribute('class', 'button')
  // deleteButton.setAttribute('onClick', 'deleteTodo()')
}

if (check.checked == true) {
  unchecked--
  uncheckedCountSpan.innerHTML = unchecked
}

// function deleteTodo() {
//
// }
