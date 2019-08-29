import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    return ( 
        //map out todos>
        
            props.todos.map((todo)=>{
                return <Todo todo={todo}></Todo>
            })
        
     );
}
 
export default TodoList;

