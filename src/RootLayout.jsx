import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import DeleteConfirmationMessage from "./components/DeleteConfirmationMessage"
import { useSelector } from "react-redux"

const RootLayout = () => {
  const DeleteConfirmationMessageState = useSelector((state) => state.tasks.DeleteConfirmationMessageState)
  const theme = useSelector(state => state.tasks.theme)

  return (
    <div className={theme}>

      <div className='flex flex-col min-h-screen relative'>

        {DeleteConfirmationMessageState && <DeleteConfirmationMessage DeleteConfirmationMessageState={DeleteConfirmationMessageState} />}

        <Navbar />
        <Outlet />

      </div>

    </div>
  )
}

export default RootLayout
