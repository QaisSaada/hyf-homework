import React from 'react'



export default function ToDo({todo, chkTodo}) {
  function handleTodoClick() {
  chkTodo(todo.id)
  }
  return (
    <div>
    <label> 
    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />    
      {todo.name}
    </label>
    </div>
  )
}
