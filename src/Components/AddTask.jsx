import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';

const AddTask  = () => {
    const [taskName, setTaskName] = useState('');
    const [formError, setFormError] = useState({});
    const dispatch = useDispatch();
    const handleAddTask = (e) => {
        const value = e.target.value;
        // console.log('handleAddTask =', value);
        setTaskName(value);
    }

    const handleSubmit = (e) => {
        // console.log('handleSubmit =', e);
        e.preventDefault();
        const isValid = formValidation();
        if(isValid) {
            dispatch(addTask(taskName)); 
            // Whatever we are adding inside the dispatch function its called the Actions
            // while using the dispatch function its automatically calls reducer function
            setTaskName('');
        } else {
            console.log('Unable to Submit the Task');
            setFormError({isSubmit: 'Unable to Submit the Task'});
        }
    }

    const formValidation = () => {
        let errors = {}
        if(taskName === '') {
            errors.taskName = 'Please enter task name';
        }
        setFormError({...errors});
        const errorsKeys = Object.keys(errors);
        if(errorsKeys.length === 0) {
            console.log('No Errors Keys');
            return true;
        } else {
            console.log('Yes we have errors Keys');
            return false;
        }
    }
    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="addTask" className="sr-only">Add New Task</label>
                <input type="text" className="form-control" id="addTask" value={taskName} onChange={handleAddTask} />
                {
                    formError && (<div className='text-danger'>{formError.taskName}</div>)
                }

                {
                    formError && (<div className='text-danger'>{formError.isSubmit}</div>)
                }
            </div>

            <button type="submit" className="btn btn-primary btn-sm">Add New task</button>
        </form>
    )
}

export default AddTask;