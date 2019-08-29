import React from 'react';

import Todo from './components/TodoComponents/TodoForm'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  state = {
    todos : ["test"],
  }

  addTodo = (todo)=>{
    this.setState(state => {

    const todos = [...state.todos,todo]
    return({todos:todos})
  })
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <TodoForm addTodo={this.addTodo}></TodoForm>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}></TodoList>
      </div>
    );
  }
}

export default App;
