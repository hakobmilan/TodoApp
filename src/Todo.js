import React from 'react'
import './Todo.css'

function Todo({ curId, setCurId, isPop, setIsPop, todo, toggleTodo, className }) {

  function handleClick() {
    toggleTodo(todo.id)
  }

  return (

    <div className={className} >
      <input className='inputtodo' type="checkbox" checked={todo.completed} onChange={handleClick} />
      <p className='ptag'>{todo.name}</p>
      <button className='xbutton' onClick={() => {
        setIsPop(true);
        console.log(todo);
        setCurId(todo.id);
      }}>X</button>
    </div>
  )
}

export default Todo