import { createContext, useState, useEffect } from 'react'

const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
    console.log('got it!')
  }, [])

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:3001/todos')
    const data = await response.json()

    setTodos(data)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContext
