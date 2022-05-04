import React from 'react'
import ToDo from "./ToDo"

export default function ToDoList({todos, chkTodo}) {
  return (
    todos.map(todo => {
        return <ToDo key={todo.id} todo={todo} chkTodo={chkTodo} />
    }
    )
  )
}
