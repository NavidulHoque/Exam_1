/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import Task from "../components/Task";

const TaskView = () => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const [showHowMany, setShowHowMany] = useState(6)

    return (
        <>
            <Helmet>
                <title>Task View</title>
            </Helmet>

            <ToastContainer />

            <div className='bg-black basis-[90vh] pt-[20px] flex flex-col gap-y-8 pb-[20px]'>

                <div className="w-[90vw] mx-auto grid gap-5 grid-cols-3">

                    {tasks.slice(0, showHowMany).map((task) => (
                        <Task key={task.id} task={task} />
                    ))}

                </div>

                <div className="flex justify-center gap-x-3">

                    {showHowMany > 6 && <button onClick={() => {

                        setShowHowMany((prev) => prev - 3)

                    }} className="bg-[#273c75] hover:bg-[#192a56] text-white py-[6px] px-[10px] rounded-md">Show Less</button>}

                    {tasks.length > showHowMany && <button onClick={() => {

                        setShowHowMany((prev) => prev + 3)

                    }} className="bg-[#273c75] hover:bg-[#192a56] text-white py-[6px] px-[10px] rounded-md">Show More</button>}

                </div>

            </div>
        </>
    )
}

export default TaskView
