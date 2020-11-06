import './App.css';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useState, useRef } from 'react';

const Button = styled.button`
margin-left: 10px;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const id = useRef(1);
  const newTodo = {
    id: id.current,
    content: value,
    isDone: false,
  };

  
  const handleSubmit = (e) => {
    if (value.trim() !== '' && (e.key === 'Enter')) {
      setTodos([newTodo, ...todos]);
      setValue('');
      id.current++;
    }
  };
  
  const handleInputChange = (e) => setValue(e.target.value);
  
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      })
    )
  }

  return (
    <div className="App">
      <div className="container">
        <h1>React Todo List</h1>
        <div className="filter">
          <Button>全部</Button>
          <Button>已完成</Button>
          <Button>未完成</Button>
        </div>

        <input
          className="new_todo"
          type="text"
          placeholder="Type something and press enter"
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleSubmit}
        />

        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleIsDone={handleToggleIsDone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
