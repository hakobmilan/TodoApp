import './App.css';
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import HideComponent from './HideComponent';
import InputForm from './InputForm';
import Popup from './Popup';

const KEY = "todos.key"

function App() {
  const [todos, setTodos] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isPop, setIsPop] = useState(false);
  const [toDelete, setToDelete] = useState(false);
  const [curId, setCurId] = useState(-1);


  useEffect(() => {
    const myTodos = JSON.parse(localStorage.getItem(KEY));
    if (myTodos) {
      setTodos(myTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed;
    setTodos(newTodos)
  }

  function onDelete(todoID) {

    setTodos(todos.filter((t) => t.id !== todoID))
  }



  return (
    <div className="App">
      {todos.length > 0 ? <HideComponent isActive={isActive} setIsActive={setIsActive} todos={todos} /> : null}

      <InputForm
        todos={todos} setTodos={setTodos} />

      {todos.length === 0 ? <div className='main' > <p className='p1'>Your life is blank page. You write on it.</p> <h1 className="h1">So start by adding  your tasks here.</h1> </div> : null}
      {isPop && <Popup curId={curId} onDelete={onDelete} toDelete={toDelete} setToDelete={setToDelete} isPop={isPop} setIsPop={setIsPop} />}
      <TodoList

        curId={curId}
        setCurId={setCurId}
        toDelete={toDelete}
        setToDelete={setToDelete}
        todos={todos} toggleTodo={toggleTodo} isActive={isActive} setIsActive={setIsActive} isPop={isPop} setIsPop={setIsPop} />
    </div>
  );
}

export default App;
