import React from 'react';

const PageTemplate = ({children}) => {
    return (
        <div className='page-template'>
            <h1>To Do List</h1>
            <div className='content'>
            {children}
            </div>
        </div>
    );
}

export default PageTemplate;