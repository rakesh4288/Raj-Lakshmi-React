import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../features/CounterSlice'
import taskReducer from '../features/TaskManagerSlice';
// import UserContactSlice from '../features/User';
import StudentContactSlice from '../features/StudentContactSlice';
import DummyUserSlice from '../features/DummyUserSlice';

export const store = configureStore({
  reducer: {
    CounterStore: CounterSlice,
    task: taskReducer,
    StudentRecord: StudentContactSlice,
    DummyUserStore: DummyUserSlice
  },
})

// Setps:
// Create the store first
// wrap the app by using provoder in index.js file
// create slice
// register the store


// Here inside the reducer object we will give the name of our reducer
// and later we can access the by useSelector anywhere in app