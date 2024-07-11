import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"

const RootLayout = () => {
  const theme = useSelector(state => state.tasks.theme)

  return (
    <div className={theme}>

      <div className='flex flex-col min-h-screen relative'>

        <Navbar />
        <Outlet />

      </div>

    </div>
  )
}

export default RootLayout
