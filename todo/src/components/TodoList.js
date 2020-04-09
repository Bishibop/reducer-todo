import React, { useReducer } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { reducer, initialState } from '../reducers/TodoReducer';


function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function clearCompletedTodos() {
    dispatch({type: 'CLEAR TODOS'});
  }

  return (
    <div>
      <h2>Todo list</h2>
      {state.todos.map(todo => (
        <Todo key={todo.description} todo={todo} dispatch={dispatch} />
      ))}
      <TodoForm dispatch={dispatch}/>
      <button onClick={clearCompletedTodos}>Clear Completed</button>
    </div>
  );
}

export default TodoList;
