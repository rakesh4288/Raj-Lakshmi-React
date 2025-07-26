import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import taskReducer from '../features/taskSlice';
// import UserContactSlice from '../features/User';
import StudentContactSlice from '../features/StudentContactSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    StudentRecord: StudentContactSlice
  },
})

// Setps:
// Create the store first
// wrap the app by using provoder in index.js file
// create slice
// register the store


// Here inside the reducer object we will give the name of our reducer
// and later we can access the by useSelector anywhere in app