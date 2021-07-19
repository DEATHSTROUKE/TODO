import React from 'react';
import './AddTask.css'

const AddTask = ({visible}) => {
    return (
        <>
            {visible && <div>123</div>}
        </>
    );
};

export default AddTask;
