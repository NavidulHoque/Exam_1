import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        notes: JSON.parse(localStorage.getItem("tasks")) || [],
        DeleteConfirmationMessageState: JSON.parse(localStorage.getItem("messageState")) || false,
        taskID: "",
        theme: JSON.parse(localStorage.getItem("theme")) || "light",
    },
    reducers: {
        addTask: (state, action) => {

            state.notes = [...state.notes, action.payload]
            localStorage.setItem("notes", JSON.stringify(state.notes))

        },
        deleteTask: (state) => {

            state.notes = state.notes.filter(note => note.id != state.userID)
            localStorage.setItem("notes", JSON.stringify(state.notes))

        },
        updateTask: (state, action) => {

            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
                state.notes[index] = action.payload;
            }

            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        toggleDeleteConfirmationMessage: (state, action) => {

            state.DeleteConfirmationMessageState = !state.DeleteConfirmationMessageState

            state.taskID = action.payload

            localStorage.setItem("messageState", JSON.stringify(state.DeleteConfirmationMessageState))
        },
        toggleTheme: (state, action) => {

            state.theme = action.payload
            localStorage.setItem("theme", JSON.stringify(state.theme))

        }
    }
})

export const { addTask, deleteTask, updateTask, toggleDeleteConfirmationMessage, toggleTheme } = tasksSlice.actions
export default tasksSlice.reducer

