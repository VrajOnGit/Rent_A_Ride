import Logo from "../assets/Logo.jpeg"
import { Menu } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { NavLink } from "react-router-dom"

function Nav({ setShowSelection }) {

    function handleClick() {
        setShowSelection(true)
    }

    return (
        <nav className="sticky top-0 z-50">
            <div className="dark:text-white dark:bg-black flex w-full items-center justify-around bg-white max-w-8xl mx-auto py-2">
                
                <NavLink to="/">
                    <img src={Logo} alt="logo" className="h-16 cursor-pointer" />
                </NavLink>
                
                <div className="hidden sm:block">
                    <ul className="flex justify-center gap-12 list-none">
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                ` ${isActive ? "text-violet-700 underline underline-offset-8" : "text-gray-700"} hover:text-violet-800 dark:hover:text-blue-600 font-medium`
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={({ isActive }) =>
                                ` ${isActive ? "text-violet-700 underline underline-offset-8" : "text-gray-700"} hover:text-violet-800 dark:hover:text-blue-600 font-medium`
                            }>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vehicles" className={({ isActive }) =>
                                ` ${isActive ? "text-violet-700 underline underline-offset-8" : "text-gray-700"} hover:text-violet-800 dark:hover:text-blue-600 font-medium`
                            }>Vehicles</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faqs" className={({ isActive }) =>
                                ` ${isActive ? "text-violet-700 underline underline-offset-8" : "text-gray-700"} hover:text-violet-800 dark:hover:text-blue-600 font-medium`
                            }>FAQs</NavLink>
                        </li>
                    </ul>
                </div>
                
                <div className="hidden sm:block ">
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button 
                            className="px-4 py-1.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded text-white font-semibold hover:shadow-lg transition-all" 
                            onClick={handleClick}
                        >
                            Sign Up
                        </button>
                        <NavLink to="/loginOwner">
                            <button className="px-4 py-1.5 border-2 border-violet-500 text-violet-600 dark:text-blue-400 dark:border-blue-400 rounded font-semibold hover:bg-violet-50 dark:hover:bg-gray-900 transition-all">
                                Login
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="block sm:hidden ">
                    <Menu />
                </div>
            </div>
        </nav>
    )
}

export default Nav