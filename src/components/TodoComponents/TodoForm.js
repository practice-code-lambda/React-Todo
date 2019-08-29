import React from 'react';


class TodoForm extends React.Component {
    state = { todo : "" }


    textInputHandler = (event) =>{
        this.setState({...this.state, todo:event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({todo:""})
    }
 
    render() { 
        //text change handler
        return ( 
            <form onSubmit={(e)=>this.submitHandler(e)}>
                {/* why does this continue to run if not in an anon func */}
                <input 
                onChange ={this.textInputHandler} 
                type="text" 
                name="todo"
                value={this.state.todo}
                placeholder="todo">
              
                </input>
                <button>submit</button>
            </form>
         );
    }
}
 
export default TodoForm;