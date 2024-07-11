/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Navbar = () => {
    
    return (
        <nav className="bg-[rgb(50,50,50)] h-[10vh] text-white py-[10px] sticky top-0 left-0 flex items-center">

            <div className="w-[90vw] mx-auto">

                <ul className="flex justify-end gap-x-8">

                    <li>
                        <Link className="hover:font-semibold" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:font-semibold" to="/taskView">Task View</Link>
                    </li>
                    <li>
                        <Link className="hover:font-semibold" to="/contact">Contact</Link>
                    </li>

                </ul>

            </div>

        </nav>
    )
}

export default Navbar
