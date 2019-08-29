import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    return ( 
        //map out todos>
        
            props.todos.map((todo)=>{
                return <Todo toggleCompleted={()=>props.toggleCompleted(todo.id)} completed={todo.completed} todo={todo.todo}></Todo>
            })
        
     );
}
 
export default TodoList;

