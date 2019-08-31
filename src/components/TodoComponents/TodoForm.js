import React from 'react';


class TodoForm extends React.Component {
    state = [];


    textInputHandler = (event) =>{
        this.setState({...this.state, todo:event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault()
        this.props.addTodo({todo:this.state.todo,
                            completed:false,
                            id: Date.now()
                 })
        this.setState({todo:"",
                       completed:false,
                       id: Date.now()
                                })
    }


 
    render() { 
        //text change handler
        return ( 
            <>
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
            <button onClick={this.props.clearAllHandler}>clear all</button>
            <button onClick={this.props.clearCompleted}>clear completed</button>
            </>
         );
    }
}
 
export default TodoForm;