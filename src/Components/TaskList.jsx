import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteTask, toggleTask } from "../Features/TaskManagerSlice";
const TaskList = () => {
    const [taskItemList, setTaskItemList] = useState([]);
    const {items, filters} = useSelector(state => state.TaskManagerStore);
    const dispatch = useDispatch();
    // console.log('All Task items =', items);
    // console.log('Selected filter =', filters);
    const filteredTask = filters === 'completed' ? items.filter(task => task.isCompleted === true) : items;
    
    useEffect(() => {
        setTaskItemList(filteredTask);
    }, [filteredTask]);

    const handleDelete = (id) => {
        console.log('handleDelete =', id);
        if(window.confirm('Are you sure want to delete ?')){
            console.log('Yes I want to delete');
            dispatch(deleteTask(id));
        }
    }

    const handleToggle = (id) => {
        console.log('handleToggle =', id);
        dispatch(toggleTask(id));
    }
    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Task Name</td>
                    <td>Task Status</td>
                    <td>Actions</td>
                </tr>
            </thead>

            <tbody>
                {
                    taskItemList.length === 0 && (
                        <tr>
                            <td colSpan={4} align="center" className="text-success">No Task Present</td>
                        </tr>
                    )
                }

                {
                    taskItemList.map((item, index) => {
                        return(
                            <tr key={item.id}>
                                <td style={{backgroundColor: `${item.isCompleted ? '#b7c4faff' : '#ffffff'}`}}>{index + 1}</td>
                                <td style={{backgroundColor: `${item.isCompleted ? '#b7c4faff' : '#ffffff'}`}}>{item.text}</td>
                                <td style={{backgroundColor: `${item.isCompleted ? '#b7c4faff' : '#ffffff'}`}}>{item.isCompleted === false ? 'False': 'True' }</td>
                                <td align="center">
                                    <button className="btn btn-info btn-sm" onClick={() => handleToggle(item.id)}>
                                        {item.isCompleted ? 'Undo' : 'Done'}
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                                        <i className="bi bi-trash" ></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TaskList;