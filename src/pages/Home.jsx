import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { addTask } from "../features/tasksSlice";

const Home = () => {
    const [name, setName] = useState(JSON.parse(localStorage.getItem("name")) || "")
    const [title, setTitle] = useState(JSON.parse(localStorage.getItem("title")) || "")
    const [description, setDescription] = useState(JSON.parse(localStorage.getItem("description")) || "")
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const inputRef = useRef(null)

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

            inputRef.current.focus()

            toast.success('Successfully task added', {
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
        else {
            toast.error('Please fill up the Project details', {
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

    function handleCancel() {
        setTitle("")
        setDescription("")
        setName("")
        localStorage.setItem("title", JSON.stringify(""))
        localStorage.setItem("description", JSON.stringify(""))
        localStorage.setItem("name", JSON.stringify(""))
    }

    return (
        <>
            <Helmet>
                <title>Add Task</title>
            </Helmet>
            <ToastContainer />
            <div className="bg-black flex justify-center items-center h-[90vh] font-mono text-white">

                <div className="flex flex-col items-start gap-y-5 rounded-md py-[10px] px-[20px] text-[24px] w-[45vw] bg-[rgb(50,50,50)]">

                    <h1 className="text-center text-[30px] w-full">Add Your Task</h1>

                    <div className="flex flex-col w-full gap-y-2">

                        <label htmlFor="name">Name:</label>

                        <input ref={inputRef} className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none bg-[rgb(50,50,50)]" type="text" placeholder="Name" autoFocus onChange={(e) => {

                            setName(e.target.value)
                            localStorage.setItem("name", JSON.stringify(e.target.value))

                        }} value={name} id="name" name="name" />

                    </div>

                    <div className="flex flex-col w-full gap-y-2">

                        <label htmlFor="title">Project Title:</label>

                        <input className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none bg-[rgb(50,50,50)]" type="text" placeholder="title" onChange={(e) => {

                            setTitle(e.target.value)
                            localStorage.setItem("title", JSON.stringify(e.target.value))

                        }} value={title} id="title" name="title" />

                    </div>

                    <div className="flex flex-col w-full gap-y-2">

                        <label htmlFor="description">Project Description:</label>

                        <textarea className="p-[5px] w-full rounded-md border-[2px] border-[#3498db] outline-none resize-none bg-[rgb(50,50,50)]" placeholder="description" maxLength={100} rows={3} onChange={(e) => {

                            setDescription(e.target.value)
                            localStorage.setItem("description", JSON.stringify(e.target.value))

                        }} value={description} id="description" name="description" />

                        <span className="text-end text-[15px] text-slate-400">{100 - description.length} character remaining</span>

                    </div>

                    <div className="flex gap-x-2 items-center">

                        <input type="checkbox" onChange={() => setToggle(prev => !prev)} checked={!toggle} id="toggle" name="toggle" />

                        <label htmlFor="toggle" className="text-[18px]">I want to add this task</label>

                    </div>

                    <div className="flex gap-x-3">

                        <button onClick={handleSave} disabled={toggle} className={`${toggle ? 'bg-slate-400' : 'bg-[#3498db] hover:bg-[#2980b9]'} text-white rounded-md px-[10px]`}>Save</button>

                        <button onClick={handleCancel} className="bg-[#3498db] text-white hover:bg-[#2980b9] rounded-md px-[10px]">Cancel</button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Home
