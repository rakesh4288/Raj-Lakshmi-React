// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../features/counterSlice";

// export const store = configureStore({
//   reducer: {counter:counterSlice},
// });

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Setps:
// Create the store first
// wrap the app by using provoder in index.js file
// create slice
// register the store