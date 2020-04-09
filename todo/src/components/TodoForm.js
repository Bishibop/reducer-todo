import React, { useState } from 'react';

function TodoForm({ dispatch }) {
  const [description, setDescription] = useState('');

  function handleChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'ADD TODO', payload: description });
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={description}></input>
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default TodoForm;
