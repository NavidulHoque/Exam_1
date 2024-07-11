/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Navbar = () => {
    
    return (
        <nav className="bg-white py-[10px] sticky">

            <div className="w-[90vw] h-full mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-x-5">

                <ul className="">
                    <li>
                        <Link className="hover:font-semibold" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:font-semibold" to="/savedNotes">Saved Notes</Link>
                    </li>
                </ul>

                

            </div>

        </nav>
    )
}

export default Navbar
