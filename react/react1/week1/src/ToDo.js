import React from 'react'

export default function ToDo({todo}) {
  return (
    <div>
    <label>
      {todo.description}
    </label>
    
    <label>
      {todo.deadline}
    </label>
    </div>
  )
}

