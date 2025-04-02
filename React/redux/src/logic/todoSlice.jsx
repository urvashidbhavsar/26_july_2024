import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos: []
    todos: [{
        id: 1,
        text: "Hello world"
    }]
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
        updatetodo: (state, action) => {
            const { id, updateText } = action.payload;
            const todoupdate = state.todos.find(todo => todo.id === id)
            if (todoupdate) {
                todoupdate.text = updateText
            }
        },
        deletetodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addtodo, deletetodo, updatetodo } = todoslice.actions

export default todoslice.reducer