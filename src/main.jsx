import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayout from './MainLayout.jsx'
import AddCoffee from './components/AddCoffee.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
