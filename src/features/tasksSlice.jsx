import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
        DeleteConfirmationMessageState: JSON.parse(localStorage.getItem("messageState")) || false,
        taskID: "",
        theme: JSON.parse(localStorage.getItem("theme")) || "light",
    },
    reducers: {
        addTask: (state, action) => {

            state.tasks = [...state.tasks, action.payload]
            localStorage.setItem("tasks", JSON.stringify(state.tasks))

        },
        deleteTask: (state) => {

            state.tasks = state.tasks.filter(task => task.id != state.taskID)
            localStorage.setItem("tasks", JSON.stringify(state.tasks))

        },
        updateTask: (state, action) => {

            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }

            localStorage.setItem("tasks", JSON.stringify(state.tasks))
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

