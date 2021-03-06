import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        const {key, todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                 Key= {todo.id}
                 done = {todo.done}
                 onToggle= {() => onToggle(todo.id)}
                 onRemove = {() => onRemove(todo.id)}
                 >
                 {todo.text}
                 </TodoItem>                
            )
        )
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList;