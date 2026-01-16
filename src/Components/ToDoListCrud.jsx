import { useState } from "react";

const ToDoListCrud = () => {
    const [taskInput, setTaskInput] = useState('');
    const [taskListData, setTaskListData] = useState([]);
    const [copyTaskListData, setCopyTaskListData] = useState([]);
    
    const [taskError, setTaskError] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleInput = (e) => {
        setTaskInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskInput === '') {
            setTaskError("Please Enter Task Name First !");
        } else {
            const isDuplicate = taskListData.some(item => 
                item.taskName.toLowerCase() === taskInput.toLowerCase() && 
                (!isEdit || item.id !== editIndex)
            );
            if (isDuplicate) {
                setTaskError("Task already exists!");
            } else {
                if (isEdit) {
                    // console.log('isEdit =', isEdit);
                    setTaskListData((prevState) => prevState.map((item) => {
                        if(item.id === editIndex) {
                            return {
                                ...item,
                                id: editIndex,
                                taskName: taskInput,
                                isCompleted: false
                            }
                        }
                        return item
                    }));

                    setCopyTaskListData((prevState) => prevState.map((item) => {
                        if(item.id === editIndex) {
                            return {
                                ...item,
                                id: editIndex,
                                taskName: taskInput,
                                isCompleted: false
                            }
                        }
                        return item
                    }));
                    setIsEdit(false);
                    setEditIndex(null);
                    setTaskInput('');
                    setTaskError('');
                } else {
                    // console.log('isEdit =', isEdit);
                    setTaskListData([
                        ...taskListData,
                        {
                            id: taskListData.length + 1,
                            taskName: taskInput,
                            isCompleted: false
                        }
                    ]);

                    setCopyTaskListData([
                        ...copyTaskListData,
                        {
                            id: copyTaskListData.length + 1,
                            taskName: taskInput,
                            isCompleted: false
                        }
                    ]);
                    setTaskInput('');
                    setTaskError('');
                }
            }
        }
    }

    const handleStatus = (id) => {
        // console.log('handleStatus =', id);
        const updatedTask = taskListData.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }
            return item;
        });
        setTaskListData(updatedTask);
    }

    const handleTaskDelete = (id) => {
        // console.log('handleTaskDelete =', id);
        if (window.confirm("Are you sure want to delete")) {
            setTaskListData((prevState) => prevState.filter((item) => item.id !== id));
            setCopyTaskListData((prevState) => prevState.filter((item) => item.id !== id));
        }
    }

    const handleTaskEdit = (id) => {
        // console.log('handleTaskEdit =', id);
        setIsEdit(true);
        setEditIndex(id);
        const tempArray = taskListData.filter((item) => item.id === id);
        // console.log('tempArray =', tempArray);
        setTaskInput(tempArray[0].taskName);
    }

    const handleTaskSearch = (e) => {
        const searchTask = e.target.value;
        // console.log('searchTask =', searchTask);
        if(searchTask === '' || searchTask === null) {
            setTaskListData(copyTaskListData);
        } else {
            let tempArray = copyTaskListData.filter((item) => item.taskName.toLowerCase().includes(searchTask.toLowerCase()));
            setTaskListData(tempArray);
        }
    }
    console.log('taskListData =', taskListData);

    return (
        <div id="to-do-list-crud-with-array-of-object">
            <div className="sectionHeader">
                <h6 className="sectionHeading">Task List With CRUD Operation</h6>
            </div>

            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <form className='blueGradientRight rounded shadow-sm p-3' onSubmit={handleSubmit}>
                        <h6>Task Form Registration:</h6>
                        <div className='mb-3'>
                            <label htmlFor="task-name" className="form-label"> Task Name:</label>
                            <input type='text' className='form-control' id='task-name' name="taskName" value={taskInput} onChange={handleInput} />
                            {taskError && (<div className="text-danger">{taskError}</div>)}
                        </div>

                        <div className="mb-3">
                            <button type='submit' className='btn btn-primary btn-sm'>Add New Task</button>
                        </div>
                    </form>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <div className="float-start"><h6>Task List</h6></div>
                    <div className="float-end">
                        <input type="search" placeholder='Search By Task Name' onChange={handleTaskSearch}/>
                    </div>

                    {taskListData && taskListData.length > 0 ? (
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Name</td>
                                    <td>Status</td>
                                    <td>Action</td>
                                </tr>
                            </thead>

                            <tbody>
                                {taskListData.map((item, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td>{item.id}</td>
                                            <td style={item.isCompleted ? { textDecoration: 'line-through', color: 'gray' } : {}}>{item.taskName}</td>
                                            <td>{item.isCompleted ? "Completed" : "Not Done"}</td>
                                            <td>
                                                {item.isCompleted ? (
                                                    <i className="bi bi-check-circle-fill" style={{ cursor: 'pointer' }} onClick={() => handleStatus(item.id)}></i>
                                                ) : (
                                                    <i className="bi bi-alexa" style={{ cursor: 'pointer' }} onClick={() => handleStatus(item.id)}></i>
                                                )}

                                                &nbsp;&nbsp;
                                                <i className="bi bi-pencil-square" style={{ cursor: 'pointer' }} onClick={() => handleTaskEdit(item.id)}></i>
                                                &nbsp;&nbsp;
                                                <i className="bi bi-trash" style={{ cursor: 'pointer' }} onClick={() => handleTaskDelete(item.id)}></i>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div className="alert alert-danger">Task Not Found !! Please Add Any Task</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ToDoListCrud;