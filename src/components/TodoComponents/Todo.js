import React from 'react';

const LineThrough = {
    textDecoration: 'line-through'
}

const Todo = (props) => {
    console.log("props in Todo",props)
    return ( 
        <h1 style={props.completed ? {textDecoration: 'line-through'} : {textDecoration:'none'}}onClick={props.toggleCompleted}>{props.todo}</h1>
     );
}
 
export default Todo
