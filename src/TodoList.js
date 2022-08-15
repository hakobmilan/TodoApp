import React from 'react'
import Todo from './Todo'

function TodoList({ curId, setCurId, toDelete, setToDelete, todos, toggleTodo, isActive, setIsActive, onDelete, isPop, setIsPop }) {
  return (
    todos.map(todo => {
      return <Todo curId={curId} setCurId={setCurId} toDelete={toDelete} setToDelete={setToDelete} isPop={isPop} setIsPop={setIsPop} onDelete={onDelete} className={todo.completed ? (isActive ? 'todohidden' : 'todo todocompleted') : 'todo'} key={todo.id} todo={todo} toggleTodo={toggleTodo} isActive={isActive} setIsActive={setIsActive} />
    })
  )
}

export default TodoList