import { useState } from 'react'

import './App.css'


const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div >
      <h1 >To-Do List</h1>
      <div >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo} >Add</button>
      </div>
      <ul >
        {todos.map((todo, index) => (
          <li key={index} >
            {todo}
            <button onClick={() => removeTodo(index)} >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Update the styles object to ensure proper typing


export default App;
