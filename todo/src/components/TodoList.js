import React, { useReducer } from 'react';
import Todo from './Todo';

const initialState = {
  todos: [
    { description: 'Go to the grocery store',
      completed: false },
    { description: 'Walk the dog',
      completed: true },
    { description: 'Feed the dog',
      completed: false },
    { description: 'Play with the dog',
      completed: false }
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE COMPLETE':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.description === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Todo list</h2>
      {state.todos.map(todo => (
        <Todo key={todo.description} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
