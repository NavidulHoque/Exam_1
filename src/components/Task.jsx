/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { formatDistance } from 'date-fns'
import { Bounce, toast } from 'react-toastify';
import { deleteTask, updateTask } from "../features/tasksSlice";

const Task = ({ task }) => {

    const dispatch = useDispatch()
    const [update, setUpdate] = useState(true)
    const [cancel, setCancel] = useState(false)
    const [name, setName] = useState(task.name)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const inputRef = useRef(null)

    useEffect(() => {

        if (cancel) {
            setTitle(task.title)
            setDescription(task.description)
            setName(task.name)
            setCancel(false)
        }

    }, [cancel])


    function handleUpdate() {

        if (update) {
            setUpdate(false)
            inputRef.current.focus()
        }
        else {

            if (title && description && name) {
                toast.success('Successfully task updated', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "dark",
                    transition: Bounce,
                });

                setUpdate(true)

                dispatch(updateTask({
                    id: task.id,
                    name,
                    title,
                    description,
                    savedDate: new Date().toString()
                }))
            }

            else {
                toast.error("Please fill up the Project Details", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        }
    }

    function handleCancel() {
        setCancel(true)
        setUpdate(true)
    }

    return (
        <div className="min-w-[300px] border-[1px] border-white bg-[rgb(50,50,50)] text-white shadow-md rounded-md py-[10px] px-[15px] flex flex-col gap-y-5">

            <div className="flex flex-col w-full gap-y-2">

                <label htmlFor="name" className="text-[24px]">Name:</label>

                <input ref={inputRef} className="p-[5px] text-[20px] outline-none w-full bg-[rgb(50,50,50)]" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} readOnly={update} name="name" id="name" />

            </div>

            <div className="flex flex-col w-full gap-y-2">

                <label htmlFor="title" className="text-[24px]">Project Title:</label>

                <input className="p-[5px] text-[20px] outline-none w-full bg-[rgb(50,50,50)]" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} readOnly={update} id="title" name="title" />

            </div>

            <div className="flex flex-col w-full gap-y-2">

                <label htmlFor="description" className="text-[24px]">Project Description:</label>

                <textarea className="p-[5px] text-[20px] resize-none w-full outline-none bg-[rgb(50,50,50)]" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} readOnly={update} maxLength={100} rows={3} name="description" id="description" />

            </div>

            <span className="text-[18px] text-slate-300">{formatDistance(task.savedDate, new Date(), { addSuffix: true })}</span>

            <div className="flex gap-x-3 text-white w-full justify-end">

                {!update && <button onClick={handleCancel} className="w-[75px] bg-[#9b59b6] hover:bg-[#8e44ad] rounded-md py-[7px] text-[18px]">Cancel</button>}

                <button onClick={handleUpdate} className="w-[75px] bg-[#9b59b6] hover:bg-[#8e44ad] rounded-md py-[7px] text-[18px]">{update ? "Update" : "Save"}</button>

                <button onClick={() => {

                    dispatch(deleteTask(task.id))

                }} className="w-[75px] bg-red-500 hover:bg-red-600 rounded-md py-[7px] text-[18px]">Delete</button>

            </div>

        </div>
    )
}

export default Task
