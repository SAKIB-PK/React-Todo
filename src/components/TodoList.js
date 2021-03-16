import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
  

    render(){
        return(
            <div>
                <ul>
                    
                    {this.props.todos.map(todo => (<TodoItem key ={todo.id} todo={todo} handleChange = {this.props.handleChange} />))}
                </ul>
            </div>
        )
    }
}
export default TodoList;