import React from 'react';

function Todo({ todo, dispatch }) {
  function handleClick(e) {
    if (todo.completed) {
      dispatch({type: 'UNCOMPLETE', payload: todo.description});
    } else {
      dispatch({type: 'COMPLETE', payload: todo.description});
    }
  };

  return (
    <div onClick={handleClick} className={`completed-${todo.completed}`}>
      {todo.description}
    </div>
  );
}

export default Todo;
