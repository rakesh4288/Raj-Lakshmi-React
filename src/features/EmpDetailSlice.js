import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// create action
export const createEmployee = createAsyncThunk("createEmployee", async(data) => {
    const headerOption = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
}
    const response = await fetch("http://localhost:8000/employees",headerOption);
    try{
        const result = await response.json();
        return result;
    } 
    catch(error){
        console.log('EmpDetailSlice =', error);
    }
});

const EmpDetailSlice = createSlice({
    name: "EmpDetailSlice",
    initialState:{
        empData: [],
        isLoading: false,
        isError: null
    },
    // extraReducers: {
    //     [createEmployee.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [createEmployee.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.empData.push(action.payload);
    //     },
    //     [createEmployee.rejected]: (state, action) => {
    //         state.isLoading = false;
    //         state.empData = action.payload
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(createEmployee.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(createEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.empData = action.payload;
        });

        builder.addCase(createEmployee.rejected, (state, action) => {
            state.isLoading = false;
            state.empData = [];
            state.isError = action.payload;
        });
    }
})

export default EmpDetailSlice.reducer;