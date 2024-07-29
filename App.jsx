import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todo } from './components/Todo'

function App() {    
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/todos")
  .then(async function(res)
{
  const json = await res.json();
  setTodos(json.todos)
})
  return (
    <div> 
        <Createtodo></Createtodo>
        <Todo todos = {todos}></Todo>
    </div>
  )
}

export default App
