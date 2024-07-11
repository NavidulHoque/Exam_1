import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    },
    reducers: {
        addTask: (state, action) => {

            state.tasks = [...state.tasks, action.payload]
            localStorage.setItem("tasks", JSON.stringify(state.tasks))

        },
        deleteTask: (state, action) => {

            state.tasks = state.tasks.filter(task => task.id != action.payload)
            localStorage.setItem("tasks", JSON.stringify(state.tasks))

        },
        updateTask: (state, action) => {

            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }

            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        },
    }
})

export const { addTask, deleteTask, updateTask } = tasksSlice.actions
export default tasksSlice.reducer

