import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NavBar from "./Components/NavBar.jsx"
import Footer from "./Components/Footer.jsx"
import Products from "./Pages/ProductsPage.jsx"
import Applications from "./Pages/Applications.jsx"


const Structure=()=>{
  return(
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Structure />,
    children:[
      {
        path:"/",
        element:<App />
      },
      {
        path:"/products",
        element:<Products />
      },
      {
        path:"/applications",
        element:<Applications />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
