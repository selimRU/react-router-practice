import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./Main/Main"
import Home from "./componenets/Home/Home"
import About from "./componenets/About/About"
import Contact from "./componenets/Contact/Contact"
import Details from "./componenets/Details/Details"
import Error from './componenets/Error/Error'


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')

        ,
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/datum/:id',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
        element: <Details></Details>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
