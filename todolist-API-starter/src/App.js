import TodoList from './TodoList'
import { TodosProvider } from './TodosContext'

function App() {
  return (
    <TodosProvider>
      <div className='App'>
        <TodoList />
      </div>
    </TodosProvider>
  )
}

export default App

// [
//   { id: '1', text: 'groceries' },
//   { id: '2', text: 'laundry' },
//   { id: '3', text: 'homework' },
// ]
