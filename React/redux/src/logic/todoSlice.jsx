import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
    // todos: [{
    //     id: 1,
    //     text: "Hello world"
    // }]
}

const todoslice = createSlice({
    name: "mytodo",
    initialState,
    // it is like a switch case
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        updatetodo: () => { },
        deletetodo: () => { }
    }
})

export const { addtodo } = todoslice.actions

export default todoslice.reducer