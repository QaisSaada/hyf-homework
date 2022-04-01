import React, {useState} from 'react';
import ToDoList from './ToDoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Get out of bed",
      deadline: 'Wed Sep 13 2017'
      
    },
    {
      id: 2,
      description: "Brush teeth",
      deadline: 'Thu Sep 14 2017'
      

    },
    {
      id: 3,
      description: "Eat breakfast",
      deadline: 'Fri Sep 15 2017'
      

    },
  ])
  return (
    <>
    <ToDoList todos = {todos} /> 
    </>
  )
}

export default App;