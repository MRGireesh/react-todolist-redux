import { createSlice } from "@reduxjs/toolkit";

const name = "list";
const initialState = {value:{list : []}};
const reducers = {
    updateToDoList : (state , action)=>{
        state.value = action.payload;
    }
};
const todoListSlice = createSlice({
    name,
    initialState,
    reducers
}
);
export const { updateToDoList } = todoListSlice.actions; 
export default todoListSlice.reducer;
