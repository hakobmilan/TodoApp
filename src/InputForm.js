import React from 'react'
import { useRef, useState } from 'react'
import './InputForm.css'
function InputForm({ todos, setTodos }) {
  const [isError, setIsError] = useState(false);

  const inputRef = useRef();

  function handleChange(e) {
    const text = inputRef.current.value;
    if (text.length > 54) {

      inputRef.current.classList.add("errora");
      setIsError(true);
    }
    else {
      inputRef.current.classList.remove("errora");
      setIsError(false);
    }
  }
  function addTodo(e) {


    const text = inputRef.current.value;
    if (text === '') return;
    if (text.length > 54) return;
    inputRef.current.value = '';

    let newTodo = { id: Math.floor(Math.random() * 1000000), name: text, completed: false };
    let newTodos = [newTodo, ...todos];
    setTodos(newTodos)
    console.log(text);
  }
  return (
    <div className='formdiv'>

      <label id="label" for="myinput">Task</label>
      <input ref={inputRef} type="text" placeholder='Write here' onChange={handleChange} className='myinput' >
      </input>
      <button className='button' onClick={addTodo} >Add</button>
      {isError ? <p className='errortag' >Task content can contain max 54 characters.</p> : null}

    </div>
  )
}

export default InputForm