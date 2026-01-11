import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import TaskList from "./TaskList";

const TaskManager  = () => {    
    return (
        <>
            <h5>Task Management by using Redux: </h5>
            <AddTask/> <br/>
            <FilterTask/> <br/>
            <TaskList/>
        </>
    )
}

export default TaskManager;