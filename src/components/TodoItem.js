import React, {Component} from 'react';
import classNames from 'classnames/bind';


class TodoItem extends Component {

    render ( ) {
            const {key, done, children, onToggle, onRemove} = this.props;
            return (
                <div className='todo-item' onClick={onToggle}>
                    <input className='tick' type='checkbox' checked={done} readOnly/>
                    <div className='text'>{children}</div>
                    <div className='delete' onClick= {(e) => {
                        onRemove();
                        e.stopPropagation();
                    }
                }>Delete
                </div>
                </div>);
    }
}

export default TodoItem;