import React from 'react';

function Todo({ todo }) {
  return (
    <div className={`completed-${todo.completed}`}>
      {todo.description}
    </div>
  );
}

export default Todo;
