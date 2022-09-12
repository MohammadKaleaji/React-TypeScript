import './App.css'
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';

// React.ReactNode this means any type

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo('')
    }
  }

  console.log(todos)
  
  return (
    <main className='App'>
     <span className='heading'>Taskify</span>
      
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />
      
    </main>
  )
}

export default App;