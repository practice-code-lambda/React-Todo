import React from 'react';
import GlobalStyle from './styles/global'

import Todo from './components/TodoComponents/TodoForm'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Search from './components/TodoComponents/Search'

class App extends React.Component {
  state = {
    todos : [],
    search: '',
  }

  searchFunc = (searchItem) =>{
  
    this.setState({...this.state, search: searchItem})
    const searchMatch = this.state.todos.filter((todo)=>{
      if(todo.todo.slice(0,searchItem.length ) === searchItem){

        return true
      }else{
        return false
      }
    })
    // this.setState({...this.state, todos:searchMatch})
  
    this.setState({...this.state, todos: searchMatch})
  }




  componentDidMount(){
   let storage = localStorage.getItem("state")
   let storageParsed = JSON.parse(storage)
  
   if(storageParsed){
   this.setState({todos:storageParsed})
   }
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState.todos.length !== this.state.todos.length) {
     localStorage.setItem("state", JSON.stringify(this.state.todos))
    }
  }
//should be the form of the data
  addTodo = (todo)=>{
   
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

  clearAllHandler = () =>{
      this.setState({todos: []})  
  }

  clearCompleted = () =>{

    const filtered = this.state.todos.filter((cur)=>{
      // cur.completed ? false :true 
      if(cur.completed === true){
        return false
      }else{
        return true
      }
    })
    console.log("filtered", filtered)
    this.setState({todos:[...filtered]})
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
  
    return (
      <div>
        <Search searchFunc={this.searchFunc}></Search>
        <TodoForm 
        clearCompleted={this.clearCompleted}
        clearAllHandler={this.clearAllHandler}  
        addTodo={this.addTodo}>
        
        </TodoForm>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}></TodoList>

      </div>
      
    );
  }
}

export default App;
