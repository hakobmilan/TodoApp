import React from 'react'
import Todo from './Todo'

function TodoList({ curId, setCurId, todos, toggleTodo, isActive, setIsActive, isPop, setIsPop }) {
  return (
    todos.map(todo => {
      return <Todo curId={curId} setCurId={setCurId} isPop={isPop} setIsPop={setIsPop} className={todo.completed ? (isActive ? 'todohidden' : 'todo todocompleted') : 'todo'} key={todo.id} todo={todo} toggleTodo={toggleTodo} isActive={isActive} setIsActive={setIsActive} />
    })
  )
}

export default TodoList