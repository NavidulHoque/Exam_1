import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { addTask } from "../features/tasksSlice";

const Home = () => {
    const [name, setName] = useState(JSON.parse(localStorage.getItem("name")) || "")
    const [title, setTitle] = useState(JSON.parse(localStorage.getItem("title")) || "")
    const [description, setDescription] = useState(JSON.parse(localStorage.getItem("description")) || "")
    const dispatch = useDispatch()
    const theme = useSelector(state => state.tasks.theme)

    function handleSave() {
        if (title && description && name) {
            dispatch(addTask({
                id: Date.now().toString(32),
                name,
                title,
                description,
                savedDate: new Date().toString()
            }))

            setTitle("")
            setDescription("")
            setName("")
            localStorage.setItem("title", JSON.stringify(""))
            localStorage.setItem("description", JSON.stringify(""))
            localStorage.setItem("name", JSON.stringify(""))

            toast.success('Task Saved', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme,
                transition: Bounce,
            });
        }
        else {
            toast.error('Please fill up the Project details', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme,
                transition: Bounce,
            });
        }

    }

    return (
        <>
            <Helmet>
                <title>Add Task</title>
            </Helmet>
            <ToastContainer />
            <div className="bg-slate-100 dark:bg-black flex justify-center items-center basis-[645px] font-mono">

                <div className="flex flex-col items-start gap-y-2 rounded-md p-[10px] text-[24px] w-[80vw] sm:basis-[600px] bg-white dark:bg-[rgb(50,50,50)] shadow-md">

                    <h1 className="text-center text-[30px] w-full dark:text-white">Add Your Tasks</h1>

                    <input className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none dark:bg-[rgb(50,50,50)] dark:text-white" type="text" placeholder="Name" autoFocus onChange={(e) => {

                        setName(e.target.value)
                        localStorage.setItem("name", JSON.stringify(e.target.value))

                    }} value={name} />

                    <input className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none dark:bg-[rgb(50,50,50)] dark:text-white" type="text" placeholder="Title" onChange={(e) => {

                        setTitle(e.target.value)
                        localStorage.setItem("title", JSON.stringify(e.target.value))

                    }} value={title} />

                    <textarea className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none resize-none dark:bg-[rgb(50,50,50)] dark:text-white" placeholder="Description" maxLength={200} rows={4} onChange={(e) => {

                        setDescription(e.target.value)
                        localStorage.setItem("description", JSON.stringify(e.target.value))

                    }} value={description} />

                    <button onClick={handleSave} className="bg-[#3498db] text-white hover:bg-[#2980b9] rounded-md px-[10px]">Save Task</button>

                </div>

            </div>
        </>
    )
}

export default Home
