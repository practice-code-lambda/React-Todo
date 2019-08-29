import React from 'react';

import Todo from './components/TodoComponents/TodoForm'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  state = {
    todos : [{todo:"test", id:1, completed:false}],
  }
//should be the form of the data
  addTodo = (todo)=>{
    console.log("in app",todo)
    this.setState(state => {

    const todos = [...state.todos,todo]
    return({todos:todos})
  })
}

  toggleCompleted = (id,state) =>{
    console.log("toggleCompleted", id)
    const newTodos = this.state.todos.map((cur)=>{
      if(cur.id === id){
        cur.completed = !cur.completed
      }
      
      return cur
    })
    this.setState({...newTodos})
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <TodoForm  addTodo={this.addTodo}></TodoForm>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}></TodoList>
      </div>
    );
  }
}

export default App;
