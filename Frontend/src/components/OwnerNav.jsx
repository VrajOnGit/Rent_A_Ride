import Logo from "../assets/Logo.jpeg"
import { Menu, User } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { NavLink } from "react-router-dom"

const OwnerNav = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-sm">
      <div className="dark:text-white dark:bg-black flex w-full items-center justify-around bg-white max-w-8xl mx-auto py-2">
        <img src={Logo} alt="logo" className="h-16" />

        <div className="hidden sm:block">
          <ul className="flex justify-center gap-12 list-none">
            <li>
              <NavLink to="/owner/home" className={({isActive}) => `font-medium hover:text-violet-800 dark:hover:text-blue-600 ${isActive ? 'text-violet-800 border-b-2 border-violet-800' : ''}`}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/owner/add-vehicle" className={({isActive}) => `font-medium hover:text-violet-800 dark:hover:text-blue-600 ${isActive ? 'text-violet-800 border-b-2 border-violet-800' : ''}`}>
                List Vehicle
              </NavLink>
            </li>
            <li>
              <NavLink to="/owner/earnings" className="hover:text-violet-800 dark:hover:text-blue-600 font-medium">
                Earnings
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <ThemeToggle />
          <button className="border-2 border-gray-500 p-2 rounded-full dark:border-gray-400">
            <User />
          </button>
        </div>

        <div className="block sm:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default OwnerNav