import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../features/taskSlice";

const FilterTask = () => {
   const filter = useSelector(state => state.task.filters);
   // console.log('FilterTask =', filter);
   const dispatch = useDispatch();

   const handleAll = () => {
    dispatch(setFilter('all'));
   }

   const handleCompleted = () => {
    dispatch(setFilter('completed'));
   }
    return (
        <div>
            <button onClick={handleAll} className={`btn btn-outline-primary btn-sm ${filter  === 'all' ? 'active' : ''}`}>
                Show All Task
            </button>
            &nbsp;
            <button onClick={handleCompleted} className={`btn btn-outline-primary btn-sm ${filter  === 'completed' ? 'active' : ''}`}>
                Completed Task
            </button>
        </div>
    )
}

export default FilterTask