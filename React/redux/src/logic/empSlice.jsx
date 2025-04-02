import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    emps: []
}

const empslice = createSlice({
    name: "empdetails",
    initialState,
    reducers: {
        adduser: (state, action) => {
            // const emp = {
            //     id: nanoid,
            //     ename: action.payload,
            //     doj: action.payload,
            //     sal: action.payload,
            // }
            state.emps.push(action.payload)
        }
    }
})

export const { adduser } = empslice.actions

export default empslice.reducer