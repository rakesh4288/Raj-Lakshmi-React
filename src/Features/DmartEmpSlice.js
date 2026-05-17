import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8000/employees";

// create action
export const createEmployee = createAsyncThunk("createEmployee", async(data) => {
    const headerOption = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
}
    const response = await fetch(url, headerOption);
    try{
        const result = await response.json();
        return result;
    } 
    catch(error){
        console.log('DmartEmpSlice =', error);
    }
});

// read action
export const showDmartEmp = createAsyncThunk("showDmartEmp", async() => {
    const response = await fetch(url);
    try {
        const result = await response.json();
        console.log("result =", result);
        return result;
    }
    catch(error) {
        console.log("StudentDetailSlice =", error);
    }
})

// DmartEmpSlice
const DmartEmpSlice = createSlice({
    name: "DmartEmpSlice",
    initialState:{
        apiData: [],
        isLoading: false,
        isError: null
    },
    extraReducers: (builder) => {
        builder.addCase(createEmployee.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(createEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.apiData = action.payload;
        });

        builder.addCase(createEmployee.rejected, (state, action) => {
            state.isLoading = false;
            state.apiData = [];
            state.isError = action.payload;
        });

        builder.addCase(showDmartEmp.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(showDmartEmp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.apiData = action.payload;
        });

        builder.addCase(showDmartEmp.rejected, (state, action) => {
            state.isLoading = false;
            state.apiData = [];
            state.isError = action.payload;
        });
    }
})

export default DmartEmpSlice.reducer;