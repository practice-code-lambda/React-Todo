import React from 'react';

class Search extends React.Component {
    state = { 
        search: ""
     }


     textChangeHandler = (event) =>{
        this.setState({search:event.target.value})
       
     }

     onSubmitHandler = (e)=>{
         e.preventDefault()
        this.props.searchFunc(this.state.search)

     }

    render() { 
        return ( 
            <form onSubmit={(e)=>this.onSubmitHandler(e)}>
                <input
                type="text"
                placeholder="search"
                value={this.state.search}
                name="search"
                onChange={this.textChangeHandler}
                ></input>
                <button>search</button>
            </form>
         );
    }
}
 
export default Search;