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
    case 'COMPLETE':
      console.log('dispatch completing');
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.description === action.payload) {
            todo.completed = true;
          }
          return todo;
        })
      };
    case 'UNCOMPLETE':
      console.log('dispatch undoing completion');
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.description === action.payload) {
            todo.completed = false;
          }
          return todo;
        })
      };
    case 'ADD TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { description: action.payload,
            completed: false }
        ]
      };
    case 'CLEAR TODOS':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

export {
  reducer,
  initialState
}
