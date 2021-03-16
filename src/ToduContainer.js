import React, { Component } from 'react';
import Header from "./components/Header";
//App Component
import TodoList from './components/TodoList';



  

class ToduContainer extends Component{
   
// Todu State
    state = {
        todos:[
            {
                id:1,
                title: "Web Programming. ",
                completed: true
            },
            {
            id: 2,
            title: "Develop website and add content",
            completed: false
            },
            {
            id: 3,
            title: "Deploy to live server",
            completed: true
            },
            {
            id: 4,
            title: "Deploy to React App",
            completed: true
            }
        ]
    }
    
    //checkbox handle function 
    checkHandleChange(id){
        this.setState(prevState => {
            return {
              todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  }
                }
                return todo
              }),
            }
          })
    }


    
    render(){
        return(
            <div>
                <Header />   
                <TodoList todos={this.state.todos} handleChange = {this.checkHandleChange}/>
                
                
            </div>
           
        )
    }
}
export default ToduContainer;