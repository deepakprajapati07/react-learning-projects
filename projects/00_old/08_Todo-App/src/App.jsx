import './styles.css'
import { useEffect, useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('ITEMS')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  })

  const addTodo = (title) => {
    setTodos(
      (currentTodos) => {
        return [
          ...currentTodos, 
          {
            id: crypto.randomUUID(),
            title,
            completed: false
          }
        ]
      })
  }

  const toggleTodo = (id, completed) => {
    setTodos(
      (currentTodos) => {
        return currentTodos.map((todo) => {
          if (todo.id === id) {
            return {...todo, completed}
          }
          return todo
        })
      }
    )
  }

  const deleteTodo = (id) => {
    setTodos(
      (currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id)
      }
    )
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos}  toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
