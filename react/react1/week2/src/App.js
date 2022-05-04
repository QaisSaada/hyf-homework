import React, {useState, useRef, useEffect} from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';
import Counter from "./Counter.js"


const storageKey = "todoApp.todos" 

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(storageKey))
  if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
  localStorage.setItem(storageKey, JSON.stringify(todos))
  }, [todos])

  function chkTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    //I found this trick on stack and youtube, but I don't completly understand this .complete. how does it work it doesnt seems to be a js method
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  function handelAddToDo(e) {
  const name = todoNameRef.current.value
  if (name === "") return
  setTodos( prevTodos => {
    return [...prevTodos, {id: uuidv4(), name: name, complete: false}
    ]})
  todoNameRef.current.value = null
  }

  function handelClearToDo(e) {
    const clearedTodos = todos.filter(todo => !todo.complete)
    setTodos(clearedTodos)
  }


  return (
    <>
    <dev>
    <Counter /> 
    </dev>
    
    <ToDoList todos = {todos} chkTodo={chkTodo} />
    <input ref={todoNameRef} type= "text"/> 
    <button onClick={handelAddToDo}> Add ToDo</button>
    <button onClick={handelClearToDo}>Clear done to-dos </button>
    
    <div> {todos.filter(todo => !todo.complete).length} Things left to do</div>
    </>
  )
}

export default App;
