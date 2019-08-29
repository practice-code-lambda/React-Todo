import React from 'react';
import { format } from 'util';

class TodoForm extends Component {
    state = { todo = "" }
    render() { 

        //text change handler
        return ( 
            <form>
                <input onChange ={} type="text" placeholder="todo">
                </input>
                <button>submit</button>
            </form>
         );
    }
}
 
export default TodoForm;