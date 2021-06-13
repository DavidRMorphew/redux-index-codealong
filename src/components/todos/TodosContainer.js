import React, {Component} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
    
    renderTodos = () => (
        this.props.todos.map((todo, index) => <Todo key={index} todo={todo}/>)
    )

    render(){
        return(
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}
export default connect(state => ({todos: state.todos}))(TodosContainer)