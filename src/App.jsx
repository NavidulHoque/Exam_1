/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Home from './pages/Home.jsx'
import TaskView from './pages/TaskView.jsx'
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/taskView' element={<TaskView />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Route>
    )
  )

  return (
   <RouterProvider router={router} />
  )
}

export default App
