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
    <>
      <div className={`todo completed-${todo.completed}`} onClick={handleClick}>
        {todo.description}
      </div>
      { todo.completionTime && 
        <div className='todo-time'>
          Completed at: {todo.completionTime}
        </div>
      }
    </>
  );
}

export default Todo;
