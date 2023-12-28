import './App.css';
import {useState} from 'react';

function App() {


  const removeTodo = (todoId) =>{
  setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId) =>{
    setTodos(
      todos.map(
        todo =>{
          if(todo.id !== todoId) return todo;

        return {
          ...todo,
          completed:!todo.completed,
        }
        }
      )
    );
  }
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () =>{
    if(text.trim().length){
      setTodos([
        ...todos,
        {
         id: new Date().toISOString(),
         text,
         completed:false,
        }
      ])
      setText('');
    }
  }
  return (
    <div className="App">
    <label>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={addTodo}>Add todo</button>
    </label>
    <ul>
      {todos.map(todo => <li key ={todo.id}>
        <input type = "checkbox" checked = {todo.completed} onChange={() => toggleTodoComplete(todo.id)} />
        <span>{todo.text}</span>
        <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
      </li>)
      }
    </ul>
    </div>
  );
}

export default App;