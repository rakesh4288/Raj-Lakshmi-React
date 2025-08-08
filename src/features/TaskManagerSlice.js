import { createSlice, nanoid } from "@reduxjs/toolkit";

const TaskManagerSlice = createSlice({
    name: 'TaskManagerSlice',
    initialState: {
        items: [],
        filters: 'all',
    },
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (text) => {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        isCompleted: false,
                    }
                }
            }
        },
        toggleTask: (state, action) => {
            const task = state.items.find(t => t.id === action.payload);
            if(task) task.isCompleted = !task.isCompleted
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter(item => item.id!== action.payload);
        },
        setFilter: (state, action) => {
            state.filters = action.payload
        }
    }
});

// Always remember after ccreating reducers we need to export the all

export const {addTask, toggleTask, deleteTask, setFilter} = TaskManagerSlice.actions;
export default TaskManagerSlice.reducer;