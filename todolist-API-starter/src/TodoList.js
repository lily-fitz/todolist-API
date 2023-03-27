import { useContext } from 'react'
import TodoItem from './TodoItem'
import TodosContext from './TodosContext'

function TodoList() {
  const { todos } = useContext(TodosContext)

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
