import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Features/CounterSlice'
import TaskReducer from '../Features/TaskManagerSlice';
import StudentContactSlice from '../Features/StudentContactSlice';
import DummyUserSlice from '../Features/DummyUserSlice';
import FakeProductSlice from '../Features/FakeProductSlice';
import DmartEmpSlice from '../Features/DmartEmpSlice';

export const Store = configureStore({
  reducer: {
    CounterStore: CounterSlice,
    TaskManagerStore: TaskReducer,
    StudentStore: StudentContactSlice,
    DummyUserStore: DummyUserSlice,
    FakeProductStore: FakeProductSlice,
    DmartEmpStore: DmartEmpSlice,
  },
})

// Setps:
// Create the store first
// wrap the app by using provoder in index.js file
// create slice
// register the store


// Here inside the reducer object we will give the name of our reducer
// and later we can access the by useSelector anywhere in app