import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayout from './MainLayout.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'
import { ToastContainer } from 'react-toastify'
import UpdateCoffee from './components/UpdateCoffee.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>
  },
  {
    path: "/coffeeDetails/:id",
    element:<CoffeeDetails></CoffeeDetails>
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>,
)
