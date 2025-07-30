import { createSlice } from "@reduxjs/toolkit";
import studentList from "./StudentData";

const studentSlice = createSlice({
    name: 'StudentRecord',
    initialState: studentList,
    reducers: {
        addNewStudent:(state, action) => {
            // console.log('studentSlice addNewStudent =', action);
            state.push(action.payload)
        },
        updateStudent: (state, action) => {
            console.log('studentSlice updateStudent =', action.payload);
            const {id, studentName, studentEmail, studentPhone, city} = action.payload;
            const updateStudent = state.find(student => student.id === id);
            if(updateStudent) {
                updateStudent.studentName = studentName;
                updateStudent.studentEmail = studentEmail;
                updateStudent.studentPhone = studentPhone;
                updateStudent.city = city;
            }
        },
        deleteStudent: (state, action) => {
            console.log('studentSlice deleteStudent =', action);
            const {id} = action.payload;
            const deleteRecord = state.find(student => student.id === id);
            if(deleteRecord){
                return state.filter(item => item.id !== id);
            }
        }
    }
})

export const {addNewStudent, updateStudent, deleteStudent} = studentSlice.actions;
// Every reducers you need to export so that end component can import the perticular redcuers function and 
// dispact the appropriate actions
export default studentSlice.reducer;
// here we are exporting the reducer