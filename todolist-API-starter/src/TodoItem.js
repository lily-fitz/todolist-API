import { useContext } from 'react'
import TodosContext from './TodosContext'

function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodosContext)

  return (
    <div>
      <p>{todo.text}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
